import CodeTemplate from '../components/code-template';
import Page5 from '../public/static/page6';

export const pageTitle = 'Step 5: Setting Style Presets';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page6"
    PageComponent={Page5}
    codePaths={['page5.jsx']}
  />
);
