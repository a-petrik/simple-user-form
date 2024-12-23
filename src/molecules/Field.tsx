import { memo } from 'react';
import RequiredIndicator from '../atoms/RequiredIndicator';
import TextInput from '../atoms/TextInput';
import type { FieldProps } from '../types/formTypes';

const Field = memo(function Field({ label, name, value, errorText, showError, handleInputChange, required }: FieldProps) {
  return (
    <div className="form__section__field">
        <label htmlFor={name} className="form__section__field__label">
          {label} {required && <RequiredIndicator />}
        </label>
        <TextInput
          name={name}
          value={value}
          required={required}
          handleInputChange={handleInputChange}
          showError={showError}
        />
        <div id={`${name}-error`} className="form__section__field__errorText" role="alert">
          {showError && errorText}
        </div>
    </div>
  );
});

export default Field;