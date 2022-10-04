import type { NextPage } from "next";
import Head from "next/head";
import ServicesBox from "../components/sections/Services";

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nastty Works Services</title>
        <meta name="description" content="Nastty Works Services" />
      </Head>

      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;
