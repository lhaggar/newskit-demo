import IndexPage from '../pages';
import { render } from '@testing-library/react';

describe('Index Page', () => {
  it('should render as expected', () => {
    const r = render(<IndexPage />).asFragment();
    expect(r).toMatchSnapshot();
  });
});
