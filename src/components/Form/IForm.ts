export interface IFormData {
  text: string;
  date: string;
  country: string;
  consent: boolean;
  gender: string;
  file: string;
}

export interface IForm {
  cardArray: IFormData[];
  textInputMessage: string;
  dateInput: string;
  selectInput: string;
  switcherInput: string;
  fileUpload: string;
  checkboxInput: string;
  successCreate: boolean;
}
