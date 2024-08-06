import {
  Avatar,
  Box,
  Group,
  Menu,
  Text,
  useComputedColorScheme
} from "@mantine/core";
import { TbLogout2 as LogoutIcon } from "react-icons/tb";

export function ProfileMenu() {
  const colorScheme = useComputedColorScheme();
  const isLightTheme = colorScheme === "light";

  return (
    <Menu>
      <Menu.Target>
        <Avatar />
      </Menu.Target>
      <Menu.Dropdown w={300}>
        <Group gap={8} p="md">
          <Avatar />
          <Box>
            <Text lh={1.5} fw={700}>
              Marissa A.
            </Text>
            <Text c={isLightTheme ? "gray.7" : "dark.2"} lh={1}>
              ycr320.amaya@gmail.com
            </Text>
          </Box>
        </Group>
        <Menu.Divider />
        <Menu.Item
          leftSection={<LogoutIcon size={18} />}
          style={{ fontSize: 16 }}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
