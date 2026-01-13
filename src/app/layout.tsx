import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "鬼頭商事 | ロボットとAIの力で日本の生産性を世界一へ",
  description: "鬼頭商事は、不動産事業と連続的企業買収を通じて、日本の労働力不足を解決し世界に冠たる生産性の高い事業を創造します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
