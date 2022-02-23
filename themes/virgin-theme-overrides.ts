export default {
  componentDefaults: {
    publicationName: 'Virgin Radio',
  },
  borders: {
    borderRadiusDefault: '{{borders.borderRadiusPill}}',
  },
  colors: {
    inkBrand010: '{{colors.red060}}',
    inkBrand020: '{{colors.red020}}',
    interfaceBrand010: '{{colors.red060}}',
    interfaceBrand020: '{{colors.red020}}',
    interactivePrimary010: '{{colors.red010}}',
    interactivePrimary020: '{{colors.red020}}',
    interactivePrimary030: '{{colors.red060}}',
    interactivePrimary040: '{{colors.red070}}',
    interactivePrimary050: '{{colors.red080}}',
  },
  fonts: {
    fontFamily010: {
      fontFamily: 'MontserratBold',
      cropConfig: {
        top: 8,
        bottom: 10,
      },
    },
    fontFamily020: {
      fontFamily: 'MontserratMedium',
      cropConfig: {
        top: 8,
        bottom: 10,
      },
    },
    fontFamily030: {
      fontFamily: 'MontserratRegular',
      cropConfig: {
        top: 8,
        bottom: 10,
      },
    },
    fontFamily040: {
      fontFamily: 'MontserratSemiBold',
      cropConfig: {
        top: 8,
        bottom: 10,
      },
    },
  },
  stylePresets: {
    titleBar: {
      base: {
        borderColor: '{{colors.interfaceBrand010}}',
      },
    },
  },
};
