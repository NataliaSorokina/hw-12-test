// import refs from './refs';
// const inputQuery = refs.input.value;
// function fetchCountries(name) {
//    return  fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;capital;population;languages`)
//         .then(response => {
//         return response.json();
//     })
// }

// export { fetchCountries };

const BASE_URL = 'https://restcountries.eu/rest/v2';
const FILTER = 'fields=flag;name;capital;population;languages'

function fetchCountries(name) {
    const url = `${BASE_URL}/name/${name}?${FILTER}`;
   return  fetch(url)
       .then(response => {
           console.log(response);
            if (!response.ok) {
      throw new Error(response.status);
    }
            return response.json();
    })
}

export default { fetchCountries };