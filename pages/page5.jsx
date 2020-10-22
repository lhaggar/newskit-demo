import CodeTemplate from '../components/code-template';
import Page5 from '../public/static/page5';

export const pageTitle = 'Step 5: Custom Component';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page6"
    PageComponent={Page5}
    codePaths={['page5.jsx', 'page5-theme.jsx']}
  />
);
