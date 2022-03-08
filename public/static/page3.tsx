import { Button, IconFilledExpandMore, TextBlock } from 'newskit';

export default () => (
  <div>
    <TextBlock as="h2" typographyPreset="utilityHeading050">
      Standard Digital
    </TextBlock>
    <TextBlock typographyPreset="utilityBody010">
      For those who want to read The Times &amp; The Sunday Times on the go.
    </TextBlock>
    <TextBlock as="h3" typographyPreset="utilityHeading050">
      £15.00
    </TextBlock>
    <TextBlock typographyPreset="utilityLabel030">
      a month, monthly rolling contract.
    </TextBlock>
    <Button>Subscribe</Button>
    <Button>
      View Benefits <IconFilledExpandMore />
    </Button>
  </div>
);
