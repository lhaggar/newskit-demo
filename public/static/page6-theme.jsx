import { createTheme } from 'newskit';
import page4Theme from './page4-theme';

export default createTheme({
  name: 'page6-theme',
  baseTheme: page4Theme,
  overrides: {
    borders: {
      borderRadiusDefault: '{{borders.borderRadiusSharp}}',
    },
    stylePresets: {
      buttonOutlinedPrimary: {
        base: {
          borderWidth: '{{borders.borderWidth020}}',
        },
      },
    },
  },
});
