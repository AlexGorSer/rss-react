import React from 'react';
import { IApi } from '../IMain';
import './Modal.scss';
import SVG from '../../../assets/close.svg';

export const ModalCard: React.FC<IApi> = ({
  name,
  image,
  setModal,
  gender,
  status,
  location,
  origin,
  species,
}) => {
  return (
    <div className="modal__container" onClick={() => setModal([])}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close">
          <img src={SVG} alt="" className="sgv__modal" onClick={() => setModal([])} />
        </div>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Location: {location.name}</p>
        <p>Origin: {origin.name}</p>
      </div>
    </div>
  );
};
