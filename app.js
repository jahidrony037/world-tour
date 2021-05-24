fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => displayCountries(data))

function displayCountries(countries) {
    const countriesDiv = document.getElementById("countries");
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");

    //     countryDiv.className = "country";

    //     // const countryName = document.createElement("h3");
    //     // countryName.innerText = country.name;
    //     // displayDiv.appendChild(countryName);

    //     // const capitalName = document.createElement("p");
    //     // capitalName.innerText = country.capital;
    //     // displayDiv.appendChild(capitalName);

    //     const countryInfo = `
    //     <h3 class="country-name">${country.name}</h3>
    //     <p>${country.capital}</p>

    //     `
    //     countryDiv.innerHTML = countryInfo;

    //     countriesDiv.appendChild(countryDiv);


    // }

    countries.forEach(country => {

        const countryDiv = document.createElement("div");
        countryDiv.className = "country";

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="displayCountryDetails('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => randerCountryInfo(data[0]))
}

const randerCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById("countryDetails");
    countryDiv.innerHTML =
        `
        <h1>${country.name}</h1>
        <h2>Region: ${country.region}</h2>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <p>Language: ${country.languages[0].name}</p>

        <img src=${country.flag}>
    `
}