import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="header-fix fix-sidebar">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
