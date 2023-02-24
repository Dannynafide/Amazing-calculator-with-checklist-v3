import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import AutoTextSize from './AutoTextSize';

describe('AutoTextSize Component', () => {
  it('should render AutoTextSize component', () => {
    render(<AutoTextSize>123</AutoTextSize>);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('should have a size of 68px at the start', () => {
    render(<AutoTextSize>123</AutoTextSize>);
    expect(screen.getByText('123')).toHaveAttribute(
      'style',
      'font-size: 68px; line-height: 1;'
    );
  });
});
