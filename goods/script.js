class GoodsItem {
    constructor(title, price, imgUrl) {
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><img src="${this.imgUrl}"><p>${this.price}</p><button>В корзину</button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, imgUrl: 'https://picsum.photos/200/300?random=1' },
            { title: 'Socks', price: 50, imgUrl: 'https://picsum.photos/200/300?random=2' },
            { title: 'Jacket', price: 350, imgUrl: 'https://picsum.photos/200/300?random=3' },
            { title: 'Shoes', price: 250, imgUrl: 'https://picsum.photos/200/300?random=4' },
            { title: 'Hats', price: 450, imgUrl: 'https://picsum.photos/200/300?random=5' },
            { title: 'Shorts', price: 550, imgUrl: 'https://picsum.photos/200/300?random=6' },
            { title: 'Gloves', price: 650, imgUrl: 'https://picsum.photos/200/300?random=7' },
            { title: 'Jeans', price: 750, imgUrl: 'https://picsum.photos/200/300?random=8' },
        ];
    }
    render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.imgUrl);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
    goodsSum() {
        let sum = null;
        for (let i = 0; i < list.goods.length; i++) {
            sum += list.goods[i].price;
        }
        console.log(sum);
    }
}

/**
 * Класс CartItem наследуетс от GoodsItem 
 * передаем title, price, imgUrl
 * quantity - собственное свойство
*/

class CartItem extends GoodsItem {
    constructor(title, price, imgUrl, quantity) {
        super(title, price, imgUrl);
        this.quantity = quantity;
    }
}

class Cart {
    constructor() {
        this.cartData = [];
    }
    /**
     * Метод добавляет товар в корзину
     * @returns {string} html разметку страници корзины в виде строки
    */
    add() {
        let btns = document.querySelectorAll('.goods-list button');
        btns.forEach(function(button) {
            button.addEventListener('click', function(event) {
                console.log("ok");
                buttonClickHandler(event)
            })
        })
        function buttonClickHandler(event) {
            event.currentTarget.parentNode.style.background = "lightgreen"; //'#90EE90';
            event.currentTarget.textContent = "Добавлено";
        }
    }
    
    /**
     * Метод удаляет товар из корзины
     * @returns {string} html разметку страници корзины в виде строки
    */
    remove() {
        
    }
    
    /**
     * Метод очищает корзину
    */
    clear() {
        
    }
    /**
     * Метод возвращаем число уникальных товаров корзины
     * @returns {number}
    */
    getQuantity() {
        
    } 
    
    /**
     * Метод возвращаем число всех товаров корзины
     * @returns {number}
    */
    getQuantityAll() {
        
    }    
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.goodsSum();

const shopCart = new Cart();
shopCart.add();