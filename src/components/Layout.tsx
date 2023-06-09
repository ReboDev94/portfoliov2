import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from '@/components/NavBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>ReboDev</title>
        <meta name="description" content="Personal web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/x-icon" rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

      </Head>
      <NavBar />
      <main className="container mx-auto px-6 md:px-10">
        {children}
      </main>
    </>
  );
};

export default Layout;
