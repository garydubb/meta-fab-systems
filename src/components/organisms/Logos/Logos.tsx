"use client";

import Image from "next/image";
import { Typography, Flex, Grid } from "antd";
import { Section, Container } from "@/components/atoms";
import { softwareLogos } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function Logos() {
  const screens = useBreakpoint();

  return (
    <Section bg="light" style={{ paddingBlock: screens.sm ? 48 : 32 }}>
      <Container vertical align="center" gap="middle">
        <Text
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: colors.neutral500,
            textAlign: "center",
          }}
        >
          Software We Work With
        </Text>
        <Flex
          align="center"
          justify="center"
          gap={screens.sm ? "large" : "middle"}
          wrap
          style={{ width: "100%" }}
        >
          {softwareLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={130}
              height={44}
              style={{ height: screens.sm ? 32 : 24, width: "auto", objectFit: "contain" }}
            />
          ))}
        </Flex>
      </Container>
    </Section>
  );
}
