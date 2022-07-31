import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: JSX.IntrinsicElements['button']['type'];
};

function Button(props: ButtonProps) {
  const { children, type, onClick, disabled, className } = props;
  console.log('Button RUNNING');

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type || 'submit'} className={`${classes.button} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
  type: 'button',
};

export default React.memo(Button);
