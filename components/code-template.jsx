import { CodeFromFile } from './code';
import Template from './template';
import {
  Stack,
  Heading2,
  Tag,
  Grid,
  Cell,
  styled,
  getColorFromTheme,
  getBorderRadiusFromTheme,
  getSizingFromTheme,
  Scroll,
} from 'newskit';

const HR = styled.hr`
  margin-bottom: ${getSizingFromTheme('sizing060')};
`;

const Container = styled.div`
  background: ${getColorFromTheme('interface020', 'background')};
  border-radius: ${getBorderRadiusFromTheme('borderRadiusRounded010')};
  height: 80vh;
  overflow-x: auto;
  overflow-y: auto;
`;

export default ({ PageComponent, codePaths, title, nextPage }) => (
  <Template title={title}>
    <Stack flow="horizontal-center" stackDistribution="space-between">
      <Heading2>{title}</Heading2>
      {nextPage && (
        <Tag href={`/${nextPage}`} size="large">
          Next Step 👉
        </Tag>
      )}
    </Stack>
    <HR />
    <Grid>
      <Cell xs={12} md={6}>
        <Container>
          <Stack flow="horizontal-top" stackDistribution="center">
            <PageComponent />
          </Stack>
        </Container>
      </Cell>
      <Cell xsHidden smHidden md={6}>
        <Container>
          <Stack space="sizing030">
            {codePaths.map((path) => (
              <CodeFromFile path={path} />
            ))}
          </Stack>
        </Container>
      </Cell>
    </Grid>
  </Template>
);
