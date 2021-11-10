const baseURL = 'http://localhost:3500';
const storeURL = `${baseURL}/pelis`;

export function getPelis() {
  return fetch(storeURL).then((response) => response.json());
}

export function addPeli(peli) {
  return fetch(storeURL, {
    method: 'POST',
    body: JSON.stringify(peli),
    headers: {
      'content-type': 'application/json',
    },
  }).then((resp) => resp.json());
}

//export const stockName = 'peliStock';

// export async function getpelis() {
//   /* return localStorage.getItem(storeName)
//       ? JSON.parse(localStorage.getItem(storeName))
//       : TASKS; */
//   const data = localStorage.getItem(stockName);
//   let result = [];
//   if (data) {
//     result = JSON.parse(data);
//   } else {
//     result = PELIS;
//     setPelis(result);
//   }
//   return result;
// }

// export async function setPelis(pelis) {
//   localStorage.setItem(stockName, JSON.stringify(pelis));
// }

// export async function removeTasks() {
//   localStorage.removeItem(stockName);
// }
