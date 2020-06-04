import { Button, SkipNext } from 'newskit';
import { TextBlock } from '../../components/coming-soon-in-newskit';

export default () => (
  <div>
    <TextBlock as="h2">Standard Digital</TextBlock>
    <TextBlock>
      For those who want to read The Times &amp; The Sunday Times on the go.
    </TextBlock>
    <TextBlock as="h3">£15.00</TextBlock>
    <TextBlock>a month, monthly rolling contract.</TextBlock>
    <Button>Subscribe</Button>
    <Button>
      View Benefits <SkipNext />
    </Button>
  </div>
);
