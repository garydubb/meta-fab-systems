import type { ThemeConfig } from "antd";

// Spacing/margins are intentionally left at AntD's own defaults — overriding
// them per-component fights the library's built-in rhythm and caused real
// bugs (see project history). Only visual tokens (color, type, radius) are
// customized here.
export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#f15a24",
    colorLink: "#f15a24",
    colorLinkHover: "#d94a15",
    borderRadius: 6,
    fontFamily: "var(--font-body)",
  },
  components: {
    Button: {
      fontWeight: 600,
      primaryShadow: "none",
    },
    // Horizontal padding is zeroed here (vertical stays at AntD's default) —
    // header/footer content is wrapped in the project's own <Container>,
    // which must be the single source of horizontal alignment site-wide,
    // otherwise Header's default padding double-stacks with Container's own
    // and its content ends up narrower than every other section.
    Layout: {
      headerBg: "#ffffff",
      headerPadding: "0",
      footerBg: "#0a0a0a",
      footerPadding: "24px 0",
    },
    Menu: {
      itemHoverColor: "#f15a24",
      itemSelectedColor: "#f15a24",
    },
  },
};
