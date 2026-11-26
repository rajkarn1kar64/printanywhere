
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import History from "./pages/History.jsx";
import Print from "./pages/Print.jsx";
import Printers from "./pages/Printers.jsx";
import RegisterPrinter from "./pages/RegisterPrinter.jsx";
import Settings from "./pages/Settings.jsx";

import DashboardLayout from "./components/dashboard/DashboardLayout.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication routes */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard routes */}
        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/history"
            element={<History />}
          />

          <Route
            path="/print"
            element={<Print />}
          />

          <Route
            path="/printers"
            element={<Printers />}
          />

          <Route
            path="/printers/register"
            element={<RegisterPrinter />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}
