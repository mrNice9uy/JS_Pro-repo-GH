<template>
  <div class="v-catalog-item">

    <v-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup = "closeInfoPopup"
        @rightBtnAction="addToCart"
    >
      <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
      <div>
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">{{product_data.category}}</p>
        <p class="v-catalog-item__price">Price: {{product_data.price | toFix}}</p>
      </div>
    </v-popup>

    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price | toFix}}</p>
    <button
        class="v-catalog-item__show-info"
        @click="showInfoPopup"
    >Show info
    </button>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Add to Cart
    </button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'
import toFix from '../../filters/toFix'

export default {
  name: "v-catalog-item",
  components: {
    vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false
    }
  },
  filters: {
    toFix
  },
  computed: {},
  methods: {
    showInfoPopup() {
      this.isInfoPopupVisible = true
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false
    },
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
button:focus {
  outline: none;
}
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    width: 210px;
  }
  &__show-info {
    border: none;
    border-radius: 3px;
    background-color: lightgray;
    color: black;
    margin-right: 5px;
  }
  &__add_to_cart_btn {
    border: none;
    border-radius: 3px;
    background-color: #f16d7f;
    color: white;
    margin-left: 5px;
  }
}
</style>