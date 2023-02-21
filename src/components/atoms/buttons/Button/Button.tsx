import React from 'react';

import RippleEffect from 'components/atoms/RippleEffect/RippleEffect';
import styles from './button.module.scss';

interface ButtonProps {
  /**
   * Button color change
   */
  secondary?: boolean;
  /**
   * Button label
   */
  children: string;
  /**
   * Icon at the end of the button
   */
  icon?: React.ReactNode;
  /**
   * Click handler
   */
  onClick: () => void;
}

export default function Button({
  secondary = false,
  icon,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const secondBtnClass = secondary && styles.buttonSecondary;
  const IconBtnClass = icon && styles.buttonIcon;

  const Icon = icon && <span className="icon">{icon}</span>;

  return (
    <button
      className={`${styles.button} ${secondBtnClass} ${IconBtnClass}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      <span className={styles.button__content}>{children}</span>
      {Icon}
      <RippleEffect />
    </button>
  );
}
