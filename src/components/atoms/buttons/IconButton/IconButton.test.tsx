import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import IconButton from './IconButton';

describe('IconButton', () => {
  it('should render IconButton component', () => {
    render(<IconButton onClick={() => {}}>Icon</IconButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should add class if it gets props remove', () => {
    render(
      <IconButton remove onClick={() => {}}>
        Icon
      </IconButton>
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'class',
      'buttonIcon remove '
    );
  });
});
