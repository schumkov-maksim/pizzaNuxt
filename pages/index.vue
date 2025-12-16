<script setup lang="ts">
import PizzaList from "~/components/PizzaList.vue";

useSeoMeta({
  title: "Nuxt Pizza",
  ogTitle: "Pizza",
  description: "Pizza description",
});

const { data } = await useFetch("/api/example");
</script>

<template>
  <h1>{{ data?.message }}</h1>
  <Tabs />
  <PizzaList />
</template>
