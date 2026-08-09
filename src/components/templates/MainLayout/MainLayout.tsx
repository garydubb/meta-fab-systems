"use client";

import { Layout } from "antd";
import { SiteHeader, MaterialsStrip, SiteFooter } from "@/components/organisms";
import { colors } from "@/lib/theme/colors";

const { Content } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: colors.white }}>
      <SiteHeader />
      <Content style={{ flex: 1 }}>{children}</Content>
      <MaterialsStrip />
      <SiteFooter />
    </Layout>
  );
}
