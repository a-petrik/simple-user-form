import { memo } from 'react';
import RadioInput from '../atoms/RadioInput';
import RequiredIndicator from '../atoms/RequiredIndicator';
import type { FieldSetProps } from '../types/formTypes';

const FieldSet = memo(function FieldSet({ label, name, value, handleInputChange, options, required }: FieldSetProps) {
  return (
    <fieldset className="form__section__fieldset">
      <legend className="form__section__fieldset__title">
        {label} {required && <RequiredIndicator />}
      </legend>
      <ul className="form__section__fieldset__list">
        {options.map((option) => (
          <li key={option.id} className="form__section__fieldset__list__item">
            <RadioInput
              name={name}
              checked={option.value === value}
              required={required}
              value={option.value}
              handleInputChange={handleInputChange}
            />
            <label className="form__section__fieldset__list__item__label" htmlFor={option.value}>{option.text}</label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
});

export default FieldSet;