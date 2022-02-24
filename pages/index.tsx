import { Block, H1, H2, H3, P, Stack, LinkStandalone, Divider } from 'newskit';
import Template from '../components/template';
import { pageTitle as page1Title } from './page1';
import { pageTitle as page2Title } from './page2';
import { pageTitle as page3Title } from './page3';
import { pageTitle as page4Title } from './page4';
import { pageTitle as page5Title } from './page5';
import { pageTitle as page6Title } from './page6';
import { pageTitle as page7Title } from './page7';
import { pageTitle as page8Title } from './page8';
import { pageTitle as page9Title } from './page9';

import { dependencies } from '../package.json';

export default () => (
  <Template>
    <Block spaceStack="space060">
      <H1>NewsKit Demo</H1>
    </Block>
    <Block spaceStack="space050">
      <H2>v{dependencies.newskit}</H2>
    </Block>
    <Block spaceStack="space040">
      <Divider />
    </Block>
    <H3 as="div">
      <Block spaceStack="space050">
        <Stack spaceInline="space020">
          <LinkStandalone href="/page1">{page1Title}</LinkStandalone>
          <LinkStandalone href="/page2">{page2Title}</LinkStandalone>
          <LinkStandalone href="/page3">{page3Title}</LinkStandalone>
          <LinkStandalone href="/page4">{page4Title}</LinkStandalone>
          <LinkStandalone href="/page5">{page5Title}</LinkStandalone>
          <LinkStandalone href="/page6">{page6Title}</LinkStandalone>
          <LinkStandalone href="/page7">{page7Title}</LinkStandalone>
          <LinkStandalone href="/page8">{page8Title}</LinkStandalone>
          <LinkStandalone href="/page9">{page9Title}</LinkStandalone>
        </Stack>
      </Block>
    </H3>
    <Block spaceStack='space050'>
      <Divider />
    </Block>
    <footer>
      <P>
        <LinkStandalone href="https://newskit.co.uk/">newskit.co.uk</LinkStandalone>
        {` | `}
        <LinkStandalone href="https://github.com/newscorp-ghfb/newskit">
          NewsKit on GitHub
        </LinkStandalone>
        {` | `}
        <LinkStandalone href="https://github.com/lhaggar/newskit-demo">
          This Demo on GitHub
        </LinkStandalone>
      </P>
    </footer>
  </Template>
);
