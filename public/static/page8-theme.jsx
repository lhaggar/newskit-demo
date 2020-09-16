import { createTheme } from 'newskit';
import page7Theme from './page7-theme';

export default createTheme({
  name: 'page8-theme',
  baseTheme: page7Theme,
  overrides: {
    stylePresets: {
      pricingCardSurface: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
    },
  },
});
