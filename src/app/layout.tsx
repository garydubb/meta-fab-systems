import type { Metadata } from "next";
import { Questrial, DM_Sans } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { MainLayout } from "@/components/templates";
import { SmoothScroll } from "@/components/atoms";
import { antdTheme } from "@/lib/theme/antd-theme";
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
  title: "MetaFab Systems | Design, Engineer, Fabricate",
  description:
    "Complete engineering & fabrication solutions under one roof — CAD design, structural steel, custom gates & railing, industrial machines, and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${questrial.variable} ${dmSans.variable}`}>
      <body>
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
