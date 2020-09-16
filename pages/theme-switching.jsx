import { useState } from 'react';
import {
  createTheme,
  newskitLightTheme,
  newskitDarkTheme,
  ThemeProvider,
  Grid,
  Cell,
  TitleBar,
  Card,
  P,
  AudioPlayer,
  Block,
  Global,
  css,
  useTheme,
  Image,
  styled,
  TextBlock,
  RadioPlayer,
} from 'newskit';
import Template from '../components/template';
import timesThemeOverrides from '../themes/times-theme-overrides';

export const pageTitle = 'Theme Switching';

const cards = [
  'EF476F/FFFFFF',
  'FFD166/000000',
  '06D6A0/FFFFFF',
  '118AB2/FFFFFF',
].map((colours) => ({
  media: {
    src: `https://via.placeholder.com/300/${colours}?text=A Great Podcast`,
  },
  title: 'A Great Podcast',
  text:
    'In this podcast we lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}));

const stylePresetHacks = {
  stylePresets: {
    // Semi-unsupported "RadioPlayer" uses this non-existent hardcoded style preset for the image
    maskRound010: {
      base: {
        borderRadius: '{{borders.borderRadiusPill}}',
      },
    },
  },
};
const themes = [
  [undefined, 'The Times Theme', timesThemeOverrides],
  [newskitLightTheme, 'NewsKit Light', stylePresetHacks],
  [
    newskitDarkTheme,
    'NewsKit Dark',
    {
      colors: {
        interactive220: '{{colors.neutral090}}',
        interactive230: '{{colors.blue060}}',
        interactive240: '{{colors.blue090}}',
        interactive250: '{{colors.blue100}}',
      },
      ...stylePresetHacks,
    },
  ],
].map(([baseTheme, name, overrides]) => {
  const theme = createTheme({
    name,
    baseTheme,
    overrides,
  });
  // Bug in this NewsKit version keeps the name from base theme, so overwrite it here
  theme.name = name;
  return theme;
});

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          background: ${theme.colors.interfaceBackground};
        }
      `}
    />
  );
};

const ThemeDropdown = ({ setThemeIndex, themeIndex }) => {
  return (
    <select
      onChange={(event) => {
        setThemeIndex(event.target.value);
      }}
      value={themeIndex}
    >
      {themes
        .map((theme, i) => [i, theme.name])
        .map(([id, label]) => {
          return (
            <option key={id + label} value={id}>
              {label}
            </option>
          );
        })}
    </select>
  );
};

export const ImageContainer = styled.div`
  max-width: 212px;
  max-height: 212px;
  margin: auto;
`;

export default () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex] || themes[0];
  return (
    <Template>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Grid>
          <Cell xs={12} mdOffset={2} md={8}>
            <Grid>
              <Cell xs={12}>
                <Block overrides={{ stackSpace: 'space050' }}>
                  <TitleBar
                    actionItem={() => (
                      <ThemeDropdown
                        setThemeIndex={setThemeIndex}
                        themeIndex={themeIndex}
                      />
                    )}
                  >
                    NewsKit Podcasts
                  </TitleBar>
                </Block>
              </Cell>

              <Cell xs={12} mdOffset={2} md={8}>
                <RadioPlayer
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
                  title="A Great Podcast"
                  description="This week on A Great Podcast we have lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  time="Episode 123"
                  tags={['Great', 'NewsKit', 'Podcast']}
                  imgSrc="https://via.placeholder.com/300/011936/FFFFFF?text=A Great Presenter Image"
                  imgAlt="A Great Presenter"
                  captionSrc=""
                />
              </Cell>

              <Cell xs={12}>
                <Block overrides={{ stackSpace: 'space050' }}>
                  <TitleBar
                    overrides={{
                      heading: {
                        typePreset: {
                          xs: 'heading020',
                          md: 'heading030',
                          lg: 'heading050',
                        },
                      },
                    }}
                  >
                    Popular Podcasts
                  </TitleBar>
                </Block>
              </Cell>

              {[...cards, ...[...cards].reverse()].map(({ media, text }) => (
                <Cell xs={12} sm={6} md={4} lg={3}>
                  <Card media={media}>
                    <P>{text}</P>
                  </Card>
                </Cell>
              ))}
            </Grid>
          </Cell>
        </Grid>
      </ThemeProvider>
    </Template>
  );
};
