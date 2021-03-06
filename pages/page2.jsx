import CodeTemplate from '../components/code-template';
import Page2 from '../public/static/page2';

export const pageTitle = 'Step 2: Setting Type Presets';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page3"
    PageComponent={Page2}
    codePaths={['page2.jsx']}
  />
);
