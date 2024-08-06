import { Container } from "@mantine/core";
import { Helmet } from "react-helmet";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Quizzle</title>
      </Helmet>
      <Container>Home Page</Container>
    </>
  );
}
