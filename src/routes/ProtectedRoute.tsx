import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
