// `useAuth` and `useUser` with the shape the app used before (react-oidc-context
// through @usehercules/auth), on top of the TanStack session. Sign-in goes
// through the `/auth/sign-in` server route and returns to the current page.
import type { User } from "@usehercules/auth-tanstack";
import { useIdToken, useAuth as useSessionAuth } from "@usehercules/auth-tanstack/client";
import { useMemo } from "react";

function signinRedirect(_options?: unknown): Promise<void> {
  const { pathname, search, hash } = window.location;
  window.location.assign(`/auth/sign-in?returnTo=${encodeURIComponent(pathname + search + hash)}`);
  return new Promise(() => {});
}

/** The `name` claim when the session carries it, else the given and family names. */
function displayName(user: User): string | undefined {
  const name = (user as User & { name?: string | null }).name;
  return name || [user.firstName, user.lastName].filter(Boolean).join(" ") || undefined;
}

/** The old OIDC profile: the known claims, and any other claim as `unknown`. */
interface Profile {
  [claim: string]: unknown;
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
}

function profileOf(user: User): Profile {
  return {
    sub: user.id,
    email: user.email,
    email_verified: user.emailVerified,
    name: displayName(user),
    given_name: user.firstName ?? undefined,
    family_name: user.lastName ?? undefined,
    picture: user.profilePictureUrl ?? undefined,
  };
}

export function useAuth() {
  const auth = useSessionAuth();
  const { getIdToken } = useIdToken();
  return useMemo(() => {
    const { user } = auth;
    const signOut = (_options?: unknown) => auth.signOut();
    return {
      ...auth,
      // The old `user.id_token`, now read with `await getIdToken()`.
      getIdToken,
      fetchAccessToken: async (_args?: { forceRefreshToken: boolean }) =>
        (await getIdToken()) ?? null,
      user: user && { ...user, profile: profileOf(user) },
      isAuthenticated: user !== null,
      isLoading: auth.loading,
      error: undefined as Error | undefined,
      signinRedirect,
      signoutRedirect: signOut,
      signout: signOut,
      removeUser: signOut,
    };
  }, [auth, getIdToken]);
}

export function useUser() {
  const { user, isAuthenticated, isLoading, error } = useAuth();
  return {
    ...user,
    id: user?.id,
    name: user?.profile.name,
    email: user?.email,
    avatar: user?.profilePictureUrl ?? undefined,
    isAuthenticated,
    isLoading,
    error,
  };
}
