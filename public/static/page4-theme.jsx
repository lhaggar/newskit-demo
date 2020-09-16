import { createTheme } from 'newskit';

export default createTheme({
  name: 'page4-theme',
  overrides: {
    fonts: {
      fontFamily1: {
        fontFamily: 'TimesDigitalRegular',
        cropConfig: {
          top: 9,
          bottom: 12,
        },
      },
      fontFamily2: {
        fontFamily: 'TimesModernBold',
        cropConfig: {
          top: 7,
          bottom: 12,
        },
      },
      fontFamily3: {
        fontFamily: 'GillSansMTStdMedium',
        cropConfig: {
          top: 5,
          bottom: 14,
        },
      },
    },
    typePresets: {
      heading050: {
        fontFamily: '{{fonts.fontFamily2.fontFamily}}',
        letterSpacing: '{{fonts.fontLetterSpacing030}}',
        fontSize: '{{fonts.fontSize080}}',
        lineHeight: '{{fonts.fontLineHeight010}}',
      },
      label030: {
        fontFamily: '{{fonts.fontFamily3.fontFamily}}',
      },
      buttonMedium: {
        fontFamily: '{{fonts.fontFamily3.fontFamily}}',
        textTransform: 'uppercase',
      },
    },
  },
});
