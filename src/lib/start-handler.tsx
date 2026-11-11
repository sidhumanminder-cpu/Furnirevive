import {
  createSsrStreamResponse,
  defineHandlerCallback,
  getSsrStatus,
  transformReadableStreamWithRouter,
} from "@tanstack/react-router/ssr/server";
import {
  StartServer,
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";

/**
 * Start's page handler, except that crawlers get each page whole. Start makes
 * a crawler wait for all of a page's data too, but it reads the render while
 * it waits, so the content of every `useQuery` from `@/lib/convex-query` ends
 * up in hidden blocks that only JavaScript moves into place, and crawlers that
 * don't run it see a blank page. Browsers still get the page as it streams.
 */
const renderPage = defineHandlerCallback(async (ctx) => {
  const { request, router, responseHeaders } = ctx;
  if (!isbot(request.headers.get("user-agent"))) return defaultStreamHandler(ctx);
  try {
    const stream = await renderToReadableStream(<StartServer router={router} />, {
      signal: request.signal,
      nonce: router.options.ssr?.nonce,
      progressiveChunkSize: Number.POSITIVE_INFINITY,
      onError: (error) => {
        if (!request.signal.aborted) console.error(error);
      },
    });
    // Reading starts only now, so React writes every finished part in place.
    await stream.allReady;
    const body = transformReadableStreamWithRouter(router, stream, {
      rendererSafePoint: "script-close",
      signal: request.signal,
    });
    return createSsrStreamResponse(
      router,
      new Response(body, { status: getSsrStatus(router), headers: responseHeaders }),
    );
  } catch (error) {
    router.serverSsr?.cleanup();
    throw error;
  }
});

export default { fetch: createStartHandler(renderPage) };
