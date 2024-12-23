import clsx from 'clsx';
import type { ButtonProps } from '../types/formTypes';

function Button({ type, value, disabled}: ButtonProps) {
  return (
    <button
      className={clsx('form__buttons__button', {
        'form__buttons__button--primary': type === 'submit',
        'form__buttons__button--secondary': type !== 'submit',
      })}
      type={type}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Button;