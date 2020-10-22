import { Block, Stack, Button, IconFilledExpandMore, TextBlock } from 'newskit';

export default () => (
  <div>
    <Block overrides={{ spaceStack: 'space040' }}>
      <TextBlock as="h2" overrides={{ typographyPreset: 'utilityHeading050' }}>
        Standard Digital
      </TextBlock>
    </Block>
    <Block overrides={{ spaceStack: 'space050' }}>
      <TextBlock overrides={{ typographyPreset: 'utilityBody010' }}>
        For those who want to read The Times &amp; The Sunday Times on the go.
      </TextBlock>
    </Block>
    <Block overrides={{ spaceStack: 'space030' }}>
      <TextBlock as="h3" overrides={{ typographyPreset: 'utilityHeading050' }}>
        £15.00
      </TextBlock>
    </Block>
    <Block overrides={{ spaceStack: 'space040' }}>
      <TextBlock overrides={{ typographyPreset: 'utilityLabel030' }}>
        a month, monthly rolling contract.
      </TextBlock>
    </Block>
    <Stack flow="horizontal-top">
      <Button overrides={{ width: '100%' }}>Subscribe</Button>
      <Button overrides={{ width: '100%' }}>
        View Benefits <IconFilledExpandMore />
      </Button>
    </Stack>
  </div>
);
