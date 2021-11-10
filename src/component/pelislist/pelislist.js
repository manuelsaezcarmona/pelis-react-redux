import { useEffect, useState } from 'react';
import { AddPeliForm } from './addpeli';
import { useSelector, useDispatch } from 'react-redux';
import * as stockPelis from '../../api/peli-service';
import { ItemList } from './itemlist';
import * as action from '../../redux/pelis/action-creators';

export function PelisList() {
  //const [pelisState, pelissetState] = useState([]);

  const { pelis } = useSelector((state) => state.pelisStore);
  const dispatch = useDispatch();
  useEffect(() => dispatch(action.loadPelis()), [dispatch]);

  /*  const addPeli = (peli) => {
    const newArrPelis = [...pelisState, peli];
    stockPelis.setPelis(newArrPelis).then(() => {
      pelissetState(newArrPelis);
    });
  }; */

  const htmlPelis = pelis.map((peli) => (
    <ItemList key={peli.year} item={peli} />
  ));

  const template = (
    <>
      <ul className="film-list">{htmlPelis}</ul>
      <AddPeliForm />
    </>
  );

  return template;
}
