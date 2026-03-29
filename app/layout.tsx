import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neha — Software Engineer",
    template: "%s | Neha",
  },
  description:
    "Software Engineer specializing in React, TypeScript, and full-stack development. Building thoughtful, performant interfaces.",
  openGraph: {
    images: "/og.png",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable} font-body antialiased bg-[#000000] text-white selection:bg-emerald-sig/30 selection:text-emerald-sig`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}

