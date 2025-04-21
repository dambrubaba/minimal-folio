import "./globals.css";
import { ThemeProvider } from "./components/theme-provide";
import SiteHeader from "./components/SiteHeader";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Damburudhar",
  description: "Building SaaS, AI wrappers & open-source tools for the internet.",
  openGraph: {
    title: "Damburudhar",
    description: "Building SaaS, AI wrappers & open-source tools for the internet.",
    url: "https://damburudhar.vercel.app", // TODO: Replace with your actual URL
    siteName: "Damburudhar",
    images: [
      {
        url: "/og-default.png", // Assuming this is in the public folder
        width: 1200,
        height: 630,
        alt: "Damburudhar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damburudhar",
    description: "Building SaaS, AI wrappers & open-source tools for the internet.",
    // creator: "@yourTwitterHandle", // Optional: Add your Twitter handle
    images: ["/og-default.png"], // Must be an absolute URL in production
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <main className="text-foreground flex justify-center">
            <div className="container tracking-wide  sm:px-8 md:px-12 lg:px-40 xl:px-60 2xl:px-96">
              <div className="py-20 md:px-8 ">
                <SiteHeader />
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
