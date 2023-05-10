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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 sm:px-6 md:px-10">
        <NavBar />
        {children}
      </main>
    </>
  );
};

export default Layout;
