import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Flex, Grid, GridItem, Input } from "@chakra-ui/react";
import BingoGrid from "@/components/bingo-grid";
import NameInput from "@/components/name-input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
