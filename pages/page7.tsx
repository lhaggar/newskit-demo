import CodeTemplate from '../components/code-template';
import Page7 from '../public/static/page7';

export const pageTitle = 'Step 7: Theme';

export default () => (
  <CodeTemplate
    title={pageTitle}
    nextPage="page8"
    prevPage="page6"
    PageComponent={Page7}
    codePaths={['page7.tsx']}
    showThemeSwitcher
  />
);
