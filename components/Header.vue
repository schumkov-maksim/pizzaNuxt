<template>
  <header>
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">
        <div class="flex items-center">
          <img src="/assets/images/logo.png" alt="" />
          <div class="ps-5">
            <h2>REACT PIZZA</h2>
            <p class="text">самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/cart">
        <div class="cart">
          <div class="pipe">520</div>
          <div class="flex items-center">
            <img src="/assets/images/cart.svg" />
            <div class="">3</div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding-bottom: 50px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
}
img {
  width: 50px;
  height: auto;
}
.text {
  font-size: 14px;
  color: #8d8d8d;
  line-height: 16px;
  font-weight: 400;
}

.cart {
  display: flex;
  gap: 20px;
  background-color: #fe5f1e;
  font-weight: 700;
  font-size: 16px;
  color: white;
  padding: 15px 25px;
  border-radius: 30px;
  align-items: center;
  img {
    height: 23px;
  }
}
.pipe {
  padding-right: 15px;
  border-right: 1px solid white;
}
</style>
