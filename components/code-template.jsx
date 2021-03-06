import { CodeFromFile } from './code';
import Template from './template';
import {
  Stack,
  Block,
  Heading2,
  Tag,
  Grid,
  Cell,
  styled,
  getBorderCssFromTheme,
  getSpacingCssFromTheme
} from 'newskit';
import useThemeSwitcher from './use-theme-switcher';

const HR = styled.hr`
  margin-top: 0;
  ${getSpacingCssFromTheme('marginBottom', 'space050')}
`;

const Container = styled.div`
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded010')}
  ${getSpacingCssFromTheme('padding', 'spaceInset020')}
  overflow: hidden;
`;

export default ({
  PageComponent,
  codePaths,
  title,
  nextPage,
  showThemeSwitcher,
}) => {
  const hasCode = Boolean(codePaths && codePaths.length);
  const [themeSwitcher, ThemeWrapper] = useThemeSwitcher();

  const Content = () => (
    <Grid>
      <Cell xs={12} md={hasCode ? 6 : 12}>
        <Container>
          <Stack flow="horizontal-top" stackDistribution="center">
            <PageComponent />
          </Stack>
        </Container>
      </Cell>
      {hasCode && (
        <Cell xsHidden smHidden md={6}>
          <Container>
            <Stack space="sizing030">
              {codePaths.map((path) => (
                <CodeFromFile path={path} />
              ))}
            </Stack>
          </Container>
        </Cell>
      )}
    </Grid>
  );

  return (
    <Template title={title}>
      <Block spaceInset='spaceInsetStretch020'>
        <Stack flow="horizontal-center" stackDistribution="space-between">
          <Block spaceInset='spaceInsetStretch020'>
            <Heading2>{title}</Heading2>
          </Block>
          {showThemeSwitcher && themeSwitcher}
          {nextPage ? (
            <Tag href={`/${nextPage}`} size="large">
              Next Step 👉
            </Tag>
          ) : (
            <Tag href="/" size="large">
              Home 🏡
            </Tag>
          )}
        </Stack>
      </Block>
      <HR />
      {showThemeSwitcher ? (
        <ThemeWrapper>
          <Content />
        </ThemeWrapper>
      ) : (
        <Content />
      )}
    </Template>
  );
};
