import {
  Block,
  Stack,
  Button,
  SkipNext,
  TextBlock,
  ThemeProvider,
  styled,
} from 'newskit';
import page4Theme from './page4-theme';

export default () => (
  <ThemeProvider theme={page4Theme}>
    <div>
      <Block overrides={{ spaceStack: 'space040' }}>
        <TextBlock as="h2" overrides={{ typePreset: 'heading050' }}>
          Standard Digital
        </TextBlock>
      </Block>
      <Block overrides={{ spaceStack: 'space050' }}>
        <TextBlock overrides={{ typePreset: 'body010' }}>
          For those who want to read The Times &amp; The Sunday Times on the go.
        </TextBlock>
      </Block>
      <Block overrides={{ spaceStack: 'space030' }}>
        <TextBlock as="h3" overrides={{ typePreset: 'heading050' }}>
          £15.00
        </TextBlock>
      </Block>
      <Block overrides={{ spaceStack: 'space040' }}>
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
  </ThemeProvider>
);
