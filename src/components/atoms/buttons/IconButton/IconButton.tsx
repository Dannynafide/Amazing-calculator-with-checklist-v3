import React from 'react';

import RippleEffect from 'components/atoms/RippleEffect/RippleEffect';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  /**
   * Button label
   */
  children: React.ReactNode;
  /**
   * Click handler
   */
  onClick: () => void;
  /**
   * Button type - differs in color
   */
  remove?: boolean;
  /**
   *
   */
  className?: string;
}

export default function IconButton({
  children,
  onClick,
  remove = false,
  className = '',
}: IconButtonProps) {
  const removeClass = remove && styles.remove;

  return (
    <button
      className={`${styles.buttonIcon} ${removeClass} ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
      <RippleEffect />
    </button>
  );
}
