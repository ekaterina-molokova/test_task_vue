<script setup>
import App from './App.vue';
const { citiesList } = App.data();
    
const props = defineProps({
    modelValue: String,
    searchArr: Array,
    isVisible: Boolean
});

const emit = defineEmits(['update:modelValue', 'update:searchArr', 'update:isVisible']);

function emitValue(e) {
    emit('update:modelValue', e.target.value);
    emitSearch(e);
    emitVisibility(e);
}
function emitSearch(e) {
    let res  = citiesList.filter(item => item.city_name.toLowerCase().includes(e.target.value.toLowerCase())
        || item.country_name.toLowerCase().includes(e.target.value.toLowerCase()));
    e.target.value.length > 0
    ? emit('update:searchArr', res)
    : emit('update:searchArr', [])
}

function emitVisibility(e) {
    console.log(e.target.value.length);
    e.target.value.length ? emit('update:isVisible', true) : emit('update:isVisible', false);
}

</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue"/>
</template>