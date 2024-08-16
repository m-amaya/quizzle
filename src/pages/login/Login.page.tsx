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
import { notifications } from "@mantine/notifications";
import { Card } from "@src/pages/login/Card";
import { User, useUserStore } from "@src/stores/user.store";
import { auth, githubProvider, googleProvider } from "@src/tokens/firebaseApp";
import { signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet";
import { BiBrain as LearnIcon } from "react-icons/bi";
import { FaGithub as GitHubIcon, FaGoogle as GoogleIcon } from "react-icons/fa";
import { TbCertificate as AceIcon, TbCards as StudyIcon } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigateTo = useNavigate();
  const store = useUserStore();

  const handleLogin = async (provider: User["provider"]) => {
    const isGoogleProvider = provider === "google";

    try {
      const { user } = await signInWithPopup(
        auth,
        isGoogleProvider ? googleProvider : githubProvider
      );

      store.updateDisplayName(user.displayName ?? "");
      store.updateEmail(user.email ?? "");
      store.updatePhotoUrl(user.photoURL ?? "");
      store.updateProvider(provider);
      store.updateUid(user.uid);
      navigateTo("/");
    } catch (error) {
      notifications.show({
        title: "Login Error",
        message: `${error}`
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Quizzle</title>
      </Helmet>
      <AppShell c="black" bg="gray.1" h="100dvh">
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
                <Button
                  fullWidth
                  leftSection={<GoogleIcon />}
                  onClick={() => handleLogin("google")}
                  size="lg"
                >
                  Log in with Google
                </Button>
                <Button
                  fullWidth
                  leftSection={<GitHubIcon />}
                  onClick={() => handleLogin("github")}
                  size="lg"
                >
                  Log in with Github
                </Button>
                <Text size="sm">
                  DISCLAIMER: This is a demo environment. No personal
                  information is ever stored or shared with a third party.
                </Text>
              </Stack>
            </Flex>
          </Group>
        </Container>
      </AppShell>
    </>
  );
}
