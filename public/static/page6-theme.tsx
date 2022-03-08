import { createTheme } from 'newskit';

export default createTheme({
  name: 'page6-theme',
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
