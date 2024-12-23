import type { ButtonHTMLAttributes, ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';

type FormDataField = {
  value: string;
  isValid: boolean;
  showError: boolean;
};

export type FormData = {
  [name: string]: FormDataField;
};

export type FormValidation = {
  [name: string]: RegExp;
};

type RadioInputOption = {
  id: number;
  value: string;
  text: string;
};

export type FormField = {
  id: number;
  name: string;
  label: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  required: boolean;
  regex: RegExp;
  errorText: string;
  options?: RadioInputOption[];
};

type FormSection = {
  id: number;
  title: string;
  fields: FormField[];
};

export type FormSchema = FormSection[];

export type ButtonSchema = {
  id: number,
  value: string,
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'],
};

export type HandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void;

export type HandleSubmit = (e: FormEvent<HTMLFormElement>) => void;

export type TextInputProps = {
  name: string;
  value: string;
  required: boolean;
  handleInputChange: HandleInputChange;
  showError: boolean;
};

export type RadioInputProps = Omit<TextInputProps, 'showError'> & {
  checked: boolean;
};

export type ButtonsProps = {
  isFormValid: boolean;
  buttons: ButtonSchema[];
};

export type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  value: string;
  disabled: boolean;
};

export type FieldProps = {
  label: string;
  name: string;
  value: string;
  errorText: string;
  showError: boolean;
  handleInputChange: HandleInputChange;
  required: boolean;
};

export type FieldSetProps = Omit<FieldProps, 'errorText' | 'showError'> & {
  options: RadioInputOption[];
};

export type SectionProps = {
  section: FormSection;
  handleInputChange: HandleInputChange;
  formData: FormData;
};