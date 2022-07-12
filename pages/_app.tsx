import type { AppProps } from 'next/app';
import DefaultLayout from '@/layouts/DefaultLayout';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#ffffff',
  black: '#000000',
  primary: {
    50: '#F3F3FC',
    100: '#DEDFF7',
    200: '#C9CCF3',
    300: '#ACB0EC',
    400: '#7279DF',
    500: '#4750D5',
    600: '#2C35BF',
    700: '#222995',
    800: '#191E6C',
    900: '#0F1242',
  },
  accent: {
    50: '#FBF4FB',
    100: '#F5E0F3',
    200: '#EFCDEC',
    300: '#E5B3E1',
    400: '#D47DCC',
    500: '#C757BD',
    600: '#B03BA6',
    700: '#892E82',
    800: '#64215E',
    900: '#3D143A',
  },
  gray: {
    50: '#F5F5FA',
    100: '#E4E5F1',
    200: '#CFD0E2',
    300: '#B3B5CC',
    400: '#9496B8',
    500: '#6C6F93',
    600: '#47496B',
    700: '#32344B',
    800: '#1D1E30',
    900: '#0A0B12',
  },
  success: {
    50: '#F3FCF7',
    100: '#DEF7EA',
    200: '#C9F3DD',
    300: '#ACECCA',
    400: '#72DFA5',
    500: '#2BBB6E',
    600: '#219156',
    700: '#18683D',
    800: '#0E3E25',
    900: '#082114',
  },
  warning: {
    50: '#FDF8F2',
    100: '#FAECDB',
    200: '#F7E0C5',
    300: '#F2CFA6',
    400: '#E9AD67',
    500: '#DF8620',
    600: '#B26B1A',
    700: '#865013',
    800: '#59360D',
    900: '#472B0A',
  },
  danger: {
    50: '#FCF3F3',
    100: '#F7DEDF',
    200: '#F3C9CA',
    300: '#ECACAE',
    400: '#DF7275',
    500: '#D5474C',
    600: '#BF2C31',
    700: '#952226',
    800: '#6C191C',
    900: '#420F11',
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

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
