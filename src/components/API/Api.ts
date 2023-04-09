import { IApi } from '../Main/IMain';

const URL = 'https://rickandmortyapi.com/api/character/';

export const getData = async (
  callback: React.Dispatch<React.SetStateAction<IApi[]>>,
  input: string | number
) => {
  callback([]);
  if (typeof input === 'number') {
    const resp = await fetch(`${URL}${input}`);
    resp.status !== 404 ? resp.json().then((data) => callback([data])) : callback([]);
  } else {
    const resp = await fetch(`${URL}?name=${input}`);
    resp.status !== 404 ? resp.json().then((data) => callback(data.results)) : callback([]);
  }
};
