import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Display from './Display';

describe('Display', () => {
  it('should render Display component', () => {
    render(<Display value={123} />);
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('should render Display component at value<0', () => {
    render(<Display value={-123} />);
    expect(screen.getByText('-123')).toBeInTheDocument();
  });

  it('should render Display component at value==0', () => {
    render(<Display value={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
