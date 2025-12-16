<script setup>
const props = defineProps({
  name: String,
  img: String,
  key: Number,
  tonkoe: Object,
  tolstoe: Object,
});
</script>

<template>
  <div class="flex justify-center">
    <div class="mt-3">
      <NuxtImg :src="props.img" />
      <h3 class="text-center">{{ props.name }}</h3>
      <!-- <div class="flex">
        <input
          type="radio"
          :id="'html' + props?.key"
          name="fav_language"
          value="HTML"
        />
          <label :for="'html' + props?.key">тонкое</label><br />
         
        <input
          type="radio"
          :id="'css' + props?.key"
          name="fav_language"
          value="CSS"
        />
          <label :for="'css' + props?.key">традиционное</label><br />
         
      </div> -->
      <div class="flex justify-between">
        <button class="border border-gray-300 rounded-lg p-2 pointer">
          Tolstoe
        </button>
        <button class="border border-gray-300 rounded-lg p-2 pointer">
          Tonkoe
        </button>
      </div>

      <p>{{ props.tolstoe }}</p>

      <div class="flex">
        <div class="">26 см</div>
        <div class="">30 см</div>
        <div class="">40 см</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 800;
}
.input {
  visibility: hidden;
}
</style>
