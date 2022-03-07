import CodeTemplate from '../components/code-template';
import Page6 from '../public/static/page6';

export const pageTitle = 'Step 6: Custom Component';

export const pageDescription = 'Adding a custom Card Surface component and a Button with no-wrapping text';

export default () => (
  <CodeTemplate
    title={pageTitle}
    description={pageDescription}
    nextPage="page7"
    PageComponent={Page6}
    codePaths={['page6.tsx', 'page6-theme.tsx']}
  />
);
