import {BASE_URL, FILTER} from './constants';

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


// import refs from './refs';
// const inputQuery = refs.input.value;
// function fetchCountries(name) {
//    return  fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;capital;population;languages`)
//         .then(response => {
//         return response.json();
//     })
// }

// export { fetchCountries };

