import { useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};

/**
 * `createPortal` that renders only in the browser, after hydration: the server
 * has no `document`, and a portal the server did not render breaks hydration.
 */
export default function ClientPortal({
  children,
  to,
}: {
  children?: ReactNode;
  to: () => Element | DocumentFragment | null | undefined;
}) {
  const target = useHydrated() ? to() : null;
  return target ? createPortal(children, target) : null;
}

/** False on the server and during hydration, true after. */
// eslint-disable-next-line react-refresh/only-export-components -- shares the hydration check with generated wrappers
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
