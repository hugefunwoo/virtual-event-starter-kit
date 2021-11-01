/**
 * This defines color palette / font / font size and spacings to achieve consistency
 *
 * @see https://chakra-ui.com/docs/theming/theme
 */
import { ReactNode } from 'react';
import { ChakraProvider, extendTheme, withDefaultColorScheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  xs: '375px',
  sm: '768px',
  md: '1024px',
  lg: '1440px',
  xl: '1920px'
});

const colors = {
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    300: '#e0e0e0',
    500: '#9e9e9e',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  orange: '#FF6136',
  brand: '#FF6136',
  blue: '#0A529E'
};

const fonts = {
  body: 'Noto Sans TC',
  heading: 'Noto Sans TC',
  mono: 'Roboto, monospace'
};

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem'
};

const config: ThemeConfig = {
  cssVarPrefix: 'wm'
};

const theme = extendTheme(
  {
    breakpoints,
    components: {
      Button: {
        baseStyle: {
          _focus: {
            boxShadow: 'none'
          }
        },
        variants: {
          //@ts-ignore
          primary: props => ({
            bg: mode('black', 'white')(props),
            color: mode('white', 'black')(props),
            fontWeight: 400,
            borderRadius: 0
          }),
          //@ts-ignore
          secondary: props => ({
            bg: mode('white', 'black')(props),
            color: mode('black', 'white')(props),
            fontWeight: 400,
            border: '1px solid',
            borderRadius: 0
          })
        },
        defaultProps: {
          variant: 'primary'
        }
      }
    },
    colors,
    config,
    fonts,
    fontSizes
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
);

export default function Themed({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
