import {
  Button,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
  Tooltip
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    grape: [
      "#fbf5ff",
      "#f7e7ff",
      "#efd4ff",
      "#e3b2ff",
      "#cb6bff",
      "#c151fb",
      "#b02eef",
      "#991ed2",
      "#801eab",
      "#69198a"
    ],
    ocean: [
      "#ebffff",
      "#cdfcff",
      "#a1f6ff",
      "#6beeff",
      "#1ad9f6",
      "#00bcdc",
      "#0195b9",
      "#097795",
      "#116079",
      "#134f66"
    ],
    pink: [
      "#fff1f3",
      "#ffe3e7",
      "#ffccd5",
      "#ffa1b2",
      "#ff7d97",
      "#f93a66",
      "#e71750",
      "#c30d43",
      "#a30e3f",
      "#8b103d"
    ],
    yellow: [
      "#fff9eb",
      "#ffeec6",
      "#ffdb88",
      "#ffcd69",
      "#ffab20",
      "#f98707",
      "#dd6102",
      "#b74106",
      "#94320c",
      "#7a2a0d"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Quicksand Variable', sans-serif",
    fontWeight: "700"
  },
  primaryColor: "pink",
  components: {
    Button: Button.extend({
      styles: (theme) => ({
        root: {
          "--button-bg": theme.colors.pink[6],
          "--button-hover": theme.colors.pink[7]
        }
      })
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        offset: 10
      }
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mantine-color-body": theme.colors.gray[1]
  },
  dark: {}
});
