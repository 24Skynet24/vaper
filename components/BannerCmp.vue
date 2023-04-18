<template>
  <section class="banner">
    <client-only>
      <hooper-wrap class="banner-wrap" :infinite-scroll="true" :wheelControl="false">
        <hooper-slide
          v-for="(item, key) in hooperSlides"
          :key="`banner_slide_${key}`"
          class="banner-slide"
        >
          <div class="container">
            <h2>{{ item }}</h2>
          </div>
          <div class="triangle"></div>
        </hooper-slide>
        <hooper-pagination slot="hooper-addons" class="pagination"></hooper-pagination>
      </hooper-wrap>
    </client-only>
  </section>
</template>

<script setup>
const hooperSlides = [
  '1 Новый магазин!\n Воронеж \n ул. Куколкина, 32',
  '2 Новый магазин!\n Воронеж \n ул. Куколкина, 32',
  '3 Новый магазин!\n Воронеж \n ул. Куколкина, 32',
]


</script>

<style scoped lang="scss">

section {
  width: 100%;
  height: rem(800);
  position: relative;

  @media screen and (max-width: 768px) {
    height: rem(360);
  }
}

.banner-wrap, .banner-slide {
  width: 100%;
  height: 100%;
}

.banner-slide {
  background-image: url("../assets/img/testBanner.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #FFFFFF;
  position: relative;


  @media screen and (max-width: 768px) {
    background: no-repeat linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("../assets/img/testBanner.png");
    background-size: 100% 100%;
  }

  .container {
    position: absolute;
    z-index: 2;
    left: 10%;
    transform: translateX(-2%);
    top: 20%;
  }

  h2 {
    @include style-font(64, 750, 140%, false);
    max-width: rem(764);

    @media screen and (max-width: 768px) {
      @include style-font(24, 700, 140%, false);
    }
  }

  .triangle {
    position: absolute;
    left: 0;
    top: 7%;
    width: 0;
    height: 0;
    border-top: rem(740) solid rgba(11, 11, 11, 0.8);
    border-right: rem(1400) solid transparent;
    filter: blur(7px);
    z-index: 1;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}


</style>
