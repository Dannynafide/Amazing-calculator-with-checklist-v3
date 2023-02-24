import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import NavButton from './NavButton';

describe('NavButton', () => {
  it('should render NavButton component', () => {
    render(<NavButton onClick={() => {}}>nav button</NavButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the active IconButton component', () => {
    render(
      <NavButton active onClick={() => {}}>
        nav button
      </NavButton>
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'class',
      'nav_button nav_button__active'
    );
    screen.debug();
  });
});
