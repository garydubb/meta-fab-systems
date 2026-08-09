import { iconMap } from "@/lib/icon-map";
import { colors } from "@/lib/theme/colors";

type IconTileProps = {
  icon: string;
  size?: "sm" | "lg";
};

export default function IconTile({ icon, size = "sm" }: IconTileProps) {
  const Icon = iconMap[icon];
  const dimension = size === "lg" ? 48 : 32;

  return (
    <Icon
      style={{ height: dimension, width: dimension, flexShrink: 0, color: colors.orange }}
      strokeWidth={size === "lg" ? 1.25 : 1.5}
    />
  );
}
