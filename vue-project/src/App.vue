<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->
    <!-- </div> -->
  <!-- </header> -->

  <!-- <main> -->
    <!-- <TheWelcome /> -->
  <!-- </main> -->
  <div>
    <header class="header">
        <h1 class="main_title">Me * Vue</h1>
        <h3 class="main_subtitle">Kate Molokova &copy;</h3>
    </header>
    <main class="main">
        <section class="cities">
            <form class='search_container'>
                <fieldset class='search_fieldset'>
                  <input class="search_field"
                         placeholder="Search..."
                         type='text'
                         required
                  />
                </fieldset>
                <button class='search_clear-button invisible' type='button'>X</button>
              </form>
            <template class="template">
                <div class="cities__element">
                    <button class="city_name"></button>
                </div>
            </template> 
        </section>
        <section class="cards_holder">
            <template class="template_city">
                <div class="card">
                    <h2 class="city_name_card"></h2>
                    <h3 class="country_name"></h3>
                    <h4 class="population"></h4>
                    <h5 class="coordinates"></h5>
                </div>
            </template>
        </section>
    </main>
  </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* @media (min-width: 1024px) { */
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
/* } */

.header {
    display: flex;
    width: 30%;
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
    border-right: 3px solid #15dfa3;
    min-width: 30%;
    margin: auto;
    padding: 0;
    box-sizing: border-box;
}

.cities__element {
    margin: 10px auto;
    padding: 0;
    box-sizing: border-box;
}

.city_name, .city_name_card, .country_name, .population, .coordinates  {
    text-align: center;
    margin: 0 auto;
    padding: 0 0 5px;
    font-weight: 500;
    color: #e96acf;
    border: none;
    width: 100%;
    background-color: transparent;
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

.clicked {
    border: 2px solid #e96acf;
    padding: 10px;
    color: #e96acf;
}

.cards_holder {
    width: 100%;
}

.card {
    margin: 0;
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 2px solid #15dfa3;
}

.search_container {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 10px;
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
