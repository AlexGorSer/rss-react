export interface IFormData {
  text: string;
  date: string;
  select: string;
  gender: string;
  checkbox: boolean;
  file: FileList;
}

export interface ISubmitData {
  text: string;
  date: string;
  select: string;
  gender: string;
  checkbox: boolean;
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
