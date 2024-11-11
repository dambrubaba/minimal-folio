import "./globals.css";
import { ThemeProvider } from "./components/theme-provide";
import SiteHeader from "./components/SiteHeader";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Damburudhar",
  description: "Damburudhar Portfolio Website",
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
        <ThemeProvider attribute="class" defaultTheme="dark">
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
