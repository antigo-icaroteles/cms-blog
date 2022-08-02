import { useEffect, useState } from "react";
import { Layout } from "../src/components";
import "tailwindcss/tailwind.css";

import "../src/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
