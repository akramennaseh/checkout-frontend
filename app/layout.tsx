import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { fontSans } from "@/lib/fonts"
import { Toaster } from "@/components/ui/toaster"
import { ModeToggle } from "@/components/Toggle";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Head from "next/head";




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Checkout",
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
        <Head>
        <script type="text/javascript">
          {`
           (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "lulakf4jkw");
          `}
        </script>
      </Head>
         {'G-EYZG3G37ZD' ? (
          <GoogleAnalytics ga_id=
            {'G-EYZG3G37ZD'} />
        ) : null}
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
