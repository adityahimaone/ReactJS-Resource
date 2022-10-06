import classNames from 'classnames';

interface IButton {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  full?: boolean;
  onClick?: () => void;
}

function Button({ label, variant, size, full, onClick }: IButton): JSX.Element {
  const btnStyle = classNames('px-4 py-2 rounded-md font-semibold', {
    'bg-blue-500 text-white': variant === 'primary',
    'bg-white text-blue-500 border border-blue-500': variant === 'secondary',
    'text-xs': size === 'small',
    'text-sm': size === 'medium',
    'text-base': size === 'large',
    'w-full': full,
  });

  return (
    <button type="button" className={btnStyle} onClick={onClick}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  full: false,
  onClick: () => {},
};

export default Button;
