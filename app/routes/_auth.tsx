import { authClient } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  beforeLoad: async () => {
    const session = await authClient.getSession();
    if (session.error) {
      return redirect({ to: "/login" });
    }
  },
});

function RouteComponent() {
  return <Outlet />;
}
