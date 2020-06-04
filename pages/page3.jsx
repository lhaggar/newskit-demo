import CodeTemplate from '../components/code-template';
import Page3 from '../public/static/page3';

export const pageTitle = 'Step 3: Layout';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page4"
    PageComponent={Page3}
    codePaths={['page3.jsx']}
  />
);
