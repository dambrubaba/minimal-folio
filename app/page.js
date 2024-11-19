import { Suspense } from "react";
import Home from "./components/Home";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import ToolsSection from "./components/ToolsSection";
import TabNavigation from "./components/TabNavigation";

export const metadata = {
  title: 'Damburudhar - portfolio',
  description: 'Building free tools for the internet',
  openGraph: {
    title: 'Damburudhar - portfolio',
    description: 'Building free tools for the internet',
    url: 'https://damburudhar.vercel.app',
    siteName: 'Damburudhar - portfolio',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damburudhar - portfolio',
    description: 'Building free tools for the internet',
    images: ['/og-default.png'],
  },
};

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <TabNavigation />
      </Suspense>
    </div>
  );
}
