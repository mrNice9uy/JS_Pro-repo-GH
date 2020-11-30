'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');
var btnCloseCart = document.getElementById('goods-list-section__delete');
var btnOrder = document.getElementsByClassName('product-card-section_btn-order');
let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        img: 'http://placehold.it/200x300', //заглушка
        searchText: '',
        filteredProducts: []
    },
    methods: {
        getJson(url) {
            return fetch(url).then(result => result.json()).catch(error => {
                console.log(error)
            })
        },
        addProduct(product) {
            console.log(product.id_product);
        },
        searchFor() {
            let text = this.searchText.toLowerCase().trim();
            if (text === '') {
                this.filteredProducts = this.products;
            } else {
                const regexp = new RegExp(text, 'i');
                this.filteredProducts = this.products.filter(product => regexp.test(product.product_name));
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`).then(data => {
            for (let el of data) {
                this.products.push(el)
            }
        });
        this.filteredProducts = this.products;
    }
});
class Cart {
    constructor() {
        this.goods = [];
    }
}
var openBasket = () => {
    cart.render();
    goodsListSection.style.display = 'block';
};
var cart = new Cart();
btnBasket.addEventListener('click', openBasket);
window.addEventListener('click', function (evt) {
    console.log(evt)
});
btnCloseCart.addEventListener('click', function () {
    goodsListSection.style.display = 'none'
});