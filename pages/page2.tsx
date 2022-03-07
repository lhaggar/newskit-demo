import CodeTemplate from '../components/code-template';
import Page2 from '../public/static/page2';

export const pageTitle = 'Step 2: Basic Components';

export const pageDescription = 'A simple example showing some Newskit basic components like TextBlock and Button';

export default () => (
  <CodeTemplate
    title={pageTitle}
    description={pageDescription}
    nextPage="page3"
    PageComponent={Page2}
    codePaths={['page2.tsx']}
  />
);
