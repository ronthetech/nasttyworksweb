import Head from "next/head";
import { ReactNode } from "react";

interface PrimaryLayoutProps {
  children: ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <>
      <Head>
        <title>Nastty Works</title>
        <meta name="description" content="Nastty Works Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>NAVBAR</h1>
      <main>{children}</main>
      <h1>FOOTER</h1>
    </>
  );
};

export default PrimaryLayout;
