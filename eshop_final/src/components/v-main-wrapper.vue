<template>
  <div class="v-main-wrapper">
    <v-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer />
  </div>
</template>

<script>
import vHeader from './layout/v-header'
import VFooter from "@/components/layout/v-footer";

export default {
  name: "v-main-wrapper",
  components: {
    VFooter,
    vHeader
  },
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<style>
.v-main-wrapper {
  position: relative;
  min-height: 100%;
}
</style>