import { useForm } from 'react-hook-form';

export const getControl = () => {
  const { control } = useForm();
  return control;
};