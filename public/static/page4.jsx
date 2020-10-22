import { Block, Stack, Button, IconFilledExpandMore, TextBlock } from 'newskit';

export default () => (
  <div>
    <Block overrides={{ spaceStack: 'space040' }}>
      <TextBlock
        as="h2"
        overrides={{
          typographyPreset: 'utilityHeading050',
          stylePreset: 'inkContrast',
        }}
      >
        Standard Digital
      </TextBlock>
    </Block>
    <Block overrides={{ spaceStack: 'space050' }}>
      <TextBlock
        overrides={{
          typographyPreset: 'utilityBody010',
          stylePreset: 'inkSubtle',
        }}
      >
        For those who want to read The Times &amp; The Sunday Times on the go.
      </TextBlock>
    </Block>
    <Block overrides={{ spaceStack: 'space030' }}>
      <TextBlock
        as="h3"
        overrides={{
          typographyPreset: 'utilityHeading050',
          stylePreset: 'inkContrast',
        }}
      >
        £15.00
      </TextBlock>
    </Block>
    <Block overrides={{ spaceStack: 'space040' }}>
      <TextBlock
        overrides={{
          typographyPreset: 'utilityLabel030',
          stylePreset: 'inkSubtle',
        }}
      >
        a month, monthly rolling contract.
      </TextBlock>
    </Block>
    <Stack flow="horizontal-top" stackDistribution="space-between">
      <Button
        overrides={{ width: '100%', stylePreset: 'buttonOutlinedPrimary' }}
      >
        Subscribe
      </Button>
      <Button
        overrides={{ width: '100%', stylePreset: 'buttonMinimalPrimary' }}
      >
        View Benefits <IconFilledExpandMore />
      </Button>
    </Stack>
  </div>
);
