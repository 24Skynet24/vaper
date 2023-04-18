<template>
  <main class="page-background">
    <banner-cmp/>

    <custom-section :section-info="categorySection">
      <div class="container">
        <client-only>
          <hooper-wrap :infinite-scroll="true" :wheelControl="false" :itemsToShow="4" class="category-cards-wrap">
            <hooper-slide v-for="(item, key) in cardInfo" :key="`category_item_${key}`">
              <category-card :card-info="item"/>
            </hooper-slide>
            <hooper-navigation slot="hooper-addons">
              <svg slot="hooper-next" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#0B0B0B"/>
              </svg>
            </hooper-navigation>
          </hooper-wrap>
        </client-only>

        <div class="category-cards flex-column">
          <nuxt-link
            class="flex-center"
            :to="item.url" exact no-prefetch
            v-for="(item, id) in cardInfo" :key="`category_card_mob_${id}`"
          >
            {{ item.title }}
          </nuxt-link>
          <nuxt-link class="flex-center btn" to="/" exact no-prefetch>
            посмотреть все
          </nuxt-link>
        </div>
      </div>
    </custom-section>

    <custom-section :section-info="newPrSection">
      <div class="container flex-wrap cards-container">
        <vape-card
          v-for="(item, key) in newProductCards"
          :key="`vaper_card_${key}`"
          :card-info="item"
        />
      </div>

      <div class="container mobile-cards-container">
        <client-only>
          <hooper-wrap :wheelControl="false">
            <hooper-slide
              v-for="item in Math.ceil(newProductCards.length / 3)"
              :key="`mobile_vaper_card_${item}`"
            >
              <div class="flex-column slide-wrap">
                <vape-card v-if="!!newProductCards[(item - 1) * 3]" :card-info="newProductCards[(item - 1) * 3]" style="width: 90%; margin: 0 auto;" />
                <vape-card v-if="!!newProductCards[(item - 1) * 3 + 1]" :card-info="newProductCards[(item - 1) * 3 + 1]" style="width: 90%; margin: 0 auto;"/>
                <vape-card v-if="!!newProductCards[(item - 1) * 3 + 2]" :card-info="newProductCards[(item - 1) * 3 + 2]" style="width: 90%; margin: 0 auto;"/>
              </div>
            </hooper-slide>

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-navigation slot="hooper-addons">
              <svg slot="hooper-next" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
              </svg>

              <svg slot="hooper-prev" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
              </svg>
            </hooper-navigation>
          </hooper-wrap>
        </client-only>
      </div>
    </custom-section>

    <custom-section :section-info="stocksSection">
      <div class="container flex-wrap cards-container">
        <vape-card
          v-for="(item, key) in newProductCards"
          :key="`stock_vaper_card_${key}`"
          :card-info="item"
        />
      </div>

      <div class="container mobile-cards-container">
        <client-only>
          <hooper-wrap :wheelControl="false">
            <hooper-slide
              v-for="item in Math.ceil(newProductCards.length / 3)"
              :key="`mobile_vaper_card_${item}`"
            >
              <div class="flex-column slide-wrap">
                <vape-card v-if="!!newProductCards[(item - 1) * 3]" :card-info="newProductCards[(item - 1) * 3]" style="width: 90%; margin: 0 auto;" />
                <vape-card v-if="!!newProductCards[(item - 1) * 3 + 1]" :card-info="newProductCards[(item - 1) * 3 + 1]" style="width: 90%; margin: 0 auto;"/>
                <vape-card v-if="!!newProductCards[(item - 1) * 3 + 2]" :card-info="newProductCards[(item - 1) * 3 + 2]" style="width: 90%; margin: 0 auto;"/>
              </div>
            </hooper-slide>

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-navigation slot="hooper-addons">
              <svg slot="hooper-next" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
              </svg>

              <svg slot="hooper-prev" width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
              </svg>
            </hooper-navigation>
          </hooper-wrap>
        </client-only>
      </div>
    </custom-section>

    <custom-section :section-info="brandsSection">
      <div class="container brands-container flex-wrap">
        <nuxt-link
          to="/" exact no-prefetch
          class="brands-container-item flex-center"
          v-for="(item, id) in brands" :key="`brand_${id}`"
        >
          <h4>{{ item }}</h4>
        </nuxt-link>
        <nuxt-link to="/" exact no-prefetch class="brands-container-item flex-center">
          <svg width="34" height="60" viewBox="0 0 34 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8295 30.4912C34.0576 30.2205 34.0576 29.7807 33.8295 29.51L29.332 24.166L10.3708 1.63508C9.48956 0.588531 8.29495 0 7.04992 0H0.584652C0.0647894 0 -0.195742 0.748051 0.171643 1.18431L24.0097 29.51C24.2378 29.7807 24.2378 30.2205 24.0097 30.4912L0.171643 58.8157C-0.195742 59.2532 0.0647894 60 0.584652 60H7.04992C8.29615 60 9.49076 59.4115 10.372 58.3649L29.3332 35.834L33.8307 30.49L33.8295 30.4912Z" fill="#00A689"/>
          </svg>
        </nuxt-link>
      </div>
    </custom-section>
  </main>
</template>

<script>
import BannerCmp from "../components/BannerCmp";
import CategoryCard from "../components/Category/CategoryCard";
import CustomSection from "../components/CustomSection";
import VapeCard from "../components/VapeCard";
import AgeVerification from "../components/Modals/AgeVerification";
import CookiesModal from "../components/Modals/CookiesModal";

export default {
  name: "IndexPage",
  components: {
    CookiesModal,
    BannerCmp, CategoryCard,
    CustomSection, VapeCard, AgeVerification,
  },
  data() {
    return {
      cardInfo: [
        {
          icon: require('@/assets/img/category/categories_icons.svg?raw'),
          url: '/',
          title: 'одноразовые pod-системы'
        },
        {
          icon: require('@/assets/img/category/categories_icons-1.svg?raw'),
          url: '/',
          title: 'pod-системы'
        },
        {
          icon: require('@/assets/img/category/categories_icons-2.svg?raw'),
          url: '/',
          title: 'жидкость для POD-систем'
        },
        {
          icon: require('@/assets/img/category/categories_icons-3.svg?raw'),
          url: '/',
          title: 'расходники'
        },
      ],
      newProductCards: [
        {
          like: false,
          url: '/',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: false,
          url: '/',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: true,
          url: '/',
          img: require('@/assets/img/cards/test-photo.png'),
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 3100
          },
        },
        {
          like: false,
          url: '/',
          img: '',
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 0
          },
        },
        {
          like: true,
          url: '/',
          img: require('@/assets/img/cards/test-photo.png'),
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 3100
          },
        },
        {
          like: true,
          url: '/',
          img: require('@/assets/img/cards/test-photo.png'),
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 3100
          },
        },
        {
          like: true,
          url: '/',
          img: require('@/assets/img/cards/test-photo.png'),
          title: 'Rincoe Jellybox Nano X Pod Kit 30W 1000mAh',
          price: {
            price: 2100,
            discount: 3100
          },
        },
      ],
      categorySection: {
        url: '/',
        title: 'Категории'
      },
      newPrSection: {
        url: '/',
        title: 'Новинки'
      },
      stocksSection: {
        url: '/',
        title: 'Акции'
      },
      brandsSection: {
        url: '/',
        title: 'Бренды'
      },
      brands: [
        'voopoo',
        'Vaporesso',
        'geekvape',
        'smoant',
        'rincoe',
        'smok',
        'brusko',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

.container.flex-wrap.cards-container {
  gap: rem(20);
  position: relative;

  @media screen and (max-width: 768px){
    display: none !important;
  }
}

.brands-container {
  background: $white;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);

  @media screen and (max-width: 768px){
    box-shadow: none;
    border-radius: 0;
    background: none;
    justify-content: space-between;
    gap: rem(20);
  }

  &-item {
    width: 25%;
    border: 2px solid #E3E6E4;
    padding: rem(45) rem(10);
    transition: .25s;;
    background: #FFFFFF;

    @media screen and (min-width: $laptop) {
      &:hover {
        border-color: $green;

        h4 { color: $green; }
      }
    }

    &:first-child {
      border-radius: 10px 0 0 0;
    }
    &:nth-child(4) {
      border-radius: 0 10px 0 0;
    }
    &:last-child {
      border-radius: 0 0 10px 0;
    }
    &:nth-child(5) {
      border-radius: 0 0 0 10px;
    }

    h4 {
      transition: .25s;
      @include style-font(36, 750, 140%, false);
      color: #8A928F;
      text-transform: uppercase;
    }

    svg {
      width: rem(34);
      height: rem(60);
    }

    @media screen and (max-width: 768px){
      width: calc(50% - #{rem(10)});
      box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
      border-radius: 8px !important;
      padding: rem(24) rem(10);
      height: rem(70);

      h4 {
        @include style-font(16, 750, 140%, false);
      }

      svg {
        width: rem(23);
        height: rem(40);
      }
    }
  }
}

.category-cards-wrap {
  @media screen and (max-width: 768px){
    display: none;
  }
}

.category-cards {
  gap: rem(20);
  display: none !important;

  @media screen and (max-width: 768px){
    display: flex !important;
  }

  a {
    width: 100%;
    height: rem(60);
    text-align: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 8px;
    text-transform: uppercase;
    color: $black;
    @include style-font(14, 700, 140%, false);
  }

  .btn {
    width: rem(200);
    background: $green;
    color: #FFFFFF;
    margin: 0 auto;
  }
}

.mobile-cards-container {
  display: none;
  height: rem(500);

  .flex-column.slide-wrap {
    gap: rem(20);
  }

  @media screen and (max-width: 768px){
    display: block;
  }
}

</style>
