import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import Head from 'next/head';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps}: AppProps) {
   return (
      <>
         <Head>
            {/* Primary Meta Tags */}
            <title>WTFork - Visualize Your Product&apos;s Inevitable Downfall</title>
            <meta name="title" content="Visualize Your Product's Inevitable Downfall" />
            <meta name="description" content="Measure your app's entropy, complexity, and emotional damage — with charts." />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://wtfork-iota.vercel.app/" />
            <meta property="og:title" content="WTFork - Visualize Your Product's Inevitable Downfall" />
            <meta property="og:description" content="Measure your app's entropy, complexity, and emotional damage — with charts." />
            <meta property="og:image" content="https://wtfork-iota.vercel.app/wtficon_up.png" />
         </Head>
         <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
               light: lightTheme.className,
               dark: darkTheme.className,
            }}
         >
            <NextUIProvider>
               <Component {...pageProps} />
            </NextUIProvider>
         </NextThemesProvider>
      </>
   );
}

export default MyApp;
