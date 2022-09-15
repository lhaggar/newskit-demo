import CodeTemplate from '../components/code-template';
import Page5 from '../public/static/page5';

export const pageTitle = 'Step 5: Setting Style Presets';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page6"
    prevPage="page4"
    PageComponent={Page5}
    codePaths={['page5.tsx']}
  />
);
