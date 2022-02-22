import {
  Grid,
  Cell,
  TitleBar,
  P,
  AudioPlayer,
  Block,
  Image,
  styled,
  H2,
} from 'newskit';
import Template from '../components/template';

const ImageContainer = styled.div`
  max-width: 212px;
  max-height: 212px;
  margin: auto;
`;

export default () => (
  <Template>
    <Block spaceStack="space050">
      <Grid>
        <Cell xs={12} md={9}>
          <Grid>
            <Cell xs={12}>
              <Block spaceStack="space020">
                <TitleBar actionItem={() => null}>
                  The NewsKit Daily Podcasts
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
              <Block spaceStack="space050">
                <H2>A Great Podcast</H2>
              </Block>
              <P>
                This week on A Great Podcast we have lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </P>
            </Cell>
            <Cell xs={12}>
              <AudioPlayer
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
                captionSrc=""
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Block>
  </Template>
);
