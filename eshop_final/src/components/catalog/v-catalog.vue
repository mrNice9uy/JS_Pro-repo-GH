<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart"><i class="material-icons">shopping_cart</i> {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <v-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="10000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <div class="container">
      <div class="v-catalog__list">
        <v-catalog-item
            v-for="product in filteredProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '../v-select'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect
  },
  props: {},
  data() {
    return {
      categories: [
        {name: 'All', value: 'ALL'},
        {name: 'Men', value: 'm'},
        {name: 'Women', value: 'w'}
      ],
      selected: 'All',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'SEARCH_VALUE'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories()
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected === category.name
          return e.category === category.name
        })
      }
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        let regexp = new RegExp(value, 'i');
        this.sortedProducts = this.sortedProducts.filter(el => regexp.test(el.name))
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            console.log("Data arrived!");
            this.sortByCategories();
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
  }
}
</script>

<style lang="scss">
.container {
  width: 1140px;
  margin: 0 auto;
}
.v-catalog {
  height: 100%;
  padding-bottom: 100px;
  h1 {
    margin: 0;
    color: grey;
    font-size: 27px;
    line-height: 3.19;
    letter-spacing: 0.68px;
    text-align: center;
    text-transform: uppercase;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link_to_cart {
    color: grey;
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 5px;
    border: solid 1px gray;
    border-radius: 5px;
    background: white;
    &:hover {
      background-color: #f16d7f;
      color: white;
      transition: all ease-in-out .4s;
    }
  }

  .filters {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
  }

  .range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
}
</style>