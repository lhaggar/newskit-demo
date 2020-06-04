import { createTheme, getFontSizing } from 'newskit';

export default createTheme('page4-theme', {
  // Overriding at this first stage means these font family
  // values will be used in all type presets, instead of the
  // NewsKit Light defaults.
  fontOverrides: {
    fontFamily1: {
      fontFamily: 'TimesDigitalRegular',
    },
    fontFamily2: {
      fontFamily: 'TimesModernBold',
    },
    fontFamily3: {
      fontFamily: 'GillSansMTStdMedium',
    },
  },
  // Overriding at this end stage will only affect these specific presets.
  themeOverrider: ({ fonts }) => ({
    typePresets: {
      heading050: {
        ...fonts.fontFamily2,
        letterSpacing: fonts.fontLetterSpacing030,
        fontSize: fonts.fontSize080,
        lineHeight: fonts.fontLineHeight010,
      },
      label030: {
        ...fonts.fontFamily3,
      },
      buttonMedium: {
        ...fonts.fontFamily3,
        textTransform: 'uppercase',
      },
    },
  }),
});
