"use client";

import { Typography, Grid } from "antd";
import { SectionBadge, Container, BackgroundSection } from "@/components/atoms";
import { ContactSection } from "@/components/organisms";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export default function ContactTemplate() {
	const screens = useBreakpoint();
	const py = screens.sm ? 96 : 64;

	return (
		<>
			<BackgroundSection
				image="/images/services/hero-bg.png"
				style={{ paddingBlock: py, textAlign: "center" }}
			>
				<Container size="narrow" vertical align="center" gap="small">
					<SectionBadge>Contact Us</SectionBadge>
					<Title level={1}>Let&apos;s Build Something</Title>
					<Paragraph style={{ fontSize: 18 }}>
						Reach out with your project details and our team will follow up with a plan and pricing.
					</Paragraph>
				</Container>
			</BackgroundSection>

			<ContactSection />
		</>
	);
}
