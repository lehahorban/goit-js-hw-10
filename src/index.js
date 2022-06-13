import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;
const input = document.querySelector("#search-box")
const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")
console.log(input);
console.log(countryList);
console.log(countryInfo);

// const contryUrl = fetch("https://restcountries.com/v3.1/name/{name}").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// console.log(contryUrl);

function fetchCountries() {
    return fetch("https://restcountries.com/v3.1/name/{name}").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
fetchCountries()