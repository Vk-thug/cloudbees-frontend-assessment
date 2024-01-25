import { WebLayout } from "@/layouts";
import "@/styles/globals.css";
import Head from 'next/head'
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>{`CloudBees Github - Front-end Technical Assessment`}</title>
        <meta
            name='description'
            content={`$Github User Details - CloudBees is the most user friendly & highly customizable uniifed Dashboard, managed all your github users in here.`}
        />
        <meta name='keywords' content='CloudBees, Github, Unified Github Dashboard' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </Fragment>
  );
}
