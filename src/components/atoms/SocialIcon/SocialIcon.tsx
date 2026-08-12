export type SocialPlatform = "Facebook" | "Instagram" | "LinkedIn" | "YouTube";

type SocialIconProps = {
  platform: SocialPlatform;
  size?: number;
};

// lucide-react intentionally excludes brand/social logos, so these are
// small hand-drawn glyphs kept in the same stroke style (round caps,
// currentColor) as the lucide icons used everywhere else on the site.
const paths: Record<SocialPlatform, React.ReactNode> = {
  Facebook: (
    <path d="M14 9h2V6h-2c-1.657 0-3 1.343-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.276.224-.5.5-.5H14Z" />
  ),
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v7M7.5 7v.01M11.5 17v-4.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V17" />
    </>
  ),
  YouTube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function SocialIcon({ platform, size = 18 }: SocialIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[platform]}
    </svg>
  );
}
