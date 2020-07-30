import { Button, SkipNext, TextBlock } from 'newskit';

export default () => (
  <div>
    <TextBlock as="h2" overrides={{ typePreset: 'heading050' }}>
      Standard Digital
    </TextBlock>
    <TextBlock overrides={{ typePreset: 'body010' }}>
      For those who want to read The Times &amp; The Sunday Times on the go.
    </TextBlock>
    <TextBlock as="h3" overrides={{ typePreset: 'heading050' }}>
      £15.00
    </TextBlock>
    <TextBlock overrides={{ typePreset: 'label030' }}>
      a month, monthly rolling contract.
    </TextBlock>
    <Button>Subscribe</Button>
    <Button>
      View Benefits <SkipNext />
    </Button>
  </div>
);
