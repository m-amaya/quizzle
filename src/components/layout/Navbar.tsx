import { Stack, UnstyledButton } from "@mantine/core";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <Stack>
      <UnstyledButton component={NavLink} to="/">
        Home
      </UnstyledButton>
      <UnstyledButton component={NavLink} to="/flashcards">
        Flashcards
      </UnstyledButton>
    </Stack>
  );
}
