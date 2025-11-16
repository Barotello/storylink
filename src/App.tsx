import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegisterPage from "./pages/RegisterPage";
import ExplorePage from "./pages/ExplorePage";
import MatchesPage from "./pages/MatchesPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import ChatsPage from "./pages/ChatsPage";
import ChatDetailPage from "./pages/ChatDetailPage";
import NotificationsPage from "./pages/NotificationsPage"; // Yeni Bildirimler sayfasını import et
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Giriş ve Kayıt sayfaları BottomNavBar olmadan */}
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Diğer tüm sayfalar MainLayout içinde BottomNavBar ile */}
          <Route element={<MainLayout />}>
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/settings" element={<AccountSettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/chats/:id" element={<ChatDetailPage />} />
            <Route path="/notifications" element={<NotificationsPage />} /> {/* Yeni Bildirimler rotası */}
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;