const loadCountries = async () =>{
  const URL = `https://restcountries.com/v3.1/all
  `
  try{
    const res = await fetch(URL)
    const data = await res.json()
    displayCountries(data);
  }
  catch(error){
    console.log(error)
  }
};

const displayCountries = countries =>{
console.log(countries[0]);

const allCountriesHTML = countries.map(country => getCountryHTML(country));
const container = document.getElementById('countries');
container.innerHTML = allCountriesHTML.join(' ');
};

// orignal 
// const getCountryHTML = country =>{
//   return `
//   <div class="country">
//   <h2>${country.name.common}</h2>
//   <img src="${country.flags.png}">
//   </div>
//   `;
// }


// const getCountryHTML = country =>{
//   // option 1 destructing 
//   const {name, flags} = country
//   return `
//   <div class="country">
//   <h2>${name.common}</h2>
//   <img src="${flags.png}">
//   </div>
//   `;
// };


const getCountryHTML = ({name, flags, area, region}) =>{
  // option 2 destructing 
  return `
  <div class="country">
  <h2>${name.common}</h2>
  <p>Area: ${area} </p>
  <p>Region: ${region} </p>
  <img src="${flags.png}">
  </div>
  `;
};


loadCountries()