import './css/styles.css';
import refs from './js/refs.js';
import countries from './js/fetchCountries.js';
import countryCardTemplate from './templates/country-card.hbs';
import countryListTemplate from './templates/country-list.hbs';



// function fetchCountries(name) {
//    return  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//         .then(response => {
//         return response.json();
//     })
// }

refs.input.addEventListener('input', onSearch);

function fetchCountries(name) {
   return  fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;capital;population;languages`)
        .then(response => {
        return response.json();
    })
}

function renderCountryCard(name) {
      const markup = countryCardTemplate(name);
        console.log(markup);
        refs.card.innerHTML = markup;
 }

function onSearch(event) {
    event.preventDefault;
    fetchCountries('kazakhstan')
    .then(renderCountryCard)
        .catch(error => 
            console.log(error)
        )
 }


// refs.list.insertAdjacentHTML('beforeend', )
// const countryCardMarkup
// const countryListMarkup
// const DEBOUNCE_DELAY = 300;
// function fetchCountries(name) {
    // fetch('https://restcountries.eu/rest/v2/all?fields=flag;name;capital;population;languages')
    //     .then(response => {
    //     return response.json();
    // })
    // .then(name => {
    //     console.log(name);
    //     const markup = countryCardTemplate(name);
    //     console.log(markup);
    // })
    // .catch(error => {
    //     console.log(error);
    // }) 
// }