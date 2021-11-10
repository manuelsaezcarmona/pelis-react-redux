import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PeliModel from '../../models/peli';
import * as action from '../../redux/pelis/action-creators';

export function AddPeliForm() {
  const [newPelistate, setNewPeliState] = useState(new PeliModel());
  const dispatch = useDispatch();
  const addPeli = (peli) => {
    console.log(peli);
    dispatch(action.addPeli(peli));
  };

  // El handle Change es el que se va a encargar de manera reactiva de recoger los valores
  // Pero no solo los valores al hecer el submit, sino cuando cambie en nuestro input.
  const handleChange = (evt, control) => {
    setNewPeliState({ ...newPelistate, [control]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addPeli(newPelistate);
    setNewPeliState(new PeliModel());
  };

  const template = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="peli-year">Año de Estreno</label>
      <input
        type="text"
        name="peliyear"
        id="year"
        value={newPelistate.year}
        onChange={(ev) => handleChange(ev, 'year')}
      />
      <label htmlFor="peli-title">Titulo de la pelicula</label>
      <input
        type="text"
        name="peli-title"
        id="title"
        value={newPelistate.title}
        onChange={(ev) => handleChange(ev, 'title')}
      />
      <label htmlFor="peli-country">Pais de Producción</label>
      <input
        type="text"
        name="peli-country"
        id="country"
        value={newPelistate.country}
        onChange={(ev) => handleChange(ev, 'country')}
      />
      <button type="submit">Añadir Peli</button>
    </form>
  );

  return template;
}
