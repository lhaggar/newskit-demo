import {
  Block,
  Stack,
  Button,
  IconFilledExpandMore,
  TextBlock,
  styled,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  useTheme,
} from 'newskit';

const StyledContainer = styled.div`
  ${getStylePresetFromTheme('pricingCardSurface')};
  ${getSpacingCssFromTheme('padding', 'spaceInsetStretch040')}
  max-width: 287px;
`;

const NoWrapButton = styled(Button)`
  white-space: nowrap;
`;

const PublicationName = () => {
  const theme = useTheme();
  return theme.componentDefaults.publicationName || 'The NewsKit Daily';
};

export default () => (
  <StyledContainer>
    <Block spaceStack="space040">
      <TextBlock
        as="h2"
        typographyPreset="utilityHeading050"
        stylePreset="inkContrast"
      >
        Standard Digital
      </TextBlock>
    </Block>
    <Block spaceStack="space050">
      <TextBlock typographyPreset="utilityBody010" stylePreset="inkSubtle">
        For those who want to read <PublicationName /> on the go.
      </TextBlock>
    </Block>
    <Block spaceStack="space030">
      <TextBlock
        as="h3"
        typographyPreset="utilityHeading050"
        stylePreset="inkContrast"
      >
        £15.00
      </TextBlock>
    </Block>
    <Block spaceStack="space040">
      <TextBlock typographyPreset="utilityLabel030" stylePreset="inkSubtle">
        a month, monthly rolling contract.
      </TextBlock>
    </Block>
    <Stack flow="horizontal-top" stackDistribution="space-between">
      <Button
        overrides={{ width: '100%', stylePreset: 'buttonOutlinedPrimary' }}
      >
        Subscribe
      </Button>
      <NoWrapButton
        overrides={{ width: '100%', stylePreset: 'buttonMinimalPrimary' }}
      >
        View Benefits <IconFilledExpandMore />
      </NoWrapButton>
    </Stack>
  </StyledContainer>
);
