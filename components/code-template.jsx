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
  getBorderRadiusFromTheme,
  getSpacingFromTheme,
  getSpacingInsetFromTheme,
} from 'newskit';
import useThemeSwitcher from './use-theme-switcher';

const HR = styled.hr`
  margin-top: 0;
  margin-bottom: ${getSpacingFromTheme('space050')};
`;

const Container = styled.div`
  border-radius: ${getBorderRadiusFromTheme('borderRadiusRounded010')};
  ${getSpacingInsetFromTheme('spaceInset020')};
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
      <Block overrides={{ spaceInset: 'spaceInsetStretch020' }}>
        <Stack flow="horizontal-center" stackDistribution="space-between">
          <Block overrides={{ soaceInset: 'spaceInsetStretch020' }}>
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
