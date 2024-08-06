import {
  Box,
  Switch,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme
} from "@mantine/core";
import { TbMoon as MoonIcon, TbSun as SunIcon } from "react-icons/tb";

export function ThemeSwitch() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const isLightTheme = colorScheme === "light";

  const sunIcon = <SunIcon color={theme.colors.yellow[2]} size={18} />;

  const moonIcon = <MoonIcon color={theme.colors.ocean[4]} size={18} />;

  return (
    <Tooltip
      label={isLightTheme ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <Box>
        <Switch
          checked={isLightTheme}
          size="lg"
          onLabel={sunIcon}
          offLabel={moonIcon}
          onChange={() => toggleColorScheme()}
        />
      </Box>
    </Tooltip>
  );
}
