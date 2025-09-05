import { Route, Routes, Navigate } from "react-router";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
