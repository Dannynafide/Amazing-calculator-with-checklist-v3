import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  /**
   * Button color change
   */
  className?: string;
  /**
   * Button label
   */
  innerRef: React.LegacyRef<HTMLInputElement>;
  /**
   * Icon at the end of the button
   */
  value: string;
  /**
   * Click handler
   */
  onChange: () => void;
}

export default function Input({
  className,
  innerRef,
  value,
  onChange = () => {},
  ...props
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${className}`}
      type="text"
      ref={innerRef}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
