import Home from "./components/Home";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";

export const metadata = {
  title: 'My Awesome Website',
  description: 'Welcome to my website where I share awesome content',
  openGraph: {
    title: 'My Awesome Website',
    description: 'Welcome to my website where I share awesome content',
    url: 'https://damburudhar.vercel.app',
    siteName: 'My Awesome Website',
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
    title: 'My Awesome Website',
    description: 'Welcome to my website where I share awesome content',
    images: ['/og-default.png'],
  },
};

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <ProjectSection />
      <BlogSection />
    </div>
  );
}
