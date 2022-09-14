import { useState, useCallback } from 'react';
import {
  createTheme,
  NewsKitProvider,
  newskitDarkTheme,
  styled,
  getColorCssFromTheme,
  ThemeOverrides,
  UncompiledTheme,
  Select,
  SelectOption,
} from 'newskit';
import useHasMounted from './use-has-mounted';
import timesThemeOverrides from '../themes/times-theme-overrides';
import sunThemeOverrides from '../themes/sun-theme-overrides';
import virginThemeOverrides from '../themes/virgin-theme-overrides';

const createOverrides = (customOverrides: ThemeOverrides = {}) => {
  return {
    ...customOverrides,
    stylePresets: {
      ...('stylePresets' in customOverrides
        ? customOverrides.stylePresets!
        : {}),
      pricingCardSurface: {
        base: {
          backgroundColor: '{{colors.interfaceBackground}}',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
    },
  };
};

const themes: UncompiledTheme[] = [
  [undefined, 'NewsKit Light', {}],
  [newskitDarkTheme, 'NewsKit Dark', {}],
  [undefined, 'The Times Theme', timesThemeOverrides],
  [undefined, 'The Sun Theme', sunThemeOverrides],
  [undefined, 'Virgin Radio Theme', virginThemeOverrides],
].map(
  ([baseTheme, name, overrides]: [
    UncompiledTheme | undefined,
    string,
    ThemeOverrides | undefined
  ]) => {
    const theme = createTheme({
      name,
      baseTheme,
      overrides: createOverrides(overrides),
    });
    // Bug in this NewsKit version keeps the name from base theme, so overwrite it here
    theme.name = name;
    return theme;
  }
);

const SelectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
`;

const Container = styled.div`
  ${getColorCssFromTheme('backgroundColor', 'inkInverse')};
`;

export default (): [
  null | JSX.Element,
  (() => any) | (({ children }: { children: any }) => JSX.Element)
] => {
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

  const themeLabels = themes.map((theme) => theme.name);

  return [
    <SelectContainer>
      <Select
        onChange={(event) => setAndSaveThemeIndex(Number(event.target.value))}
      >
        {themeLabels.map((label, id) => {
          return (
            <SelectOption
              key={id + label}
              value={String(id)}
              selected={themeIndex === id}
            >
              {label}
            </SelectOption>
          );
        })}
      </Select>
    </SelectContainer>,
    ({ children }) => (
      <NewsKitProvider theme={themes[themeIndex]}>
        <Container>{children}</Container>
      </NewsKitProvider>
    ),
  ];
};
