import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/sections/ContactForm";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nastty Works Contact</title>
        <meta name="description" content="Nastty Works Contact" />
      </Head>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
