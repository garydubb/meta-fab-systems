"use client";

import Link from "next/link";
import { Typography, Row, Col, Button, Grid } from "antd";
import { ArrowRight } from "lucide-react";
import { SectionBadge, Section, Container, BackgroundSection } from "@/components/atoms";
import { ServiceCard } from "@/components/molecules";
import { Logos } from "@/components/organisms";
import { detailedServices, servicesIntro } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function ServicesTemplate() {
	const screens = useBreakpoint();
	const py = screens.sm ? 96 : 64;

	return (
		<>
			<BackgroundSection
				image="/images/services/hero-bg.png"
				style={{ paddingBlock: py, textAlign: "center" }}
			>
				<Container size="narrow" vertical align="center" gap="small">
					<SectionBadge>Our Services</SectionBadge>
					<Title level={1}>What We Build</Title>
					<Paragraph style={{ fontSize: 18 }}>
						{servicesIntro}
					</Paragraph>
				</Container>
			</BackgroundSection>

			<Section style={{ paddingBlock: py }}>
				<Container>
					<Row gutter={[24, 24]}>
						{detailedServices.map((service) => (
							<Col key={service.title} xs={24} sm={12} lg={6}>
								<Link href={`/services/${service.slug}`}>
									<ServiceCard
										title={service.title}
										icon={service.icon}
										description={service.description}
										software={
											"software" in service
												? service.software
												: undefined
										}
									/>
								</Link>
							</Col>
						))}
					</Row>
				</Container>
			</Section>

			<Logos />

			<Section
				bg="light"
				style={{
					paddingBlock: screens.sm ? 80 : 64,
					textAlign: "center",
				}}
			>
				<Container size="tight" vertical align="center" gap="middle">
					<Title level={2} style={{ color: colors.black }}>
						Have a project in mind?
					</Title>
					<Paragraph style={{ color: colors.neutral600 }}>
						Tell us what you&apos;re building and we&apos;ll put
						together a plan and pricing.
					</Paragraph>
					<a href="/contact">
						<Button
							type="primary"
							size="large"
							icon={
								<ArrowRight style={{ height: 16, width: 16 }} />
							}
							iconPlacement="end"
						>
							Get a Quote
						</Button>
					</a>
				</Container>
			</Section>
		</>
	);
}
