<template>
  <div class="v-main-page">
    <div class="preview-wall">
      <h2 class="preview-wall__h2">The Brand</h2>
      <h3 class="preview-wall__h3">of luxerious <span class="color-text">fashion</span></h3>
    </div>
    <div class="container">
      <div class="category">
        <div class="offer">
          <div class="offer__text">
            <h3>Hot deal</h3>
            <h2 class="color-text">for men</h2></div>
          <a href="#"><img src="./img/offer1.jpg" alt="Men"></a>
        </div>

        <div class="offer">
          <div class="offer__text">
            <h3>30% offer</h3>
            <h2 class="color-text">women</h2></div>
          <a href="#"><img src="./img/offer3.jpg" alt="Women"></a>
        </div>

        <div class="offer">
          <div class="offer__text">
            <h3>New arrivals</h3>
            <h2 class="color-text">For kids</h2></div>
          <a href="#"><img src="./img/offer4.jpg" alt="Kids"></a>
        </div>

        <div class="offer">
          <div class="offer__text">
            <h3>Luxirous & Trendy</h3>
            <h2 class="color-text">Accesories</h2></div>
          <a href="#"><img src="./img/offer2.jpg" alt="Accesories"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-main-page"
}
</script>

<style lang="scss">
.container {
  width: 1140px;
  margin: 0 auto;
}
.preview-wall {
  height: 600px;
  background-color: #e8e8e8;
  background-image: url("./img/topHeaderBack.png");
  background-repeat: no-repeat;
  background-position: top right;
  text-align: left;
  text-transform: uppercase;
  &__h2 {
    margin: 0;
    padding-top: 224px;
    font-size: 60px;
    letter-spacing: 1.5px;
    font-weight: 900
  }
  &__h3 {
    margin: 0;
    font-size: 40px;
    letter-spacing: 1px;
    font-weight: 900;
  }
}
.category {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: white;
  display: grid;
  grid-gap: 20px;
  grid-template: repeat(3, 261px) / repeat(auto-fit, minmax(560px, 1fr));
}
.color-text {
  color: #f16d7f;
  font-weight: 900;
}
.offer:hover {
  opacity: 0.5;
}
.offer:nth-child(1) {
  grid-row: span 2;
}
.offer:nth-child(3) {
  grid-row: span 2;
}
.offer__text {
  position: absolute;
  background-color: white;
  margin-top: 28px;
  text-align: left;
  padding: 10px;
}
.offer__text h2 {
  margin: 0;
  text-transform: uppercase;
  font-size: 23px;
  letter-spacing: 0.75px;
}
.offer__text h3 {
  margin: 0;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.45px;
}

@media (max-width: 1199px) {
  .container {
    width: 960px;
  }
  .category {
    justify-items: center;
  }
}

@media (max-width: 991px) {
  .container {
    width: 720px;
  }
}

@media (max-width: 767px) {
  .container {
    width: 540px;
  }
  .preview-wall {
    background-image: none;
  }
}

@media (max-width: 571px) {
  .container {
    width: 320px;
  }
  .category {
    justify-content: center;
  }
}
</style>