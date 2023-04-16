import React from 'react';
import { IApi } from '../IMain';
import './Modal.scss';
import SVG from '../../../assets/close.svg';
import { useDispatch } from 'react-redux';
import { emptyModal } from '../../../store/slice/Main.slice';

export const ModalCard: React.FC<IApi> = ({
  name,
  image,
  gender,
  status,
  location,
  origin,
  species,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="modal__container" onClick={() => dispatch(emptyModal())}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close">
          <img src={SVG} alt="" className="sgv__modal" onClick={() => dispatch(emptyModal())} />
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
