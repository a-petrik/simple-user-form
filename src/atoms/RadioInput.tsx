import type { RadioInputProps } from '../types/formTypes';

function RadioInput({ name, value, checked, handleInputChange, required }: RadioInputProps) {
  return (
    <>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        required={required}
        aria-required={required}
        checked={checked}
        onChange={handleInputChange}
        className="form__section__fieldset__list__item__radioInput"
      />
    </>
  );
}

export default RadioInput;