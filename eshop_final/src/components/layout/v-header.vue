<template>
  <div class="v-header">
    <div class="header-left">
    <router-link :to="{name: 'mainPage'}">
      <img src="../../assets/logo.png" alt="logo">BRAN<span style="color: #f16d7f; font-weight: 700">D</span>
    </router-link>
    <div class="search-field">
      <input
          type="text"
          v-model="searchValue"
      >
      <button class="search_btn">
        <i class="material-icons" @click="searchPr(searchValue)">search</i>
      </button>
    </div>
    </div>
    <router-link :to="{name: 'catalog'}">
      <p>to Catalog</p>
    </router-link>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-header",
  props: {},
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    searchPr(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
    }
  }
}
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ececec;
  align-items: center;
  //background: #73B1D6;
  width: 100%;
  a {
    text-decoration: none;
    color: grey;
    font-size: 27px;
    line-height: 3.19;
    letter-spacing: 0.68px;
    text-align: center;
    text-transform: uppercase;
  }
  .header-left {
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  p:first-letter {
    color: #f16d7f;
    font-weight: 700
  }
  img:hover {
    transition-duration: 1s;
    transform: rotate(360deg)
  }

  .search-field {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    outline: none;
    overflow: hidden;
    border: none;
  }

  .search_btn {
    background: transparent;
    border: none;
  }
}

</style>