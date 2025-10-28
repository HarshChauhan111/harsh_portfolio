import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import ThreeBackground from "@/components/ThreeBackground";

export const metadata: Metadata = {
  title: "Harsh - Mobile Application Developer",
  description: "Professional portfolio of Harsh, a skilled Mobile Application Developer specializing in Flutter, React Native, and modern mobile technologies.",
  keywords: ["Mobile Developer", "Flutter", "React Native", "Android", "iOS", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <ThreeBackground />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
