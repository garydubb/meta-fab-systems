"use client";

import { Typography, Flex, Tag, Grid } from "antd";
import { ShieldCheck } from "lucide-react";
import { Section, Container } from "@/components/atoms";
import { materials } from "@/lib/content";
import { colors } from "@/lib/theme/colors";

const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function MaterialsStrip() {
	const screens = useBreakpoint();
	const row = Boolean(screens.lg);

	return (
		<Section
			style={{
				borderTop: `1px solid ${colors.neutral200}`,
				backgroundColor: colors.white,
			}}
		>
			<Container
				vertical={!row}
				justify="space-between"
				align="center"
				gap="middle"
				wrap
				style={{ paddingBlock: 24, paddingTop: 32, paddingBottom: 32 }}
			>
				<Flex
					align="center"
					gap="small"
					wrap
					style={{ justifyContent: row ? "flex-start" : "center" }}
				>
					<Text
						strong
						style={{
							fontFamily: "var(--font-heading)",
							color: colors.black,
							marginRight: 4,
						}}
					>
						We Work With
					</Text>
					{materials.map((material) => (
						<Tag
							key={material}
							style={{
								margin: 0,
								borderRadius: 999,
								borderColor: colors.neutral200,
								backgroundColor: colors.neutral50,
								color: colors.neutral600,
								fontSize: 13,
							}}
						>
							{material}
						</Tag>
					))}
				</Flex>

				<Flex
					align="center"
					gap="small"
					style={
						row
							? {
									paddingLeft: 20,
									borderLeft: `1px solid ${colors.neutral200}`,
								}
							: undefined
					}
				>
					<ShieldCheck
						size={16}
						style={{ color: colors.orange, flexShrink: 0 }}
					/>
					<Text
						style={{
							fontSize: 13,
							fontWeight: 600,
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							color: colors.orange,
						}}
					>
						Your Trusted Partner in Engineering & Fabrication
					</Text>
				</Flex>
			</Container>
		</Section>
	);
}
