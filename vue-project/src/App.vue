<script>
import { computed } from 'vue';
import Card from './Card.vue';
import Search from './Search.vue';

export default {
    name: "App",
    methods: {
        handleClick(event) {
          this.currentCity = computed(() => {
            return this.citiesList.filter(item =>
            {
              if (item.city_name === event.target.innerHTML) {
                item.clicked = !item.clicked;
                return item.clicked ? item : '';
              } else {
                item.clicked = false;
                return '';
              }
            }
          );
        });
        },
        handleClear(event) {
          this.searchValue = '';
          this.search = [];
          this.isVisible = false;
        }
    },
    data() {
        return {
            main_title: "Me * Vue",
            main_subtitle: "Kate Molokova",
            isSearched: false,
            isClicked: false,
            isVisible: false,
            searchValue: '',
            citiesList: [
                { "city_name": "Amsterdam", "country_name": "Netherlands", "population": 872757, "coordinates": { "lat": 52.3676, "lng": 4.9041 }, "clicked": false },
                { "city_name": "Rotterdam", "country_name": "Netherlands", "population": 650000, "coordinates": { "lat": 51.9225, "lng": 4.47917 }, "clicked": false },
                { "city_name": "The Hague", "country_name": "Netherlands", "population": 540000, "coordinates": { "lat": 52.0787, "lng": 4.2888 }, "clicked": false },
                { "city_name": "Paris", "country_name": "France", "population": 2140526, "coordinates": { "lat": 48.8566, "lng": 2.3522 }, "clicked": false },
                { "city_name": "Marseille", "country_name": "France", "population": 861635, "coordinates": { "lat": 43.2965, "lng": 5.3698 }, "clicked": false },
                { "city_name": "Lyon", "country_name": "France", "population": 515695, "coordinates": { "lat": 45.7597, "lng": 4.8422 }, "clicked": false },
                { "city_name": "Berlin", "country_name": "Germany", "population": 3769495, "coordinates": { "lat": 52.52, "lng": 13.405 }, "clicked": false },
                { "city_name": "Hamburg", "country_name": "Germany", "population": 1822445, "coordinates": { "lat": 53.5511, "lng": 9.993 }, "clicked": false },
                { "city_name": "Munich", "country_name": "Germany", "population": 1471508, "coordinates": { "lat": 48.1351, "lng": 11.582 }, "clicked": false },
                { "city_name": "New York", "country_name": "USA", "population": 8175133, "coordinates": { "lat": 40.7128, "lng": -74.006 }, "clicked": false },
                { "city_name": "Los Angeles", "country_name": "USA", "population": 3792621, "coordinates": { "lat": 34.0522, "lng": -118.2437 }, "clicked": false },
                { "city_name": "Chicago", "country_name": "USA", "population": 2695598, "coordinates": { "lat": 41.8781, "lng": -87.6298 }, "clicked": false },
                { "city_name": "Moscow", "country_name": "Russia", "population": 12506468, "coordinates": { "lat": 55.7558, "lng": 37.6176 }, "clicked": false },
                { "city_name": "Saint Petersburg", "country_name": "Russia", "population": 5351935, "coordinates": { "lat": 59.9343, "lng": 30.3351 }, "clicked": false },
                { "city_name": "Novosibirsk", "country_name": "Russia", "population": 1612833, "coordinates": { "lat": 55.0084, "lng": 82.9357 }, "clicked": false }
            ],
            search: [],
            currentCity: []
        };
    },
    components: { Card, Search }
}
</script>

<template>
  <div>
    <header class="header">
        <h1 class="main_title">{{ main_title }}</h1>
        <h3 class="main_subtitle">{{ main_subtitle }}</h3>
    </header>
    <main class="main">
        <section class="cities">
            <form class='search_container'>
                <fieldset class='search_fieldset'>
                  <Search
                    class="search_field"
                    v-model:modelValue="searchValue"
                    v-model:searchArr="search"
                    v-model:isVisible="isVisible"
                  />
                </fieldset>
                <button class='search_clear-button' v-bind:class="isVisible ? '' : 'invisible'" type='button' @click="handleClear">X</button>
            </form>
            <div class="cities__element"
              v-for="({ city_name, clicked }) in citiesList"
              :key="city_name"
              @click="handleClick"
            >
            <button
              class="city_name"
              :class="clicked ? 'clicked' : ''"
            >
              {{ city_name }}
            </button>
            </div>
        </section>
        <section class="cards_holder">
          <Card
            v-if="search"
            v-for="city in search"
            :key="city.city_name"
            :city_name="city.city_name"
            :country_name="city.country_name"
            :population="city.population"
            :coordinates="city.coordinates"
            :class="card"
            />
          <Card
            v-if="currentCity"
            v-for="city in currentCity"
            :key="city.city_name"
            :city_name="city.city_name"
            :country_name="city.country_name"
            :population="city.population"
            :coordinates="city.coordinates"
            :class="card"
            />
        </section>
    </main>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 30px 0;
  box-sizing: border-box;
  color: #e96acf;
  align-items: center;
}

.main_title {
  margin: 0;
  padding: 0 50px;
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 500;
}

.main_subtitle {
  font-size: 15px;
  font-weight: 300;
}

.main {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
}

.cities {
  display: flex;
  flex-direction: column;
  min-width: 30%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.cities__element {
  margin: 10px auto;
  padding: 0;
  box-sizing: border-box;
}

.city_name  {
  text-align: center;
  margin: 0 auto;
  padding: 5px 0;
  font-weight: 500;
  color: #e96acf;
  border: none;
  width: 100%;
  background-color: transparent;
  text-transform: uppercase;
}

.city_name {
  font-size: 20px;
  text-transform: uppercase;
  color: #15dfa3;
}

.city_name:hover {
  cursor: pointer;
  color: #e96acf;
}

.city_name:active {
  border: 2px solid #e96acf;
}

.clicked {
  border: 2px solid #e96acf;
  padding: 10px;
  color: #e96acf;
}

.cards_holder {
  width: 100%;
}

.search_container {
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 0;
  box-sizing: border-box;
  border: 2px solid #15dfa3;
  border-radius: 25px;
  background-color: #FFE6FA;
  align-items: center;
}

.search_fieldset {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  border: none;
}

.search_field {
  margin: 0;
  padding: 10px;
  box-sizing:border-box;
  border-radius: 25px;
  border: none;
  width: 100%;
  background-color: transparent;
  font-weight: 500;
  font-size: 15px;
  color: #e96acf;
}

.search_field::placeholder {
  font-weight: 500;
  font-size: 15px;
  color: #e96acf;
  opacity: 0.5;
}

.search_field:focus {
  outline: #e96acf;
}

.search_clear-button {
  border: none;
  background-color: transparent;
  width: 45px;
  height: 45px;
  font-size: 20px;
  color: #e96acf;
}

.search_clear-button:hover {
  cursor: pointer;
}

.invisible {
  display: none;
}

@media screen and (min-width: 1200px) {
  .main {
    min-width: 1200px;
  }
}

@media screen and (max-width: 425px) {
  .cities {
    display: none;
  }
}
</style>
