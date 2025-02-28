import type { Metadata } from "next";
import localFont from "next/font/local";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef's Assistant | Your Kitchen Companion",
  description: "Get cooking tips, recipes, and culinary inspiration with our AI kitchen assistant",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  themeColor: "#FF6B35",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TooltipProvider>
          <div className="gradient-header"></div>
          <div className="chat-container">
            <ErrorWrapper>{children}</ErrorWrapper>
          </div>
        </TooltipProvider>

        <footer className="cooking-footer">
          <nav aria-label="Cooking assistant branding">
            <div className="flex justify-center gap-4 mb-2">
              {/* Cooking Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="simmer"
                role="img"
                aria-label="Simmering cooking pot icon"
              >
                <path d="M15 5V19H9V5H15ZM15 3H9C7.9 3 7 3.9 7 5V19C7 20.1 7.9 21 9 21H15C16.1 21 17 20.1 17 19V5C17 3.9 16.1 3 15 3ZM12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18Z" fill="#5A4B41"/>
              </svg>
            </div>
            <p>Cooking up delicious conversations since 2025</p>
          </nav>
        </footer>
      </body>
    </html>
  );
}
