import {
  Avatar,
  Box,
  Group,
  Menu,
  Text,
  Tooltip,
  useComputedColorScheme
} from "@mantine/core";
import { useUserStore } from "@src/stores/user.store";
import { TbLogout2 as LogoutIcon } from "react-icons/tb";
import classes from "./ProfileMenu.module.css";

export function ProfileMenu() {
  const colorScheme = useComputedColorScheme();
  const { displayName, email, logout, photoUrl } = useUserStore();
  const isLightTheme = colorScheme === "light";

  return (
    <Menu>
      <Menu.Target>
        <Tooltip label="Profile">
          <Avatar
            className={classes.avatarButton}
            component="button"
            src={photoUrl}
          />
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown w={300}>
        <Group gap={8} p="md">
          <Avatar src={photoUrl} />
          <Box>
            <Text lh={1.5} fw={700}>
              {displayName}
            </Text>
            <Text c={isLightTheme ? "gray.7" : "dark.2"} lh={1}>
              {email}
            </Text>
          </Box>
        </Group>
        <Menu.Divider />
        <Menu.Item
          leftSection={<LogoutIcon size={18} />}
          onClick={() => logout()}
          style={{ fontSize: 16 }}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
