import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormData } from '../IForm';

export interface IFormProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
}
