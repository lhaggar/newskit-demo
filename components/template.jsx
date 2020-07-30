import React from 'react';
import Head from 'next/head';
import { ThemeProvider, Global, css, newskitLightTheme } from 'newskit';

export default ({ title = 'NewsKit Demo', children }) => (
  <div>
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
      `}
    />
    <ThemeProvider theme={newskitLightTheme}>{children}</ThemeProvider>
  </div>
);
