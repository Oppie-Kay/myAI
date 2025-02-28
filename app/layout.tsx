import type { Metadata } from "next";
import localFont from "next/font/local";
import { ErrorWrapper } from "./parts/error/error-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const cookingFont = localFont({
  src: "./fonts/CookingFont.woff",
  variable: "--font-cooking",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chef's Assistant | Your Kitchen Companion",
  description: "Get cooking tips, recipes, and culinary inspiration with our AI kitchen assistant",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  themeColor: '#FF6B35',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          :root {
            --tomato-red: #FF6B35;
            --herb-green: #4A7C59;
            --butter-yellow: #F9DB6D;
            --cream: #FFF8E8;
            --spice-brown: #5A4B41;
          }
          
          body {
            background-color: var(--cream);
            color: var(--spice-brown);
          }
          
          h1, h2, h3, h4 {
            font-family: var(--font-cooking);
            color: var(--tomato-red);
          }
          
          .gradient-header {
            background: linear-gradient(to right, var(--tomato-red), var(--herb-green), var(--butter-yellow));
            height: 6px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
          }
          
          .chat-container {
            background-image: url('/patterns/subtle-food-pattern.svg');
            background-repeat: repeat;
            background-size: 200px;
            background-color: var(--cream);
            min-height: 100vh;
            padding-top: 6px;
          }
          
          .chat-bubble {
            padding: 1rem;
            border-radius: 0.5rem;
            max-width: 75%;
            margin-bottom: 1rem;
          }
          
          .user-bubble {
            background-color: var(--herb-green);
            color: white;
            margin-left: auto;
            border-top-right-radius: 0;
          }
          
          .bot-bubble {
            background-color: var(--cream);
            border: 2px solid var(--butter-yellow);
            color: var(--spice-brown);
            margin-right: auto;
            border-top-left-radius: 0;
          }
          
          @keyframes simmer {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          
          .simmer {
            animation: simmer 3s ease-in-out infinite;
          }
          
          .cooking-footer {
            padding: 1rem 0;
            text-align: center;
            font-size: 0.875rem;
            color: rgba(90, 75, 65, 0.7);
          }
        `}</style>
      </head>
      <TooltipProvider>
        <body className={`${cookingFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="gradient-header"></div>
          
          <div className="chat-container">
            <ErrorWrapper>{children}</ErrorWrapper>
          </div>
          
          <footer className="cooking-footer">
            <div className="flex justify-center gap-4 mb-2">
              {/* You can add SVG cooking icons here directly */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="simmer">
                <path d="M15 5V19H9V5H15ZM15 3H9C7.9 3 7 3.9 7 5V19C7 20.1 7.9 21 9 21H15C16.1 21 17 20.1 17 19V5C17 3.9 16.1 3 15 3ZM12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17C11 17.55 11.45 18 12 18Z" fill="#5A4B41"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="simmer" style={{ animationDelay: "0.5s" }}>
                <path d="M8.1 13.34L10.93 10.51L3.91 3.5C2.35 5.06 2.35 7.59 3.91 9.16L8.1 13.34ZM14.88 11.53C16.41 12.24 18.56 11.74 20.15 10.15C22.06 8.24 22.43 5.5 20.96 4.03C19.5 2.57 16.76 2.93 14.84 4.84C13.25 6.43 12.75 8.58 13.46 10.11L3.7 19.87L5.11 21.28L12 14.41L18.88 21.29L20.29 19.88L13.41 13L14.88 11.53Z" fill="#5A4B41"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="simmer" style={{ animationDelay: "1s" }}>
                <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22L20.99 6C18.78 3.55 15.57 2 12 2ZM12 17.13L5.24 6.34C7.09 4.57 9.45 3.5 12 3.5C14.55 3.5 16.91 4.57 18.76 6.34L12 17.13Z" fill="#5A4B41"/>
              </svg>
            </div>
            <p>Cooking up delicious conversations since 2025</p>
          </footer>
        </body>
      </TooltipProvider>
    </html>
  );
}
