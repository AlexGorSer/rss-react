import { MutableRefObject } from 'react';
import { IApi } from '../Main/IMain';

const URL = 'https://rickandmortyapi.com/api/character/?name=';

export const getData = async (
  callback: React.Dispatch<React.SetStateAction<IApi[]>>,
  input: MutableRefObject<string | undefined>
) => {
  callback([]);
  const resp = await fetch(`${URL}${input.current}`);
  resp.status !== 404 ? resp.json().then((data) => callback(data.results)) : callback([]);
};
