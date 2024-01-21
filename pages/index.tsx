import NameInput from "@/components/name-input";
import { Container } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Head>
        <title>Bingo</title>
        <meta
          name="description"
          content="Bingo Web-app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Container>
        <NameInput />
      </Container>
    </>
  );
}
