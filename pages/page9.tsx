import {
  getShadowCssFromTheme,
  getSpacingCssFromTheme,
  styled,
  ThemeChecker,
} from 'newskit';
import CodeTemplate from '../components/code-template';

export const pageTitle = 'Theme Checker';

const MainContainer = styled.div`
  width: 100%;
  ${getSpacingCssFromTheme('padding', 'spaceInset020')}
  ${getShadowCssFromTheme('boxShadow', 'shadow030')}
`;

const Content = () => (
  <MainContainer>
    <ThemeChecker />
  </MainContainer>
);

export default () => (
  <CodeTemplate
    title={pageTitle}
    prevPage="page8"
    PageComponent={Content}
    showThemeSwitcher
  />
);
