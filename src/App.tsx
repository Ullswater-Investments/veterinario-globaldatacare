import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { RoleProvider } from "@/contexts/RoleContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AppLayout } from "@/components/AppLayout";
import Landing from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AuditorDashboard from "./pages/AuditorDashboard";
import ClinicalCockpit from "./pages/ClinicalCockpit";
import AIAssistant from "./pages/AIAssistant";
import EPrescription from "./pages/EPrescription";
import Triage from "./pages/Triage";
import LabHub from "./pages/LabHub";
import Inventory from "./pages/Inventory";
import Research from "./pages/Research";
import Epidemiology from "./pages/Epidemiology";
import Claims from "./pages/Claims";
import Wallet from "./pages/Wallet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <RoleProvider>
              <Routes>
                {/* Public Landing Page */}
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth />} />
                
                {/* Protected Routes */}
                <Route element={<AppLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/auditor-dashboard" element={<AuditorDashboard />} />
                  <Route path="/clinical" element={<ClinicalCockpit />} />
                  <Route path="/ai-assistant" element={<AIAssistant />} />
                  <Route path="/e-prescription" element={<EPrescription />} />
                  <Route path="/triage" element={<Triage />} />
                  <Route path="/lab-hub" element={<LabHub />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/research" element={<Research />} />
                  <Route path="/epidemiology" element={<Epidemiology />} />
                  <Route path="/claims" element={<Claims />} />
                  <Route path="/wallet" element={<Wallet />} />
                </Route>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </RoleProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
