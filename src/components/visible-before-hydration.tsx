import { useRouterState } from "@tanstack/react-router";
import {
  AnimatePresence as MotionAnimatePresence,
  PresenceContext,
  type AnimatePresenceProps,
} from "motion/react";
import { createContext, useContext, useState, type ReactNode } from "react";

// Motion renders an element's `initial` style (often opacity 0) into the server
// HTML, so the page stays invisible until JavaScript runs. On the page the
// server rendered, motion elements start at their final state instead, which
// keeps server and browser markup equal. After the first navigation in the
// browser, elements animate in as before. (Switching at hydration instead would
// change context under boundaries still hydrating and re-create their DOM.)
const FIRST_PAINT_PRESENCE = {
  id: "first-paint",
  initial: false as const,
  isPresent: true,
  custom: undefined,
  onExitComplete: undefined,
  register: () => () => {},
};
// After the first navigation: animate as with no presence parent. The context
// must never switch to null: motion's usePresence calls hooks only when it is
// non-null, so the switch changes their order and React throws.
const AFTER_FIRST_PAINT = { ...FIRST_PAINT_PRESENCE, id: "after-first-paint", initial: undefined };

const FirstPaint = createContext(false);

/** Wraps the whole app in the root route. */
export default function VisibleBeforeHydration({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [firstPathname] = useState(pathname);
  const [navigated, setNavigated] = useState(false);
  if (!navigated && pathname !== firstPathname) setNavigated(true);
  return (
    <FirstPaint.Provider value={!navigated}>
      <PresenceContext.Provider value={navigated ? AFTER_FIRST_PAINT : FIRST_PAINT_PRESENCE}>
        {children}
      </PresenceContext.Provider>
    </FirstPaint.Provider>
  );
}

/**
 * Motion's AnimatePresence, except that children present on the first painted
 * page start at their final state. Later mounts and changes animate as before.
 */
export function AnimatePresence(props: AnimatePresenceProps & { children?: ReactNode }) {
  const firstPaint = useContext(FirstPaint);
  const [initial] = useState(firstPaint ? false : props.initial);
  return <MotionAnimatePresence {...props} initial={initial} />;
}
