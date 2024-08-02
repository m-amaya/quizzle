import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function CreateFlashcardsPage() {
  return (
    <>
      <Helmet>
        <title>CreateFlashcards | Quizzle</title>
      </Helmet>
      <AppShell.Main>CreateFlashcards Page</AppShell.Main>
    </>
  );
}
