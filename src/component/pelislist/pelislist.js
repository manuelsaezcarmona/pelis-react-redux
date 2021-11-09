import { useEffect, useState } from 'react';
import { AddPeliForm } from './addpeli';

import * as stockPelis from '../../api/peli-service';
import { ItemList } from './itemlist';

export function PelisList() {
  const [pelisState, pelissetState] = useState([]);

  useEffect(() => {
    stockPelis.getpelis().then((response) => {
      pelissetState(response);
    });
  }, []);

  const addPeli = (peli) => {
    const newArrPelis = [...pelisState, peli];
    stockPelis.setPelis(newArrPelis).then(() => {
      pelissetState(newArrPelis);
    });
  };

  const htmlPelis = pelisState.map((peli) => (
    <ItemList key={peli.year} item={peli} />
  ));

  const template = (
    <>
      <ul>{htmlPelis}</ul>
      <AddPeliForm addPeli={addPeli} />
    </>
  );

  return template;
}
