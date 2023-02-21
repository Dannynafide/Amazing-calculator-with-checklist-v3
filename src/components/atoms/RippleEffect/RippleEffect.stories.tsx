import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import Button from '../buttons/Button/Button';
import RippleEffect from './RippleEffect';

const wrapperStyles = {
  backgroundColor: 'darkgray',
  width: '200px',
  height: '200px',
} as React.CSSProperties;

const styles = {
  // Riple effect
  position: 'relative',
  overflow: 'hidden',
  maskImage:
    'mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)',

  // style for the item
  width: '100px',
  height: '100px',
  border: 'none',
  backgroundColor: 'silver',
  marginLeft: '50px',
  marginTop: '30px',
} as React.CSSProperties;

const meta: Meta<typeof RippleEffect> = {
  title: 'components/atoms/RippleEffectSimulation',
  component: RippleEffect,
};
export default meta;
type Story = StoryObj<typeof RippleEffect>;

function Template(args: {duration?: number; color?: string}) {
  return (
    <div style={wrapperStyles}>
      Area not allowed
      <button type="button" style={styles}>
        Riple effect - allowed area
        <RippleEffect {...args} />
      </button>
    </div>
  );
}

export const BasicEffect: Story = {
  render: (args) => <Template {...args} />,
  args: {
    duration: 850,
  },
};

export const Color: Story = {
  render: (args) => <Template {...args} />,
  args: {
    duration: 850,
    color: 'red',
  },
};

export const ButtonComponent: Story = {
  render: () => (
    <div style={wrapperStyles}>
      <div>Area not allowed</div>
      <Button onClick={() => {}}>Button</Button>
      <div>Area not allowed</div>
    </div>
  ),
};
