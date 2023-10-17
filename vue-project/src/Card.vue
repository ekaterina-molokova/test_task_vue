<script setup>
    defineProps(['city_name', 'country_name', 'population', 'coordinates', 'class']);
</script>

<template>
    <div class="card">
        <h2 class="city_name_card">{{ city_name }}</h2>
        <h3 class="country_name">{{ country_name }}</h3>
        <h4 class="population"> {{ population }}</h4>
        <h5 class="coordinates">{{ coordinates }}</h5>
    </div>
</template>

<style scoped>

.city_name_card, .country_name, .population, .coordinates  {
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

.clicked {
  border: 2px solid #e96acf;
  padding: 10px;
  color: #e96acf;
}

.card {
  margin: 0;
  padding: 20px 0;
  box-sizing: border-box;
}
</style>