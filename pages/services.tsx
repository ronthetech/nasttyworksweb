import type { NextPage } from "next";
import Head from "next/head";
import ServiceList from "../components/sections/ServiceList";

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nastty Works Auto Services</title>
        <meta name="description" content="Nastty Works Services" />
      </Head>

      <div>
        <ServiceList />
      </div>
    </div>
  );
};

export default Services;
