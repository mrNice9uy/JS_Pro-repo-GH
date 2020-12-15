<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src=" require('../../assets/images/' + cart_item_data.image) " alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price | toFix}}</p>
      <p>Article: {{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item_quantity">
      <p>Quantity</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="deleteBtn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'

export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  filters: {
    toFix
  },
  computed: {},
  methods: {
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
  &__image {
    max-width: 100px;
  }

  .deleteBtn {
    border: none;
    border-radius: 3px;
    background-color: lightgray;
    color: black;
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f16d7f;
      color: white;
      transition: all ease-in-out .4s;
    }
  }

  .quantity__btn {
    cursor: pointer;
  }
}

</style>