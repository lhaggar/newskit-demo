import CodeTemplate from '../components/code-template';
import Page8 from '../public/static/page8';

export const pageTitle = 'Step 8: Custom Components';

export default () => (
  <CodeTemplate
    title={pageTitle}
    PageComponent={Page8}
    codePaths={['page8.jsx', 'page8-theme.jsx']}
  />
);
