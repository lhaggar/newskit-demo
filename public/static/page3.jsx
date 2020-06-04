import { Block, Stack, Button, SkipNext } from 'newskit';
import { TextBlock } from '../../components/coming-soon-in-newskit';

export default () => (
  <div>
    <Block margin="spaceStack040">
      <TextBlock as="h2" overrides={{ typePreset: 'heading050' }}>
        Standard Digital
      </TextBlock>
    </Block>
    <Block margin="spaceStack050">
      <TextBlock overrides={{ typePreset: 'body010' }}>
        For those who want to read The Times &amp; The Sunday Times on the go.
      </TextBlock>
    </Block>
    <Block margin="spaceStack030">
      <TextBlock as="h3" overrides={{ typePreset: 'heading050' }}>
        £15.00
      </TextBlock>
    </Block>
    <Block margin="spaceStack040">
      <TextBlock overrides={{ typePreset: 'label030' }}>
        a month, monthly rolling contract.
      </TextBlock>
    </Block>
    <Stack flow="horizontal-center" stackDistribution="flex-start">
      <Button>Subscribe</Button>
      <Button>
        View Benefits <SkipNext />
      </Button>
    </Stack>
  </div>
);
