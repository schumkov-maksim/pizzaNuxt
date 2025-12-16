<script lang="js" setup>
const { data } = await useFetch("/api/example");
const test = ref(data.value.pizza);
console.log(test.value);
const pizzaType = test.value.map(item => () => {
 return item.id
});

console.log(pizzaType);
</script>
<template>
  <div class="">
    <h1 class="text-4xl pt-4">Все пиццы</h1>
    <div class="grid grid-cols-4 gap-4 pt-4">
      <PizzaItem
        v-for="item in data.pizza"
        :name="item.name"
        :key="item.id"
        :img="item.img"
        :tolstoe="item.tolstoe"
        :tonkoe="item.tonkoe"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
