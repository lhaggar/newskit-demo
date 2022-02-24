import { LinkStandalone, Stack } from 'newskit';
import CodeTemplate from '../components/code-template';

export const pageTitle = 'Step 1: Figma Design';

const Content = () => (
  <div>
    <Stack flow="vertical-center" stackDistribution="space-between" spaceStack="space040">
      <LinkStandalone href="https://www.figma.com/file/4Jzao4KyvOV95foRLBsTmn/NewsKit-Theme-Demo?node-id=1001%3A149993">View in Figma</LinkStandalone>
    </Stack>
    <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4Jzao4KyvOV95foRLBsTmn%2FNewsKit-Theme-Demo%3Fnode-id%3D1001%253A149993" allowFullScreen></iframe>

  </div>
);

export default () => (
  <CodeTemplate title={pageTitle} nextPage="page2" PageComponent={Content} />
)
