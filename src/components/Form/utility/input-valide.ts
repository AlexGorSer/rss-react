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
