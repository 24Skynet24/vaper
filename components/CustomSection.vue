<template>
  <section class="page-section" :class="{'hide-line' : adaptiveStyle}">
    <span class="page-line" :class="{'green-background' : hoverState}"></span>
    <nuxt-link
      class="page-link flex-center"
      exact no-prefetch :to="sectionInfo.url"
      @mousemove.native="hoverState = true"
      @mouseleave.native="hoverState = false"
      :class="{'green-background' : hoverState}"
    >
      <h2>{{ sectionInfo.title }}</h2>
    </nuxt-link>
    <slot/>
  </section>
</template>

<script>
export default {
  name: "CustomSection",
  props: {
    sectionInfo: { type: Object,  required: true },
    adaptiveStyle: { type: Boolean, required: false, default: false },
  },
  data(){
    return {
      hoverState: false,
    }
  },
}
</script>

<style scoped lang="scss">

.page-background {
  background: $white;
}

.page-section {
  position: relative;
  padding: rem(200) 0 rem(180);

  @media screen and (max-width: 768px) {
    padding: rem(90) 0 rem(30);
  }
}

.page-line {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: rem(25);
  background: $black;
  transition: .25s;
}

.page-link {
  position: absolute;
  top: 0;
  left: 7%;
  min-width: rem(336);
  transform: translateX(5%);
  padding: rem(26) rem(50);
  background: $black;
  border-radius: 10px;
  transition: .25s;

  &::before {
    content: '';
    display: block;
    width: rem(1280);
    height: rem(10);
    background: $white;
    position: absolute;
    left: -.5px;
    top: calc(15% + 1px);
    transform: translateX(-100%);
    border-radius: 0 10px 0 0;
    z-index: 2;
  }

  &::after {
    content: '';
    display: block;
    width: rem(4000);
    height: rem(10);
    background: $white;
    position: absolute;
    left: 100%;
    top: calc(15% + 1px);
    border-radius: 10px 0 0 0;
    z-index: 2;
  }

  h2 {
    color: #FFFFFF;
    @include style-font(36, 750, 140%, false);
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      @include style-font(18, 450, 140%, false);
    }
  }

  @media screen and (max-width: 769px) {
    left: 50%;
    transform: translateX(-50%);
    padding: rem(20) rem(10) rem(10);
    min-width: rem(160);

    &::before {
      width: 100%;
      top: 30%;
    }

    &::after {
      width: 100%;
      top: 30%;
    }
  }
}

.green-background {
  background: $green;
}

.hide-line {
  @media screen and (max-width: 768px) {
    padding-top: 0;

    .page-line, .page-link {
      display: none !important;
    }
  }
}

</style>
