import { AppShell, Button, Group, Image, Text, Tooltip } from "@mantine/core";
import { ProfileMenu } from "@src/components/layout/ProfileMenu";
import { ThemeSwitch } from "@src/components/layout/ThemeSwitch";
import { useUserStore } from "@src/stores/user.store";
import { useEffect } from "react";
import { TbPlus as PlusIcon } from "react-icons/tb";
import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigateTo = useNavigate();
  const { uid } = useUserStore();

  useEffect(() => {
    if (!uid) {
      navigateTo("/login");
    }
  }, [navigateTo, uid]);

  return (
    <AppShell header={{ height: 80 }}>
      <AppShell.Header withBorder={false}>
        <Group align="center" h="100%" justify="space-between" p="md">
          <Group align="center" gap={8}>
            <Image height={32} src="/logo.png" alt="Logo image" />
            <Text
              c="pink.5"
              ff="heading"
              fw={700}
              lh={1}
              style={{ fontSize: 32 }}
            >
              Quizzle
            </Text>
          </Group>
          <Group>
            <Tooltip label="Create New Flashcards">
              <Button leftSection={<PlusIcon />}>Create</Button>
            </Tooltip>
            <ThemeSwitch />
            <ProfileMenu />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
