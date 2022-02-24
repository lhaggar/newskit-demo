import CodeTemplate from '../components/code-template';
import Page6 from '../public/static/page7';

export const pageTitle = 'Step 6: Custom Component';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page7"
    PageComponent={Page6}
    codePaths={['page6.jsx', 'page6-theme.jsx']}
  />
);
