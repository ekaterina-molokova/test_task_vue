const templateElement = document.querySelector(".template"); 
const elementsContainer = document.querySelector(".cities");

const citiesList = [
	{ "city_name": "Amsterdam", "country_name": "Netherlands", "population": 872757, "coordinates": { "lat": 52.3676, "lng": 4.9041 } },
	{ "city_name": "Rotterdam", "country_name": "Netherlands", "population": 650000, "coordinates": { "lat": 51.9225, "lng": 4.47917 } },
	{ "city_name": "The Hague", "country_name": "Netherlands", "population": 540000, "coordinates": { "lat": 52.0787, "lng": 4.2888 } },
	{ "city_name": "Paris", "country_name": "France", "population": 2140526, "coordinates": { "lat": 48.8566, "lng": 2.3522 } },
	{ "city_name": "Marseille", "country_name": "France", "population": 861635, "coordinates": { "lat": 43.2965, "lng": 5.3698 } },
	{ "city_name": "Lyon", "country_name": "France", "population": 515695, "coordinates": { "lat": 45.7597, "lng": 4.8422 } },
	{ "city_name": "Berlin", "country_name": "Germany", "population": 3769495, "coordinates": { "lat": 52.52, "lng": 13.405 } },
	{ "city_name": "Hamburg", "country_name": "Germany", "population": 1822445, "coordinates": { "lat": 53.5511, "lng": 9.9937 } },
	{ "city_name": "Munich", "country_name": "Germany", "population": 1471508, "coordinates": { "lat": 48.1351, "lng": 11.582 } },
	{ "city_name": "New York", "country_name": "USA", "population": 8175133, "coordinates": { "lat": 40.7128, "lng": -74.006 } },
	{ "city_name": "Los Angeles", "country_name": "USA", "population": 3792621, "coordinates": { "lat": 34.0522, "lng": -118.2437 } },
	{ "city_name": "Chicago", "country_name": "USA", "population": 2695598, "coordinates": { "lat": 41.8781, "lng": -87.6298 } },
	{ "city_name": "Moscow", "country_name": "Russia", "population": 12506468, "coordinates": { "lat": 55.7558, "lng": 37.6176 } },
	{ "city_name": "Saint Petersburg", "country_name": "Russia", "population": 5351935, "coordinates": { "lat": 59.9343, "lng": 30.3351 } },
	{ "city_name": "Novosibirsk", "country_name": "Russia", "population": 1612833, "coordinates": { "lat": 55.0084, "lng": 82.9357 } }
]

function render() { 
    const cities = citiesList
        .map(getItem)
        elementsContainer.prepend(...cities); 
}

function getItem(item) {
    const newCity = templateElement.content.cloneNode(true);
    const elementTitle = newCity.querySelector(".city_name"); 
    elementTitle.textContent = item.city_name;
    return newCity;
} 

render();