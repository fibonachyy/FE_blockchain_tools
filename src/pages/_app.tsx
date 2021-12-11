import type { AppProps } from "next/app";

import React from "react";
import "../../styles/globals.css";
import * as Layouts from "../components/Layouts";

import type { Page } from "../types/page";

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};
const MyApp = ({ Component, pageProps }: Props) => {
  const Layout = Component.layout ?? Layouts.DefaultLayout;
  return <Layout>{<Component {...pageProps} />}</Layout>;
};

export default MyApp;
