import React from 'react';
import CheckboxInput from './Input.components/CheckboxInput';
import DateInput from './Input.components/DataInput';
import FileUpload from './Input.components/FileUpload';
import SelectInput from './Input.components/SelectInput';
import SwitcherInput from './Input.components/SwitcherInput';
import TextInput from './Input.components/TextInput';
import './Form.scss';
import { IForm, IFormData } from './IForm';
import Cards from './Cards/Cards';

class Form extends React.Component {
  state: IForm = {
    cardArray: [],
    textInputMessage: '',
    dateInput: '',
    selectInput: '',
    switcherInput: '',
    fileUpload: '',
    checkboxInput: '',
    successCreate: false,
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
      const modDate = date.split('-').reverse().join('-');

      const obj: IFormData = {
        text: text,
        date: modDate,
        country: select,
        consent: checkbox,
        gender: gender,
        file: image,
      };

      this.setState({ cardArray: [...this.state.cardArray, obj] });
      this.resetForm();
      this.setState({ successCreate: true });
      setTimeout(() => {
        this.setState({ successCreate: false });
      }, 2000);
    }
  }

  validateName(name: string) {
    if (name.length < 3) {
      this.setState({ textInputMessage: 'minimal 3 symbols' });
      return false;
    } else if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
      this.setState({ textInputMessage: 'wrong name' });
      return false;
    } else if (!/^[A-ZА-Я]/.test(name)) {
      this.setState({ textInputMessage: 'start from uppercase' });
      return false;
    }
    this.setState({ textInputMessage: '' });
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
    this.setState({ dateInput: '' });
    return true;
  }

  validateSelect(select: string) {
    if (select === 'select') {
      this.setState({ selectInput: 'Select country' });
      return false;
    }
    this.setState({ selectInput: '' });
    return true;
  }

  validateGender(gender: string) {
    if (gender === '') {
      this.setState({ switcherInput: 'select gender' });
      return false;
    }
    this.setState({ switcherInput: '' });
    return true;
  }

  validateFile(file: string) {
    if (file === '') {
      this.setState({ fileUpload: 'select file' });
      return false;
    }
    this.setState({ fileUpload: '' });
    return true;
  }

  validateCheckbox(checkbox: boolean) {
    if (!checkbox) {
      this.setState({ checkboxInput: 'Agree consent to my personal data' });
      return false;
    }
    this.setState({ checkboxInput: '' });
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
          {this.state.successCreate && <h1>Card is created!</h1>}
        </div>
        <div className="form-cards__container">
          {this.state.cardArray.map((elem, index) => (
            <Cards key={index} {...elem} />
          ))}
        </div>
      </section>
    );
  }
}

export default Form;
