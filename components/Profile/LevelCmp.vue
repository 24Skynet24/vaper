<template>
  <article class="flex-column flex-center">
    <p>Ваш текущий уровень</p>
    <div class="square flex-center">
      <svg class="logo" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1218_4931)">
          <path d="M40 0H0V40H40V0Z" fill="#0B0B0B"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60449 4.22723L16.8549 35.4148H21.5351L35.3816 4.22723H29.8538L17.8723 31.4666L7.33468 4.22723H4.60449Z" fill="#8A928F"/>
          <path d="M21.6028 35.5188H16.7842L4.45215 4.12343H7.40602L17.8786 31.1946L29.7862 4.12343H35.5416L21.6028 35.5188ZM16.9258 35.3109H21.4677L35.222 4.33126H29.9219L17.8663 31.7387L7.26359 4.33126H4.75707L16.9258 35.3109Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.548 23.3376L30.1348 35.534H35.548V23.3376Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8908 4.12144L17.9949 26.7979L13.8418 16.0422L18.7859 4.12144H27.8908Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47949 10.5191L14.095 35.5353H4.47949V10.5191Z" fill="white"/>
        </g>
        <rect x="0.1" y="0.1" width="39.8" height="39.8" stroke="white" stroke-width="0.2"/>
        <defs>
          <clipPath id="clip0_1218_4931">
            <rect width="40" height="40" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <svg class="bg" width="180" height="126" viewBox="0 0 180 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88.5263 125.473C89.3384 126.176 90.6581 126.176 91.4702 125.473L107.502 113.157L175.095 68.5465C178.234 65.8339 180 62.1569 180 58.3245L180 1.29921C180 -0.300995 180 0.0279272 176.447 0.0279144C118.574 0.0279418 61.4261 0.0279411 3.55293 0.0279123C0.666656 0.0279123 3.58932e-09 -0.300997 -1.5493e-08 1.29921L6.03396e-05 58.3245C6.02939e-05 62.1606 1.76565 65.8376 4.90529 68.5502L72.4982 113.16L88.5299 125.477L88.5263 125.473Z" fill="url(#paint0_linear_1218_4900)"/>
        <defs>
          <linearGradient id="paint0_linear_1218_4900" x1="136" y1="-55.5" x2="84.5" y2="230" gradientUnits="userSpaceOnUse">
            <stop stop-color="#656867" offset=""/>
            <stop offset="1" stop-color="#2D3532"/>
          </linearGradient>
        </defs>
      </svg>

      <span>{{ lvlName }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: "LevelCmp",
  props: {
    lvlName: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">

article {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 8px;
  padding: rem(30) rem(80);
  width: rem(356);
  height: rem(246);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: rem(20);
    box-shadow: none;
  }
}

p {
  margin-bottom: rem(40);
  @include style-font(14, 750, 140%, false);
  color: rgba(138, 146, 143, 1);
  text-transform: uppercase;
}

.square {
  position: relative;
  width: 100%;
  height: rem(180);
}

svg.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

svg.logo {
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 1;
  transform: translateX(-50%) translateY(-50%);
  width: rem(40);
  height: rem(40);
}

span {
  color: #FFFFFF;
  z-index: 2;
  text-transform: uppercase;
  @include style-font(24, 750, 140%, false);
  margin-bottom: rem(10);
}

</style>
