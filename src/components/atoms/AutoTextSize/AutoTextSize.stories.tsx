import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import AutoTextSize from './AutoTextSize';

const styles = {
  width: '150px',
  position: 'relative',
  backgroundColor: 'red',
} as React.CSSProperties;

const meta: Meta<typeof AutoTextSize> = {
  title: 'Components/atoms/AutoTextSize',
  component: AutoTextSize,
  decorators: [
    (Story) => (
      <div style={styles}>
        <div>Width: 150px</div>
        <hr />
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      type: {name: 'string', required: true},
      description: 'Resize text',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: '0'},
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoTextSize>;

export const ExampleText: Story = {
  args: {
    children: '123',
  },
};

export const ExampleText2: Story = {
  args: {
    children: '123123',
  },
};

export const ExampleText3: Story = {
  args: {
    children: '123123123123',
  },
};
