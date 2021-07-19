import './css/styles.css';
import debounce from 'lodash.debounce';
// import Notify from 'notiflix';
import Notiflix from "notiflix";
import refs from './js/refs.js';
import API from './js/api-service';
import countryCardTemplate from './templates/country-card.hbs';
import countryListTemplate from './templates/country-list.hbs';


const DEBOUNCE_DELAY = 300; 
refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function renderCountryCard(countries) {
    refs.card.innerHTML = '';
    refs.list.innerHTML = '';

    if (countries.length === 1) {
        const cardMarkup = countryCardTemplate(countries);
        refs.card.innerHTML = cardMarkup;
    } else if (countries.length >= 2 && countries.length <= 10) {
        const listMarkup = countryListTemplate(countries);
        refs.list.innerHTML = listMarkup;
    }  else if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
 }
 
function onFetchError(error) { 
    // console.log(error);
    // console.log('This is catch!');
    Notiflix.Notify.failure('Oops, there is no country with that name');
}
    
function onSearch(event) {
    event.preventDefault;
    
    let inputQuery = refs.input.value;
    if (inputQuery === '') {
        return;
    }      
    API.fetchCountries(inputQuery)
        .then(renderCountryCard)
        .catch(onFetchError)           
}



// function fetchCountries(name) {
//     const url = `https://restcountries.eu/rest/v2/name/${name}?fields=flag;name;capital;population;languages`;
//    return  fetch(url)
//        .then(response => {
//             if (!response.ok) {
//       throw new Error(response.status);
//     }
//             return response.json();
//     })
// }

// function renderCountryCard(country) {
//     const cardMarkup = countryCardTemplate(country);
//     refs.card.innerHTML = cardMarkup;
//  }

// function renderCountryList(country) {
//     const listMarkup = countryListTemplate(country);
//     refs.list.innerHTML = listMarkup;
// }

// function onSearch(event) {
//     event.preventDefault;
    
//     const inputQuery = refs.input.value;
//     fetchCountries(inputQuery)
//         // .then(res => {
//         //     if (res.length = 1) {
//         //         renderCountryCard();
//         //     }
//         //     if (res.length > 1 && res.length < 10) {
//         //         renderCountryList();
//         //     }
//         // })         
//         .catch(error => {
//             console.log(error);
//             Notiflix.Notify.Failure('Oops, there is no country with that name')
//         })
//  }

