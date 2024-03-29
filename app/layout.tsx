import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { fontSans } from "@/lib/fonts"
import { Toaster } from "@/components/ui/toaster"
import { ModeToggle } from "@/components/Toggle";




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BesterTv",
  description: "Watch the best movies and series online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
