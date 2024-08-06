import {
  AppShell,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text
} from "@mantine/core";
import { Card } from "@src/pages/login/Card";
import { Helmet } from "react-helmet";
import { BiBrain as LearnIcon } from "react-icons/bi";
import { TbCertificate as AceIcon, TbCards as StudyIcon } from "react-icons/tb";

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Quizzle</title>
      </Helmet>
      <AppShell h="100dvh">
        <Container pt={80}>
          <Group mb="xl">
            <Image height={60} src="/logo.png" alt="Logo image" />
            <Text c="pink.5" ff="heading" fz="h1" fw={700}>
              Quizzle
            </Text>
          </Group>
          <Grid columns={3}>
            <Grid.Col span={{ base: 3, sm: 1 }}>
              <Card bg="yellow.2" c="yellow.6" Icon={LearnIcon}>
                Learn
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 3, sm: 1 }}>
              <Card bg="ocean.2" c="ocean.6" Icon={StudyIcon}>
                Study
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 3, sm: 1 }}>
              <Card bg="grape.2" c="grape.6" Icon={AceIcon}>
                Ace
              </Card>
            </Grid.Col>
          </Grid>
          <Group gap="xl" mt={80}>
            <Flex align="center" flex={1} justify="flex-end" visibleFrom="sm">
              <Text ff="heading" fw={700} style={{ fontSize: 30 }}>
                Log In
              </Text>
            </Flex>
            <Flex flex={1}>
              <Stack gap="xs" w="100%">
                <Button fullWidth size="lg">
                  Log in with Google
                </Button>
                <Button fullWidth size="lg">
                  Log in with Apple
                </Button>
                <Button fullWidth size="lg">
                  Log in with Microsoft
                </Button>
                <Button fullWidth size="lg">
                  Log in with Github
                </Button>
              </Stack>
            </Flex>
          </Group>
        </Container>
      </AppShell>
    </>
  );
}
