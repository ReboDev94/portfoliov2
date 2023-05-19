import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import classNames from 'classnames';
import { Poppins } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes'

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
});


export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  return (
    <ThemeProvider attribute="class">
      <main className={classNames(`${poppins.variable} font-sans text-light-black`, { 'bg-light': pathname === '/' })}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider>
  );
}
