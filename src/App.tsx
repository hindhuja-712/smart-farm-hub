import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "./pages/Dashboard";
import CropScanPage from "./pages/CropScanPage";
import WeatherPage from "./pages/WeatherPage";
import MarketPage from "./pages/MarketPage";
import CommunityPage from "./pages/CommunityPage";
import ProfilePage from "./pages/ProfilePage";
import CropGuidePage from "./pages/CropGuidePage";
import FertilizerPage from "./pages/FertilizerPage";
import MarketplacePage from "./pages/MarketplacePage";
import AgriShopsPage from "./pages/AgriShopsPage";
import NotificationsPage from "./pages/NotificationsPage";
import FarmPage from "./pages/FarmPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scan" element={<CropScanPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/crop-guide" element={<CropGuidePage />} />
          <Route path="/fertilizer" element={<FertilizerPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/agri-shops" element={<AgriShopsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/farm" element={<FarmPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
