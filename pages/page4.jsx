import CodeTemplate from '../components/code-template';
import Page4 from '../public/static/page4';

export const pageTitle = 'Step 4: Updating Theme - Typography';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page5"
    PageComponent={Page4}
    codePaths={['page4.jsx', 'page4-theme.jsx']}
  />
);
