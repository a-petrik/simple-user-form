import clsx from 'clsx';
import type { TextInputProps } from '../types/formTypes';

function TextInput({ name, value, required, handleInputChange, showError }: TextInputProps) {
  return (
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      required={required}
      onChange={handleInputChange}
      className={clsx('form__section__field__textInput', {
        'form__section__field__textInput--small': name === 'age',
        'form__section__field__textInput--error': showError,
      })}
    />
  );
}

export default TextInput;