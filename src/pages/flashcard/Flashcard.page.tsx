import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function FlashcardPage() {
  return (
    <>
      <Helmet>
        <title>Flashcard | Quizzle</title>
      </Helmet>
      <AppShell.Main>Flashcard Page</AppShell.Main>
    </>
  );
}
