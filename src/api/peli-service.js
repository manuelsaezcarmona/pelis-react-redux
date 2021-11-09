import { PELIS } from '../models/peli-data';

export const stockName = 'peliStock';

export async function getpelis() {
  /* return localStorage.getItem(storeName)
      ? JSON.parse(localStorage.getItem(storeName))
      : TASKS; */
  const data = localStorage.getItem(stockName);
  let result = [];
  if (data) {
    result = JSON.parse(data);
  } else {
    result = PELIS;
    setPelis(result);
  }
  return result;
}

export async function setPelis(pelis) {
  localStorage.setItem(stockName, JSON.stringify(pelis));
}

export async function removeTasks() {
  localStorage.removeItem(stockName);
}
