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

interface IForm {
  cardArray: IFormData[];
  textInputMessage: string;
  dateInput: string;
  selectInput: string;
  switcherInput: string;
  fileUpload: string;
  checkboxInput: string;
}

class Form extends React.Component {
  state: IForm = {
    cardArray: formData,
    textInputMessage: '',
    dateInput: '',
    selectInput: '',
    switcherInput: '',
    fileUpload: '',
    checkboxInput: '',
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
    this.formRef.current?.reset();
  }

  render(): React.ReactNode {
    return (
      <section className="form container">
        <div className="form__wrapper">
          <form ref={this.formRef} className="form__container">
            <TextInput textInputMessage={this.state.textInputMessage} />
            <DateInput dateInput={this.state.dateInput} />
            <SelectInput selectInput={this.state.selectInput} />
            <SwitcherInput switcherInput={this.state.switcherInput} />
            <FileUpload fileUpload={this.state.fileUpload} />
            <CheckboxInput checkboxInput={this.state.checkboxInput} />
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
