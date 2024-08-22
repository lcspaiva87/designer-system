import React from 'react';
import { FieldElement, FieldName, FieldValues } from 'react-hook-form';


interface FormFieldProps<TFieldValues extends FieldValues> {
  name: FieldName<TFieldValues>;
  element: FieldElement<TFieldValues>;
  label: string;
}

const FormField = <TFieldValues extends FieldValues>({ name, element, label }: FormFieldProps<TFieldValues>) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {React.cloneElement(element as any, { name })}
    </div>
  );
};

export default FormField;