import { useState } from 'react';
import PeliModel from '../../models/peli';

export function AddPeliForm({ addPeli }) {
  const [newPelistate, setNewPeliState] = useState(new PeliModel());
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
        onChange={(ev) => handleChange(ev, 'year')}
      />
      <label htmlFor="peli-title">Titulo de la pelicula</label>
      <input
        type="text"
        name="peli-title"
        id="title"
        onChange={(ev) => handleChange(ev, 'title')}
      />
      <label htmlFor="peli-country">Pais de Producción</label>
      <input
        type="text"
        name="peli-country"
        id="country"
        onChange={(ev) => handleChange(ev, 'country')}
      />
      <button type="submit">Añadir Peli</button>
    </form>
  );

  return template;
}
