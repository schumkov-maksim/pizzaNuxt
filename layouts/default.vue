<template>
  <div class="container mx-auto p-5">
    <div class="wrapper">
      <Header />

      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: white;
  margin: 50px 0;
  border-radius: 20px;
  padding: 50px;
}
</style>
