import React from 'react';
import CheckboxInput from './Input.components/CheckboxInput';
import DateInput from './Input.components/DataInput';
import FileUpload from './Input.components/FileUpload';
import SelectInput from './Input.components/SelectInput';
import SwitcherInput from './Input.components/SwitcherInput';
import TextInput from './Input.components/TextInput';
import './Form.scss';
import { IFormData } from './IForm';
import { formData } from './../../data/formData';

interface ITest {
  cardArray: IFormData[];
}

class Form extends React.Component {
  state: ITest = {
    cardArray: formData,
  };
  formRef: React.RefObject<HTMLFormElement> = React.createRef();

  handleSubmit(e: React.MouseEvent) {
    e.preventDefault();

    console.log(this.formRef.current?.text.value);
    console.log(this.formRef.current?.date.value);
    console.log(this.formRef.current?.select.value);
    console.log(this.formRef.current?.gander.value);
    console.log(this.formRef.current?.file.value);
    console.log(this.formRef.current?.checkbox.checked);
  }

  render(): React.ReactNode {
    return (
      <section className="form container">
        <div className="form__wrapper">
          <form ref={this.formRef} className="form__container">
            <TextInput />
            <DateInput />
            <SelectInput />
            <SwitcherInput />
            <FileUpload />
            <CheckboxInput />
            <button type="submit" onClick={(e) => this.handleSubmit(e)}>
              Submit
            </button>
          </form>
        </div>
        <div className="form-cards__container">
          {this.state.cardArray.map((elem, index) => (
            <div key={index}>
              <p>{elem.text}</p>
              <p>{elem.date}</p>
              <p>{elem.country}</p>
              <p>{elem.gender}</p>
              <p>{elem.file}</p>
              <p>{elem.consent}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Form;
