import { Layout } from "@src/components/layout";
import { FlashcardPage } from "@src/pages/flashcard";
import { CreateFlashcardsPage } from "@src/pages/flashcards-create";
import { HomePage } from "@src/pages/home";
import { LoginPage } from "@src/pages/login";
import { ResultsPage } from "@src/pages/results";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "flashcards/create",
        element: <CreateFlashcardsPage />
      },
      {
        path: "flashcards/:flashId/:orderNumber",
        element: <FlashcardPage />
      },
      {
        path: "flashcards/:flashId/results",
        element: <ResultsPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);
