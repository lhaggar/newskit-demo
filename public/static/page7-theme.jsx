import { createTheme } from 'newskit';
import page6Theme from './page6-theme';

export default createTheme({
  name: 'page7-theme',
  baseTheme: page6Theme,
  overrides: {
    colors: {
      blue060: '#006699',
      neutral080: '#696969',
      neutral100: '#1d1d1b',
    },
    stylePresets: {
      contrastText: {
        base: {
          color: '{{colors.inkContrast}}',
        },
      },
      subtleText: {
        base: {
          color: '{{colors.inkSubtle}}',
        },
      },
    },
  },
});
