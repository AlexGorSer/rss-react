import React from 'react';
import { CheckboxInput } from './Input.components/CheckboxInput';
import { DateInput } from './Input.components/DataInput';
import { FileUpload } from './Input.components/FileUpload';
import { SelectInput } from './Input.components/SelectInput';
import { SwitcherInput } from './Input.components/SwitcherInput';
import { TextInput } from './Input.components/TextInput';
import './Form.scss';
import { Cards } from './Cards/Cards';
import { IFormData, ISubmitData } from './IForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { addFormData } from '../../store/slice/Form.slice';

export const Form: React.FC = () => {
  const dataForm = useSelector((state: RootState) => state.form.userPost);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const image = URL.createObjectURL(data.file[0]);
    const modDate = data.date.split('-').reverse().join('-');

    const newCard: ISubmitData = {
      text: data.text,
      date: modDate,
      select: data.select,
      checkbox: data.checkbox,
      gender: data.gender,
      file: image,
    };

    dispatch(addFormData(newCard));
    reset();
  };

  return (
    <section className="form container">
      <div className="form__wrapper">
        <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
          <TextInput register={register} errors={errors} />
          <DateInput register={register} errors={errors} />
          <SelectInput register={register} errors={errors} />
          <SwitcherInput register={register} errors={errors} />
          <FileUpload register={register} errors={errors} />
          <CheckboxInput register={register} errors={errors} />
          <button type="submit">Submit</button>
        </form>
        {isSubmitSuccessful && <h1>Card is created!</h1>}
      </div>
      <div className="form-cards__container">
        {dataForm.length > 0 && dataForm.map((elem, index) => <Cards key={index} {...elem} />)}
      </div>
    </section>
  );
};
