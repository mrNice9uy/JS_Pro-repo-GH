<template>
  <div class="v-footer">
    <div class="copyright">&copy; 2020 Brand All Rights Reserved</div>
    <div class="links">
      <a href="#"><div class="footer-link"><i class="fab fa-linkedin-in"></i></div></a>
      <a href="#"><div class="footer-link"><i class="fab fa-twitter"></i></div></a>
      <a href="#"><div class="footer-link"><i class="fab fa-pinterest-p"></i></div></a>
      <a href="#"><div class="footer-link"><i class="fab fa-facebook-f"></i></div></a>
      <a href="#"><div class="footer-link"><i class="fab fa-google-plus-g"></i></div></a>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-footer",
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style>
@import "~font-awesome/css/font-awesome.css";

.v-footer {
  width: 100%;
  height: 80px;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.copyright {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.4px;
  color: #7a7a7a;
}
.links {
  display: flex;
  flex-direction: row;
}

.links .footer-link {
  width: 32px;
  height: 32px;
  background-color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #b2b2b2;
  line-height: 34px;
  margin-left: 8px; }
.links .footer-link:hover {
  color: white;
  background-color: #f16d7f;
  transition-duration: .5s;
  transform: scale(1.3, 1.3);
}
</style>