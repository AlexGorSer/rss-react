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
    const text = this.formRef.current?.text.value;
    const date = this.formRef.current?.date.value;
    const select = this.formRef.current?.select.value;
    const gender = this.formRef.current?.gander.value;
    const file = this.formRef.current?.file.value;
    const checkbox = this.formRef.current?.checkbox.checked;

    const textValid = this.validateName(text);
    const dateValid = this.validateDate(date);
    const selectValid = this.validateSelect(select);
    const genderValid = this.validateGender(gender);
    const fileValid = this.validateFile(file);
    const checkboxValid = this.validateCheckbox(checkbox);

    if (textValid && dateValid && selectValid && genderValid && fileValid && checkboxValid) {
      const files = this.formRef.current!.file.files[0];
      const image = URL.createObjectURL(files);
      const obj: IFormData = {
        text: text,
        date: date,
        country: select,
        consent: checkbox,
        gender: gender,
        file: image,
      };

      this.setState({ cardArray: [...this.state.cardArray, obj] });
      this.resetForm();
    }
  }

  validateName(name: string) {
    if (name.length < 3) {
      this.setState({ textInputMessage: 'minimal 3 symbols' });
      return false;
    }
    if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
      this.setState({ textInputMessage: 'wrong name' });
      return false;
    }
    if (!/^[A-ZА-Я]/.test(name)) {
      this.setState({ textInputMessage: 'start from uppercase' });
      return false;
    }
    return true;
  }

  validateDate(date: string) {
    if (date === '') {
      this.setState({ dateInput: 'input date' });
      return false;
    }
    const dateArr = date.split('-');

    if (+dateArr[0] > 2000) {
      this.setState({ dateInput: 'wrong year' });
      return false;
    }
    return true;
  }

  validateSelect(select: string) {
    if (select === 'select') {
      this.setState({ selectInput: 'Select country' });
      return false;
    }
    return true;
  }

  validateGender(gender: string) {
    if (gender === '') {
      this.setState({ switcherInput: 'select gender' });
      return false;
    }
    return true;
  }
  validateFile(file: string) {
    if (file === '') {
      this.setState({ fileUpload: 'select file' });
      return false;
    }
    return true;
  }
  validateCheckbox(checkbox: boolean) {
    if (!checkbox) {
      this.setState({ checkboxInput: 'Agree consent to my personal data' });
      return false;
    }
    return true;
  }
  resetForm() {
    this.setState({
      textInputMessage: '',
      dateInput: '',
      selectInput: '',
      switcherInput: '',
      fileUpload: '',
      checkboxInput: '',
    });
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
              <img src={elem.file} alt="" />
              <p>{elem.consent}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Form;
