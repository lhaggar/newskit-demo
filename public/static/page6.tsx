import {
  Block,
  Stack,
  Button,
  TextBlock,
  NewsKitProvider,
  styled,
  getStylePresetFromTheme,
  getSpacingCssFromTheme,
  toNewsKitIcon,
} from 'newskit';
import { ExpandMore } from '@emotion-icons/material';
import page6Theme from './page6-theme';

const IconFilledExpandMore = toNewsKitIcon(ExpandMore);

const StyledContainer = styled.div`
  ${getStylePresetFromTheme('pricingCardSurface')}
  ${getSpacingCssFromTheme(
    'padding',
    'spaceInsetStretch040'
  )}
  max-width: 287px;
`;

const NoWrapButton = styled(Button)`
  white-space: nowrap;
`;

export default () => (
  <NewsKitProvider theme={page6Theme}>
    <StyledContainer>
      <TextBlock
        as="h2"
        typographyPreset="utilityHeading050"
        marginBlockEnd="space040"
        stylePreset="inkContrast"
      >
        Standard Digital
      </TextBlock>
      <TextBlock
        typographyPreset="utilityBody010"
        marginBlockEnd="space050"
        stylePreset="inkSubtle"
      >
        For those who want to read The Times &amp; The Sunday Times on the go.
      </TextBlock>
      <TextBlock
        as="h3"
        typographyPreset="utilityHeading050"
        marginBlockEnd="space030"
        stylePreset="inkContrast"
      >
        £15.00
      </TextBlock>
      <TextBlock
        typographyPreset="utilityLabel030"
        marginBlockEnd="space040"
        stylePreset="inkSubtle"
      >
        a month, monthly rolling contract.
      </TextBlock>
      <Stack flow="horizontal-top" stackDistribution="space-between">
        <Button
          overrides={{ width: '100%', stylePreset: 'buttonOutlinedPrimary' }}
        >
          Subscribe
        </Button>
        <NoWrapButton
          overrides={{ width: '100%', stylePreset: 'buttonMinimalPrimary' }}
        >
          View Benefits
          <IconFilledExpandMore />
        </NoWrapButton>
      </Stack>
    </StyledContainer>
  </NewsKitProvider>
);
