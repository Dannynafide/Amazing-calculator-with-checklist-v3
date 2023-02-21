import {MdExitToApp} from 'react-icons/md';

import Button from './Button';

export default {
  title: 'Components/atoms/buttons/Button',
  component: Button,
};

export const Primary = {
  args: {
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    children: 'Second button',
    secondary: true,
  },
};

export const WithIcon = {
  args: {
    icon: <MdExitToApp />,
    children: 'Button',
  },
};

export const LongLabel = {
  args: {
    children: 'Sample long text to try the button',
    style: {width: '150px'},
  },
};

export const LongLabelWithIcon = {
  args: {
    children: 'Sample long text to try the button',
    icon: <MdExitToApp />,
    style: {width: '150px'},
  },
};
