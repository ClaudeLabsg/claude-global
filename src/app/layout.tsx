import type { Metadata } from "next";
import { Crimson_Pro, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Serif used for the community wordmark, close to the ClaudeSG logo lettering.
const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude Global Community — Find your local Claude community",
  description:
    "Non-profit, volunteer-run Claude communities across Southeast Asia — Singapore, Johor Bahru and Indonesia. Free to join. Everyone is welcome.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${crimsonPro.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
