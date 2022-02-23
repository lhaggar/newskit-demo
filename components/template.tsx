import React from 'react';
import Head from 'next/head';
import { createTheme, ThemeProvider, Global, css, Block } from 'newskit';

const theme = createTheme({
  overrides: {
    stylePresets: {
      interface010: {
        base: {
          backgroundColor: '{{colors.interface010}}',
        },
      },
    },
  },
});

export default ({ title = 'NewsKit Demo', children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Global
      styles={css`
        @font-face {
          font-family: 'TimesDigitalRegular';
          src: url('/fonts/TimesDigitalW04-Regular.woff2') format('woff2');
          font-style: normal;
        }
        @font-face {
          font-family: 'TimesModernBold';
          src: url('/fonts/TimesModern-Bold.woff2') format('woff2');
          font-style: bold;
        }
        @font-face {
          font-family: 'GillSansMTStdMedium';
          src: url('/fonts/GillSansMTStd-Medium.woff2') format('woff2');
          font-style: normal;
        }

        @font-face {
          font-family: 'TheSunBold';
          src: url('/fonts/TheSun-Bold.ttf') format('truetype');
          font-style: normal;
        }
        @font-face {
          font-family: 'TheSunHeavyNarrow';
          src: url('/fonts/TheSun-HeavyNarrow.ttf') format('truetype');
          font-style: bold;
        }
        @font-face {
          font-family: 'TheSunMedium';
          src: url('/fonts/TheSun-Medium.ttf') format('truetype');
          font-style: normal;
        }
        @font-face {
          font-family: 'TheSunRegular';
          src: url('/fonts/TheSun-Regular.ttf') format('truetype');
          font-style: normal;
        }

        @font-face {
          font-family: 'MontserratBold';
          src: url('/fonts/Montserrat-Bold.woff2') format('woff2');
          font-style: normal;
        }
        @font-face {
          font-family: 'MontserratMedium';
          src: url('/fonts/Montserrat-Medium.woff2') format('woff2');
          font-style: bold;
        }
        @font-face {
          font-family: 'MontserratRegular';
          src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
          font-style: normal;
        }
        @font-face {
          font-family: 'MontserratSemiBold';
          src: url('/fonts/Montserrat-SemiBold.woff2') format('woff2');
          font-style: normal;
        }

        @font-face {
          font-family: 'Noto Sans';
          src: url('/fonts/notosans-regular-webfont.woff2') format('woff2'),
            url('/fonts/notosans-regular-webfont.woff') format('woff');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: 'Noto Sans';
          src: url('/fonts/notosans-italic-webfont.woff2') format('woff2'),
            url('/fonts/notosans-italic-webfont.woff') format('woff');
          font-style: italic;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: 'Noto Sans';
          src: url('/fonts/notosans-medium-webfont.woff2') format('woff2'),
            url('/fonts/notosans-medium-webfont.woff') format('woff');
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }
        @font-face {
          font-family: 'Noto Sans';
          src: url('/fonts/notosans-bold-webfont.woff2') format('woff2'),
            url('/fonts/notosans-bold-webfont.woff') format('woff');
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
        @font-face {
          font-family: 'Source Serif Pro';
          src: url('/fonts/source-serif-pro-regular.woff2') format('woff2'),
            url('/fonts/source-serif-pro-regular.woff') format('woff');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: 'Source Serif Pro';
          src: url('/fonts/source-serif-pro-italic.woff2') format('woff2'),
            url('/fonts/source-serif-pro-italic.woff') format('woff');
          font-style: italic;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: 'Source Serif Pro';
          src: url('/fonts/source-serif-pro-600.woff2') format('woff2'),
            url('/fonts/source-serif-pro-600.woff') format('woff');
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }
        @font-face {
          font-family: 'Source Serif Pro';
          src: url('/fonts/source-serif-pro-600italic.woff2') format('woff2'),
            url('/fonts/source-serif-pro-600italic.woff') format('woff');
          font-style: italic;
          font-weight: 600;
          font-display: swap;
        }
        @font-face {
          font-family: 'Source Serif Pro';
          src: url('/fonts/source-serif-pro-700.woff2') format('woff2'),
            url('/fonts/source-serif-pro-700.woff') format('woff');
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }
        @font-face {
          font-family: 'Source Serif Pro';
          src: url('/fonts/source-serif-pro-700italic.woff2') format('woff2'),
            url('/fonts/source-serif-pro-700italic.woff') format('woff');
          font-style: italic;
          font-weight: 700;
          font-display: swap;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <ThemeProvider theme={theme}>
      <Block spaceInset="spaceInset030">{children}</Block>
    </ThemeProvider>
  </>
);
