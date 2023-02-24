import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render Button component', () => {
    render(<Button onClick={() => {}}>Button</Button>);

    expect(screen.getByText('Button')).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
