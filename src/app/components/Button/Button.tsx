import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps {
  children: string;
  disabled?: boolean;
}

const Button = ({ children, disabled, ...rest }: ButtonProps) => {
  const buttonClassName = clsx(styles.button, disabled && styles.disabled);

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
