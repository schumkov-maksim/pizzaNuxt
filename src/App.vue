<script setup>
import { ref } from "vue";

const todo = ref("");

function addTodo() {}
</script>

<template>
  <h1>On Deploy</h1>
  <input v-model="todo" type="text" placeholder="Tippen Sie Todo" />
  <button @click="addTodo()">Add</button>

  <p>{{ todo }}</p>
</template>

<style scoped></style>
