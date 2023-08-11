import { screen } from '@testing-library/react';
import { customRender } from '@/utils/custom-render';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render a heading', () => {
    customRender(<Heading>Hello</Heading>);
    const element = screen.getByRole('heading', { name: /hello/i });
    expect(element).toHaveStyleRule('font-size', '5rem');
  });
});
