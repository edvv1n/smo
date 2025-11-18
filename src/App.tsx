import React, { useState } from 'react'; // Import useState
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import the new components
import CookieToast from "./components/CookieToast"; 
import CookiePreferencesModal from "./components/CookiePreferencesModal";
import BlogPostDetail from "./pages/BlogPostDetail"; 

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false); 

  // Function to open the modal (passed to CookieToast)
  const openPreferencesModal = () => setIsPreferencesModalOpen(true);
  // Function to close the modal (passed to the Modal itself)
  const closePreferencesModal = () => setIsPreferencesModalOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* 1. The Preferences Modal (Conditionally Rendered, uses the state) */}
        <CookiePreferencesModal 
          isOpen={isPreferencesModalOpen} 
          onClose={closePreferencesModal}
        />
        
        <BrowserRouter>
          <Navigation />
          
          {/* 2. The main Cookie Toast (Passes the function to open the modal) */}
          <CookieToast onManagePreferences={openPreferencesModal} /> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;