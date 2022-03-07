import CodeTemplate from '../components/code-template';
import Page3 from '../public/static/page4';

export const pageTitle = 'Step 3: Setting Type Presets';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page4"
    PageComponent={Page3}
    codePaths={['page3.tsx']}
  />
);
