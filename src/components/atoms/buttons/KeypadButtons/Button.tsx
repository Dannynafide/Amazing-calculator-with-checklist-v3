import {ReactElement} from 'react';

import RippleEffect from 'components/atoms/RippleEffect/RippleEffect';
import styles from './button.module.scss';

interface ButtonProps {
  /**
   * Button contents
   */
  children: ReactElement | string;
  /**
   * Click handler
   */
  onClick: () => void;
  /**
   * Button type
   */
  className?: string;
}

function ButtonTemplate({children, onClick, className}: ButtonProps) {
  return (
    <button
      className={`${styles.keypad_btn} ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
      <RippleEffect duration={1000} />
    </button>
  );
}

export function BracketBtn({children, onClick}: ButtonProps) {
  return (
    <ButtonTemplate onClick={onClick} className={styles.bracket_btn}>
      {children}
    </ButtonTemplate>
  );
}

export function DigitBtn({children, onClick}: ButtonProps) {
  return (
    <ButtonTemplate onClick={onClick} className={styles.digit_btn}>
      {children}
    </ButtonTemplate>
  );
}

export function OperatorBtn({children, onClick, className}: ButtonProps) {
  return (
    <ButtonTemplate
      onClick={onClick}
      className={`${styles.operator_btn} ${className}`}
    >
      {children}
    </ButtonTemplate>
  );
}
