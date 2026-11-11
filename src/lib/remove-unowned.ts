// React owns the head tags a route's head() renders. An app script that
// removes one makes React throw when it removes the tag itself on the next
// navigation, and the whole page, head scripts included, mounts again.
export function removeUnowned(node: { remove(): void } | null | undefined): void {
  if (!node) return;
  if (node instanceof Node && Object.keys(node).some((k) => k.startsWith("__reactFiber$"))) return;
  node.remove();
}
