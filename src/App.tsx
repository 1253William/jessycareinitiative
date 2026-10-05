import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { events } from "./data/events";

const Index = lazy(() => import("./pages/Index"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const Projects = lazy(() => import("./pages/Projects"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
// const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const siteUrl = (import.meta.env.VITE_SITE_URL || "https://thejessicareinitiative.org").replace(/\/+$/, "");
const titles: Record<string, [string,string]> = {
  "/": ["Home", "Community health education, care, and outreach across Ghana."],
  "/about/who-we-are": ["Who We Are", "Discover the mission, vision, and values of The Jessicare Initiative."],
  "/about/what-we-do": ["What We Do", "Explore health education, awareness, and outreach programmes in Ghana."],
  "/projects": ["Our Projects", "Explore community health projects and outreach across Ghana."],
  "/projects/gallery": ["Gallery", "Moments from the field: community care, education, and outreach."],
  "/events": ["Events", "Join The Jessicare Initiative at community health events."],
  "/projects/events": ["Events", "Join The Jessicare Initiative at community health events."],
  // "/donate": ["Donate", "Support health education and access to care in underserved communities."],
  "/contact": ["Contact", "Get in touch with The Jessicare Initiative."],
};
function PageMeta() {
  const {pathname} = useLocation();
  const detail = events.find(event => pathname === `/events/${event.slug}`);
  const [title, description] = detail ? [detail.title, detail.summary] : titles[pathname] || ["Page not found", "The Jessicare Initiative"];
  const isKnownPage = Boolean(detail || titles[pathname]);
  return <Helmet>
    <title>{`${title} | The Jessicare Initiative`}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={isKnownPage ? "index, follow" : "noindex, follow"} />
    <link rel="canonical" href={`${siteUrl}${pathname}`} />
    <meta property="og:title" content={`${title} | The Jessicare Initiative`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${siteUrl}${pathname}`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={`${title} | The Jessicare Initiative`} />
    <meta name="twitter:description" content={description} />
  </Helmet>;
}
const App = () => (<HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageMeta />
        <Suspense fallback={<div className="container-narrow px-4 py-20 text-center" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/what-we-do" element={<WhatWeDo />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/events" element={<Events />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<EventDetail />} />
            <Route path="/projects/gallery" element={<Gallery />} />
            {/* <Route path="/donate" element={<Donate />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider></HelmetProvider>
);

export default App;
