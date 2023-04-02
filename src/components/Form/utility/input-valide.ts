// handleSubmit(e: React.MouseEvent) {
//   e.preventDefault();
//   const text = this.formRef.current?.text.value;
//   const date = this.formRef.current?.date.value;
//   const select = this.formRef.current?.select.value;
//   const gender = this.formRef.current?.gander.value;
//   const file = this.formRef.current?.file.value;
//   const checkbox = this.formRef.current?.checkbox.checked;

//   const textValid = this.validateName(text);
//   const dateValid = this.validateDate(date);
//   const selectValid = this.validateSelect(select);
//   const genderValid = this.validateGender(gender);
//   const fileValid = this.validateFile(file);
//   const checkboxValid = this.validateCheckbox(checkbox);

//   if (textValid && dateValid && selectValid && genderValid && fileValid && checkboxValid) {
// const files = this.formRef.current!.file.files[0];
// const image = URL.createObjectURL(files);
// const modDate = date.split('-').reverse().join('-');

// const obj: IFormData = {
//   text: text,
//   date: modDate,
//   country: select,
//   consent: checkbox,
//   gender: gender,
//   file: image,
// };

//     this.setState({ cardArray: [...this.state.cardArray, obj] });
//     this.resetForm();
//     this.setState({ successCreate: true });
//     setTimeout(() => {
//       this.setState({ successCreate: false });
//     }, 2000);
//   }
// }

export const validateName = (name: string) => {
  if (name.length < 3) {
    return 'minimal 3 symbols';
  } else if (/[0-9\.,-\/#!$%' "^&*;:{}=_`~()-]/.test(name)) {
    return 'wrong name';
  } else if (!/^[A-ZА-Я]/.test(name)) {
    return 'start from uppercase';
  }
  return true;
};

export const validateDate = (date: string) => {
  if (date === '') {
    return 'input date';
  }
  const dateArr = date.split('-');

  if (+dateArr[0] > 2000) {
    return 'wrong year';
  }
  return true;
};

export const validateSelect = (select: string) => {
  if (select === 'select') {
    return 'Select country';
  }

  return true;
};

export const validateFile = (file: FileList) => {
  const arr = ['image/jpeg', 'image/png', 'image/gif'];
  if (!arr.includes(file[0].type)) {
    return 'select image jpeg, gif, png ';
  }
  return true;
};
