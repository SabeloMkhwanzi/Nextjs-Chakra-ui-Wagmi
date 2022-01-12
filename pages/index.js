import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Navbar, Landpage, Footer } from "../component";

export default function Home() {
  return (
    <Box>
      <Head>
        <title> Web3.0 Starter Template</title>
        <meta name="description" content="Web3.0 Starter Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Landpage />

      <Footer />
    </Box>
  );
}
