import CodeTemplate from '../components/code-template';
import Page4 from '../public/static/page5';

export const pageTitle = 'Step 4: Layout';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page5"
    PageComponent={Page4}
    codePaths={['page4.tsx']}
  />
);
