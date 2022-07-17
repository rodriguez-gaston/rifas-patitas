import type { AppProps } from 'next/app';
import DefaultLayout from '@/layouts/DefaultLayout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors } from '@/styles/colors';
import { fonts } from '@/styles/fonts';

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
