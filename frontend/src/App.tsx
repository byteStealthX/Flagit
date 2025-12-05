import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DemoProvider } from "@/contexts/DemoContext";
import ClickSpark from "@/components/ui/click-spark";

// Public pages
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";


// App layout and pages
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import IntelligenceFeed from "./pages/app/IntelligenceFeed";
import Analytics from "./pages/app/Analytics";
import MapIntelligence from "./pages/app/MapIntelligence";
import Reports from "./pages/app/Reports";
import VerificationTools from "./pages/app/VerificationTools";
import Datasets from "./pages/app/Datasets";
import Sources from "./pages/app/Sources";
import Users from "./pages/app/Users";
import Automations from "./pages/app/Automations";
import ActivityLogs from "./pages/app/ActivityLogs";
import Settings from "./pages/app/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <DemoProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ClickSpark
          sparkColor="#06b6d4"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={500}
        >
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify-email" element={<VerifyEmail />} />


              {/* App Routes */}
              <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate to="/app/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="feed" element={<IntelligenceFeed />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="map" element={<MapIntelligence />} />
                <Route path="reports" element={<Reports />} />
                <Route path="verify" element={<VerificationTools />} />
                <Route path="datasets" element={<Datasets />} />
                <Route path="sources" element={<Sources />} />
                <Route path="users" element={<Users />} />
                <Route path="automations" element={<Automations />} />
                <Route path="activity" element={<ActivityLogs />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ClickSpark>
      </TooltipProvider>
    </QueryClientProvider>
  </DemoProvider>
);

export default App;
