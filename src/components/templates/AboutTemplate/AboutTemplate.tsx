"use client";

import Link from "next/link";
import Image from "next/image";
import { Typography, Row, Col, Card, Button, Flex, Grid } from "antd";
import { ArrowRight } from "lucide-react";
import {
	SectionBadge,
	Section,
	Container,
	BackgroundSection,
	IconTile,
	Reveal,
} from "@/components/atoms";
import { TeamSection } from "@/components/organisms";
import { aboutIntro, vision, mission, stats, story, values } from "@/lib/content";
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
					<Row gutter={[48, 32]} align="middle">
						<Col xs={24} md={12}>
							<Reveal>
								<Flex
									style={{
										position: "relative",
										aspectRatio: "4 / 3",
										overflow: "hidden",
										borderRadius: 16,
									}}
								>
									<Image
										src={story.image}
										alt="MetaFab Systems fabrication workshop in Ludhiana"
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										style={{ objectFit: "cover" }}
									/>
								</Flex>
							</Reveal>
						</Col>
						<Col xs={24} md={12}>
							<Reveal delay={120}>
								<Flex vertical gap="middle">
									<Title level={2} style={{ color: colors.black }}>
										{story.title}
									</Title>
									{story.paragraphs.map((paragraph) => (
										<Paragraph key={paragraph} style={{ color: colors.neutral600 }}>
											{paragraph}
										</Paragraph>
									))}
								</Flex>
							</Reveal>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section bg="light" style={{ paddingBlock: py }}>
				<Container>
					<Row gutter={[32, 32]}>
						<Col xs={24} md={12}>
							<Reveal>
								<Card className="interactive-card" style={{ height: "100%" }}>
									<Flex vertical gap="small">
										<IconTile icon="Target" size="lg" />
										<Title level={3} style={{ color: colors.black }}>
											Our Vision
										</Title>
										<Paragraph style={{ color: colors.neutral600 }}>
											{vision}
										</Paragraph>
									</Flex>
								</Card>
							</Reveal>
						</Col>
						<Col xs={24} md={12}>
							<Reveal delay={80}>
								<Card className="interactive-card" style={{ height: "100%" }}>
									<Flex vertical gap="small">
										<IconTile icon="Landmark" size="lg" />
										<Title level={3} style={{ color: colors.black }}>
											Our Mission
										</Title>
										<Paragraph style={{ color: colors.neutral600 }}>
											{mission}
										</Paragraph>
									</Flex>
								</Card>
							</Reveal>
						</Col>
					</Row>
				</Container>
			</Section>

			<Section style={{ paddingBlock: py }}>
				<Container>
					<Flex vertical align="center" gap="small" style={{ marginBottom: 48, textAlign: "center" }}>
						<SectionBadge>Why MetaFab</SectionBadge>
						<Title level={2} style={{ color: colors.black }}>
							What Sets Us Apart
						</Title>
					</Flex>
					<Row gutter={[24, 24]}>
						{values.map((value, i) => (
							<Col key={value.title} xs={24} sm={12} lg={6}>
								<Reveal delay={i * 80}>
									<Card className="interactive-card" style={{ height: "100%", textAlign: "center" }}>
										<Flex vertical align="center" gap="small">
											<IconTile icon={value.icon} size="lg" />
											<Title level={5} style={{ color: colors.black, margin: 0 }}>
												{value.title}
											</Title>
											<Paragraph style={{ fontSize: 14, color: colors.neutral500, margin: 0 }}>
												{value.description}
											</Paragraph>
										</Flex>
									</Card>
								</Reveal>
							</Col>
						))}
					</Row>
				</Container>
			</Section>

			<Section bg="black" style={{ paddingBlock: screens.sm ? 80 : 64 }}>
				<Container>
					<Row gutter={[32, 32]}>
						{stats.map((stat, i) => (
							<Col key={stat.label} xs={12} sm={6}>
								<Reveal delay={i * 80}>
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
								</Reveal>
							</Col>
						))}
					</Row>
				</Container>
			</Section>

			<TeamSection />

			<Section
				bg="light"
				style={{
					paddingBlock: screens.sm ? 80 : 64,
					textAlign: "center",
				}}
			>
				<Reveal>
					<Container size="tight" vertical align="center" gap="middle">
						<Title level={2} style={{ color: colors.black }}>
							Have a project in mind?
						</Title>
						<Paragraph style={{ color: colors.neutral600 }}>
							Tell us what you&apos;re building and we&apos;ll put together a plan and pricing.
						</Paragraph>
						<Link href="/contact">
							<Button
								type="primary"
								size="large"
								icon={<ArrowRight style={{ height: 16, width: 16 }} />}
								iconPlacement="end"
							>
								Get a Quote
							</Button>
						</Link>
					</Container>
				</Reveal>
			</Section>
		</>
	);
}
