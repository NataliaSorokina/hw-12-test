import './css/styles.css';
import debounce from 'lodash.debounce';
// import Notify from 'notiflix';
import Notiflix from "notiflix";
import refs from './js/refs.js';
import API from './js/api-service';
import countryCardTemplate from './templates/country-card.hbs';
import countryListTemplate from './templates/country-list.hbs';
// import { name } from 'commander';



const DEBOUNCE_DELAY = 300; 
refs.input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


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

function renderCountryCard(name) {
    const cardMarkup = countryCardTemplate(name);
    refs.card.innerHTML = cardMarkup;
 }

function renderCountryList(name) {
    const listMarkup = countryListTemplate(name);
    refs.list.innerHTML = listMarkup;
}
 
function onFetchError(error) {
    // throw new Error(response.status);
    console.log(error);
    console.log('This is catch!');
    Notiflix.Notify.failure('Oops, there is no country with that name');
}
    


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
//         .then(renderCountryList)
//         .catch(error => {
//             console.log(error);
//             Notiflix.Notify.Failure('Oops, there is no country with that name')
//         })
//  }


function onSearch(event) {
    event.preventDefault;
    
    let inputQuery = refs.input.value;
    if (inputQuery === '') {
        return;
    }      
    API.fetchCountries(inputQuery)
        .then(renderCountryCard)
        .catch(onFetchError)
    //     (response) => {
    //         // console.log(response.length)
    //   if (response.length === 1) {
    //       renderCountryCard      }
    // //   if (response.length > 1 && response.length < 10) {
    // //       renderCountryList;
    // //         }
    // })
        //  .catch(onFetchError)
        
            
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