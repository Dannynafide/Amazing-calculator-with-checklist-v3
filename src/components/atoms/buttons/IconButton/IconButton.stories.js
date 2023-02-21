import {MdCheck, MdClose} from 'react-icons/md';

import IconButton from './IconButton';

export default {
  title: 'Components/atoms/buttons/IconButton',
  component: IconButton,
};

export const Accept = {
  args: {
    remove: false,
    children: <MdCheck />,
  },
};

export const Close = {
  args: {
    remove: true,
    children: <MdClose />,
  },
};
