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
import DoctorPortal from "./pages/portals/DoctorPortal";
import LabPortal from "./pages/portals/LabPortal";
import PatientPortal from "./pages/portals/PatientPortal";
import ResearchPortal from "./pages/portals/ResearchPortal";
import InsurancePortal from "./pages/portals/InsurancePortal";
import TechIndex from "./pages/tech/TechIndex";
import Interoperability from "./pages/tech/Interoperability";
import Sovereignty from "./pages/tech/Sovereignty";
import Traceability from "./pages/tech/Traceability";
import FhirPage from "./pages/tech/FhirPage";
import IdentityPage from "./pages/tech/IdentityPage";
import DppPage from "./pages/tech/DppPage";
import FederatedPage from "./pages/tech/FederatedPage";
import ContractsPage from "./pages/tech/ContractsPage";
import IotPage from "./pages/tech/IotPage";

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
                
                {/* Public Portal Pages */}
                <Route path="/portal/doctor" element={<DoctorPortal />} />
                <Route path="/portal/lab" element={<LabPortal />} />
                <Route path="/portal/patient" element={<PatientPortal />} />
                <Route path="/portal/research" element={<ResearchPortal />} />
                <Route path="/portal/insurance" element={<InsurancePortal />} />
                
                {/* Public Tech Deep Dive Pages */}
                <Route path="/tech" element={<TechIndex />} />
                <Route path="/tech/interoperability" element={<Interoperability />} />
                <Route path="/tech/sovereignty" element={<Sovereignty />} />
                <Route path="/tech/traceability" element={<Traceability />} />
                <Route path="/tech/fhir" element={<FhirPage />} />
                <Route path="/tech/identity" element={<IdentityPage />} />
                <Route path="/tech/dpp" element={<DppPage />} />
                <Route path="/tech/federated" element={<FederatedPage />} />
                <Route path="/tech/contracts" element={<ContractsPage />} />
                <Route path="/tech/iot" element={<IotPage />} />
                
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
