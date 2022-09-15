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
  getSpacingCssFromTheme,
  P,
} from 'newskit';
import LinkNext from 'next/link';
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

interface CodeTemplateProps {
  PageComponent: React.ElementType;
  codePaths?: string[];
  title: string;
  description?: React.ReactNode;
  nextPage?: string;
  prevPage?: string;
  showThemeSwitcher?: boolean;
}

export default ({
  PageComponent,
  codePaths,
  title,
  description,
  nextPage,
  prevPage,
  showThemeSwitcher = false,
}: CodeTemplateProps) => {
  const hasCode = Boolean(codePaths && codePaths.length);
  const [themeSwitcher, ThemeWrapper]: [
    null | JSX.Element,
    (() => any) | (({ children }: { children: any }) => JSX.Element)
  ] = useThemeSwitcher();

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
            <Stack spaceInline="space030">
              {codePaths.map((path, i) => (
                <CodeFromFile key={i} path={path} />
              ))}
            </Stack>
          </Container>
        </Cell>
      )}
    </Grid>
  );

  return (
    <Template title={title}>
      <Block spaceInset="spaceInsetStretch020">
        <Stack flow="horizontal-center" stackDistribution="space-between">
          <Block spaceInset="spaceInsetStretch020">
            <Heading2>{title}</Heading2>
            <P>{description}</P>
          </Block>
          {showThemeSwitcher && themeSwitcher}
          <Block>
            {prevPage && (
              <LinkNext href={`/${prevPage}`}>
                <Tag
                  href={`/${prevPage}`}
                  size="large"
                  overrides={{ marginInlineEnd: 'space040' }}
                >
                  👈 Previous Step
                </Tag>
              </LinkNext>
            )}
            {nextPage ? (
              <LinkNext href={`/${nextPage}`}>
                <Tag href={`/${nextPage}`} size="large">
                  Next Step 👉
                </Tag>
              </LinkNext>
            ) : (
              <Tag href="/" size="large">
                Home 🏡
              </Tag>
            )}
          </Block>
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
