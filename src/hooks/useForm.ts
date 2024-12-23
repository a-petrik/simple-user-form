import { useCallback, useState } from 'react';
import type { HandleInputChange, FormData, HandleSubmit, FormValidation } from '../types/formTypes';
import { formSchema } from '../schema/formSchema';

const STORAGE_DATA = 'formData';

const initialFormState: FormData = {};
const validation: FormValidation = {};
formSchema.forEach((section) => {
  section.fields.forEach((field) => {
    initialFormState[field.name] = {
      value: '',
      isValid: !field.required,
      showError: false,
    };
    validation[field.name] = field.regex;
  });
});

function useForm() {
  const [formData, setFormData] = useState<FormData>(() => {
    const storageData = localStorage.getItem(STORAGE_DATA);
    if (storageData != null) {
      return JSON.parse(storageData) as FormData;
    }
    return initialFormState;
  });

  const handleInputChange: HandleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const isValid = validation[name].test(value);
      const newState: FormData = {
        ...prevState,
        [name]: {
          value: value,
          isValid: isValid,
          showError: !isValid && value !== '',
        },
      }
      localStorage.setItem(STORAGE_DATA, JSON.stringify(newState));
      return newState;
    });
  }, []);

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();
    alert('complete');
    setFormData(initialFormState);
    localStorage.removeItem(STORAGE_DATA);
  };

  return { handleSubmit, handleInputChange, formData };
}

export default useForm;