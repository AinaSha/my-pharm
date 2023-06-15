import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './style.scss';
import { InPharmacies } from '../../types/Types';
import { useDispatch } from 'react-redux';
import { setActiveCoordinate } from '../../store/productsReducer';

const ListCoordinat = () => {
  const { inPharmacies } = useSelector((state: RootState) => state.ProductsReducer);
  const dispatch = useDispatch();

  const setCoordinate = (id: number) => {
    const arr = [];
    arr.push(Number(inPharmacies[id].latitude));
    arr.push(Number(inPharmacies[id].longitude));
    dispatch(setActiveCoordinate(arr));
  };

  const hendleMapList = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let id = 0;
    if ((e.target as HTMLElement).id) {
      id = Number((e.target as HTMLElement).id);
      setCoordinate(id);
    } else {
      id = Number((e.target as HTMLElement)?.parentElement?.id);
      setCoordinate(id);
    }
  };

  return (
    <ul className="map-list" onClick={hendleMapList}>
      {inPharmacies.map((el: InPharmacies, id: number) => {
        return (
          <li key={el.id + 'key'} id={`${id}`}>
            <p>{el.name}</p>
            <p>
              {el.city} {el.address}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListCoordinat;
