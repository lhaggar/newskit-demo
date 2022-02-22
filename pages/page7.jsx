import {
  Grid,
  Cell,
  TitleBar,
  CardInset,
  P,
  AudioPlayer,
  Block,
  useTheme,
  Image,
  styled,
  H2,
  Stack,
} from 'newskit';
import CodeTemplate from '../components/code-template';
import Page6 from '../public/static/page6';

export const pageTitle = 'Step 7: Full Page Example';

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

const ImageContainer = styled.div`
  max-width: 212px;
  max-height: 212px;
  margin: auto;
`;

const PublicationName = () => {
  const theme = useTheme();
  return theme.componentDefaults.publicationName || 'The NewsKit Daily';
};

const Content = () => (
  <Block spaceStack='space050'>
    <Grid>
      <Cell xs={12} mdOffset={1} md={9}>
        <Grid>
          <Cell xs={12} md={9}>
            <Grid>
              <Cell xs={12}>
                <Block spaceStack='space020'>
                  <TitleBar actionItem={() => null}>
                    <PublicationName /> Podcasts
                  </TitleBar>
                </Block>
              </Cell>
              <Cell xs={12} md={3} lgOffset={1}>
                <ImageContainer>
                  <Image
                    src="https://via.placeholder.com/300/011936/FFFFFF?text=A Great Presenter Image"
                    alt="A Great Presenter"
                    maxWidth="300px"
                    overrides={{
                      stylePreset: 'audioPlayerImage',
                    }}
                  />
                </ImageContainer>
              </Cell>
              <Cell xs={12} md={9} lg={7}>
                <Block spaceStack='space050'>
                  <H2>A Great Podcast</H2>
                </Block>
                <P>
                  This week on A Great Podcast we have lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </P>
              </Cell>
              <Cell xs={12}>
                <AudioPlayer
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
                  captionSrc=""
                  popoutHref="/popout-player"
                />
              </Cell>
            </Grid>
          </Cell>
          <Cell xsHidden smHidden md={3}>
            <Stack flow="vertical-center" stackDistribution="center">
              {/* Page6 is our Pricing Card Component */}
              <Page6 />
            </Stack>
          </Cell>

          <Cell xs={12}>
            <Block spaceStack='space020'>
              <TitleBar
                overrides={{
                  heading: {
                    typographyPreset: {
                      xs: 'heading020',
                      md: 'heading030',
                      lg: 'utilityHeading050',
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
              <CardInset media={media}>
                <P>{text}</P>
              </CardInset>
            </Cell>
          ))}
        </Grid>
      </Cell>
    </Grid>
  </Block>
);

export default () => (
  <CodeTemplate title={pageTitle} PageComponent={Content} showThemeSwitcher />
);
