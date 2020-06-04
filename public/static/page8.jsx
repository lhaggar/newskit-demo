import {
  Block,
  Stack,
  Button,
  SkipNext,
  ThemeProvider,
  styled,
  getStylePresetFromTheme,
  getPaddingPresetFromTheme,
} from 'newskit';
import { TextBlock } from '../../components/coming-soon-in-newskit';
import page8Theme from './page8-theme';

const StyledContainer = styled.div`
  ${getStylePresetFromTheme('pricingCardSurface')};
  ${getPaddingPresetFromTheme('spaceInset040Stretch')};
  max-width: 287px;
`;

export default () => (
  <ThemeProvider theme={page8Theme}>
    <StyledContainer>
      <Block margin="spaceStack040">
        <TextBlock
          as="h2"
          overrides={{ typePreset: 'heading050', stylePreset: 'contrastText' }}
        >
          Standard Digital
        </TextBlock>
      </Block>
      <Block margin="spaceStack050">
        <TextBlock
          overrides={{ typePreset: 'body010', stylePreset: 'subtleText' }}
        >
          For those who want to read The Times &amp; The Sunday Times on the go.
        </TextBlock>
      </Block>
      <Block margin="spaceStack030">
        <TextBlock
          as="h3"
          overrides={{ typePreset: 'heading050', stylePreset: 'contrastText' }}
        >
          £15.00
        </TextBlock>
      </Block>
      <Block margin="spaceStack040">
        <TextBlock
          overrides={{ typePreset: 'label030', stylePreset: 'subtleText' }}
        >
          a month, monthly rolling contract.
        </TextBlock>
      </Block>
      <Stack flow="horizontal-center" stackDistribution="flex-start" flexGrow>
        <Button stylePreset="buttonOutlinedPrimary">Subscribe</Button>
        <Button stylePreset="buttonMinimalPrimary">
          View Benefits <SkipNext />
        </Button>
      </Stack>
    </StyledContainer>
  </ThemeProvider>
);
