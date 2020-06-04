import CodeTemplate from '../components/code-template';
import Page1 from '../public/static/page1';

export const pageTitle = 'Step 1: Basic Components';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page2"
    PageComponent={Page1}
    codePaths={['page1.jsx']}
  />
);
