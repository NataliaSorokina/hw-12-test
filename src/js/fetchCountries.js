// // HTTP-запрос
// // Напиши функцию fetchCountries(name) которая делает HTTP - запрос и возвращает
// // промис с массивом стран - результатом запроса.Вынеси её в отдельный файл
// // fetchCountries.js и сделай именованный экспорт.
// function fetchCountries(name) {
//     fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;languages')
//         .then(response => {
//         return response.json();
//     })
//         .then(country =>
//         {
//             console.log(country);
//     })
    //     .catch(error => {
    //     console.log(error);
    // }) 
// }

// function fetchCountries(name) {
//     fetch('https://restcountries.eu/rest/v2/name?fields=flag;name;capital;population;languages')
//         .then(response => {
//         return response.json();
//     })
//     .then(name => {
//         console.log(name);
//         const markup = countryCardTemplate(name);
//         console.log(markup);
//     })
//     .catch(error => {
//         console.log(error);
//     }) 
// }
// https://restcountries.eu/rest/v2/name?fields=flag;name;capital;population;languages
// https://restcountries.eu/rest/v2/all?fields=name;capital;currencies

// fetchCountries('eesti');

// fetch('https://restcountries.eu/rest/v2/name/united')
//         .then(response => {
//         return response.json();
//     })
//         .then(country =>
//         {
//             console.log(country);
//     })
//     .catch(error => {
//         console.log(error);
//     }) 

// https://restcountries.eu/rest/v2/name/{name}