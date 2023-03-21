const loadCountries = () =>{
  fetch(`https://restcountries.com/v3.1/all`)
  .then (res => res.json())
  .then(data => displayCountries(data))
};

const displayCountries = countries =>{

  
  const allCountriesHTML = countries.map(country => getCountryHTML(country));
  const container = document.getElementById('countries');
  container.innerHTML = allCountriesHTML.join(' ');
  };
  
  const getCountryHTML = ({name, flags, area}) =>{
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area: ${area} </p>
    <img src="${flags.png}">
    </div>
    `;
  }

  loadCountries();