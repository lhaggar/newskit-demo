import { useState, useCallback } from 'react';
import {
  createTheme,
  ThemeProvider,
  newskitDarkTheme,
  styled,
  getStylePreset,
  getTypographyPreset,
  getSpacingInset,
  getColorFromTheme,
  getMinHeight,
} from 'newskit';
import useHasMounted from './use-has-mounted';
import timesThemeOverrides from '../themes/times-theme-overrides';
import sunThemeOverrides from '../themes/sun-theme-overrides';
import virginThemeOverrides from '../themes/virgin-theme-overrides';

const createOverrides = (customOverrides = {}) => {
  return {
    ...customOverrides,
    stylePresets: {
      ...customOverrides.stylePresets,
      pricingCardSurface: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
    },
  };
};

const themes = [
  [undefined, 'NewsKit Light'],
  [newskitDarkTheme, 'NewsKit Dark'],
  [undefined, 'The Times Theme', timesThemeOverrides],
  [undefined, 'The Sun Theme', sunThemeOverrides],
  [undefined, 'Virgin Radio Theme', virginThemeOverrides],
].map(([baseTheme, name, overrides]) => {
  const theme = createTheme({
    name,
    baseTheme,
    overrides: createOverrides(overrides),
  });
  // Bug in this NewsKit version keeps the name from base theme, so overwrite it here
  theme.name = name;
  return theme;
});

// NewsKit has a text input field but no select (currently), we can use the same component defaults though!
const StyledSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  ${getStylePreset(`textInput.medium.input`, 'input')};
  ${getTypographyPreset(`textInput.medium.input`, 'input', {
    withCrop: true,
  })};
  ${getSpacingInset(`textInput.medium.input`, 'input')};
  min-height: ${getMinHeight(`textInput.medium.input`, 'input')};
`;

const Container = styled.div`
  background: ${getColorFromTheme('inverse')};
`;

export default () => {
  const mounted = useHasMounted();

  const [themeIndex, setThemeIndex] = useState(() => {
    const index =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme-index')
        : 0;
    return Math.min(Math.max(index, 0), themes.length - 1);
  });

  const setAndSaveThemeIndex = useCallback(
    (index) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('theme-index', index);
      }
      setThemeIndex(index);
    },
    [setThemeIndex]
  );

  if (!mounted) {
    return [null, () => null];
  }

  const themeLabels = themes.map((theme) => theme.name);
  return [
    <StyledSelect
      onChange={(event) => {
        setAndSaveThemeIndex(event.target.value);
      }}
      defaultValue={themeIndex.toString()}
    >
      {themeLabels.map((label, id) => {
        return (
          <option key={id + label} value={id}>
            {label}
          </option>
        );
      })}
    </StyledSelect>,
    ({ children }) => (
      <ThemeProvider theme={themes[themeIndex]}>
        <Container>{children}</Container>
      </ThemeProvider>
    ),
  ];
};
