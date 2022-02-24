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
  Theme,
  UncompiledTheme,
  ThemeOverrides,
} from 'newskit';
import useHasMounted from './use-has-mounted';
import timesThemeOverrides from '../themes/times-theme-overrides';
import sunThemeOverrides from '../themes/sun-theme-overrides';
import virginThemeOverrides from '../themes/virgin-theme-overrides';

const createOverrides = (customOverrides: ThemeOverrides = {}) => {
  return {
    ...customOverrides,
    stylePresets: {
      ...('stylePresets' in customOverrides ? customOverrides.stylePresets! : {}),
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
  ['NewsKit Light', undefined, {}],
  ['NewsKit Dark', newskitDarkTheme, {}],
  ['The Times Theme', undefined, timesThemeOverrides],
  ['The Sun Theme', undefined, sunThemeOverrides],
  ['Virgin Radio Theme', undefined, virginThemeOverrides],
];

const uncompiledThemes = themes.map(([name, baseTheme, overrides]: [string, UncompiledTheme | undefined, ThemeOverrides | undefined]) => {

  const theme: UncompiledTheme = createTheme({
    name,
    baseTheme,
    overrides: createOverrides(overrides),
  });
  // Bug in this NewsKit version keeps the name from base theme, so overwrite it here
  theme.name = name;
  return theme;
}) as UncompiledTheme[];

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

const useThemeSwitcher =  (): [null | JSX.Element, (() => any) | (({ children }: {children: any;}) => JSX.Element)] => {
  const mounted = useHasMounted();

  const [themeIndex, setThemeIndex] = useState(() => {
    const index =
      typeof window !== 'undefined'
        ? Number(window.localStorage.getItem('theme-index'))
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

  const themeLabels = uncompiledThemes.map(theme => theme.name);

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
      <ThemeProvider theme={uncompiledThemes[themeIndex]}>
        <Container>{children}</Container>
      </ThemeProvider>
    ),
  ];
};

export default useThemeSwitcher;
