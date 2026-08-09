"use client";

import Image from "next/image";
import { Typography, Flex } from "antd";
import { Section, Container } from "@/components/atoms";
import { softwareLogos } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;

export default function Logos() {
  return (
    <Section bg="light" style={{ paddingBlock: 48 }}>
      <Container vertical align="center" gap="large">
        <Text
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: colors.neutral500,
          }}
        >
          Software We Work With
        </Text>
        <Flex align="center" justify="center" gap="large" wrap>
          {softwareLogos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={130}
              height={44}
              style={{ height: 32, width: "auto", objectFit: "contain" }}
            />
          ))}
        </Flex>
      </Container>
    </Section>
  );
}
