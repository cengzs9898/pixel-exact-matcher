import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Hakkimizda from "./pages/Hakkimizda.tsx";
import ProjeDetay from "./pages/ProjeDetay.tsx";
import TamamlananTaahhutler from "./pages/TamamlananTaahhutler.tsx";
import Iletisim from "./pages/Iletisim.tsx";
import SatistaGayrimenkuller from "./pages/SatistaGayrimenkuller.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/projeler/:slug" element={<ProjeDetay />} />
          <Route path="/tamamlanan-taahhutler" element={<TamamlananTaahhutler />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/satistaki-gayrimenkullerimiz" element={<SatistaGayrimenkuller />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
