"use client";

import { Typography, Row, Col, Card, Flex, Grid } from "antd";
import {
	SectionBadge,
	Section,
	Container,
	BackgroundSection,
} from "@/components/atoms";
import { aboutIntro, vision, mission, stats } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

export default function AboutTemplate() {
	const screens = useBreakpoint();
	const py = screens.sm ? 96 : 64;

	return (
		<>
			<BackgroundSection
				image="/images/services/hero-bg.png"
				style={{ paddingBlock: py, textAlign: "center" }}
			>
				<Container size="narrow" vertical align="center" gap="small">
					<SectionBadge>{aboutIntro.kicker}</SectionBadge>
					<Title level={1}>{aboutIntro.title}</Title>
					<Paragraph style={{ fontSize: 18 }}>
						{aboutIntro.body}
					</Paragraph>
				</Container>
			</BackgroundSection>

			<Section style={{ paddingBlock: py }}>
				<Container>
					<Row gutter={[32, 32]}>
						<Col xs={24} md={12}>
							<Card style={{ height: "100%" }}>
								<Flex vertical gap="small">
									<Title
										level={3}
										style={{ color: colors.black }}
									>
										Our Vision
									</Title>
									<Paragraph
										style={{ color: colors.neutral600 }}
									>
										{vision}
									</Paragraph>
								</Flex>
							</Card>
						</Col>
						<Col xs={24} md={12}>
							<Card style={{ height: "100%" }}>
								<Flex vertical gap="small">
									<Title
										level={3}
										style={{ color: colors.black }}
									>
										Our Mission
									</Title>
									<Paragraph
										style={{ color: colors.neutral600 }}
									>
										{mission}
									</Paragraph>
								</Flex>
							</Card>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section bg="black" style={{ paddingBlock: screens.sm ? 80 : 64 }}>
				<Container>
					<Row gutter={[32, 32]}>
						{stats.map((stat) => (
							<Col key={stat.label} xs={12} sm={6}>
								<Flex vertical align="center" gap="small">
									<Text
										style={{
											fontFamily: "var(--font-heading)",
											fontSize: 36,
											color: colors.orange,
										}}
									>
										{stat.value}
									</Text>
									<Text
										style={{
											fontSize: 14,
											color: colors.neutral300,
										}}
									>
										{stat.label}
									</Text>
								</Flex>
							</Col>
						))}
					</Row>
				</Container>
			</Section>
		</>
	);
}
