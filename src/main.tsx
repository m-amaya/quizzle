import "@fontsource-variable/inter"; // Supports weights 100-900
import "@fontsource-variable/quicksand"; // Supports weights 300-700
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { router } from "@src/tokens/router.tsx";
import { resolver, theme } from "@src/tokens/theme.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      defaultColorScheme="light"
    >
      <RouterProvider router={router} />
      <Notifications autoClose={5000} position="top-right" />
    </MantineProvider>
  </React.StrictMode>
);
