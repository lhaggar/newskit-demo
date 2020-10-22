import CodeTemplate from '../components/code-template';
import Page6 from '../public/static/page6';

export const pageTitle = 'Step 6: Theme';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page7"
    PageComponent={Page6}
    codePaths={['page6.jsx']}
    showThemeSwitcher
  />
);
