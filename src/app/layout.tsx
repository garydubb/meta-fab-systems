import type { Metadata } from "next";
import { Questrial, DM_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { MainLayout } from "@/components/templates";
import { SmoothScroll, Preloader } from "@/components/atoms";
import { antdTheme } from "@/lib/theme/antd-theme";
import { siteUrl, siteName, homeTitle, defaultDescription, defaultKeywords } from "@/lib/seo";
import "./globals.css";

const questrial = Questrial({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: siteName }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${questrial.variable} ${dmSans.variable}`}>
      <body>
        <Preloader />
        <SmoothScroll />
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
