import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('ProgressBar Component', () => {
  it('should render ProgressBar component', () => {
    render(<ProgressBar progress={30} />);

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();

    expect(screen.getByTestId('progress-bar')).toHaveAttribute(
      'style',
      'width: 30%;'
    );
  });
});
