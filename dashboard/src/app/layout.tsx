import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// NARA-Design-System 토큰: 본문/UI 폰트는 Inter, 한글 보완은 Noto Sans KR
// (Inter엔 한글 글리프가 없음). design-system.css의 --font-sans과 동일한 조합.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NARA CRM",
  description: "NARA Cellar 내부 CRM 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
