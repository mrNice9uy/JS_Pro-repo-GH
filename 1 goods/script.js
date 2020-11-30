function makeGETRequest(url, callback) {
    let xhr; // var -> let

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = () => { // classic function -> lambda function
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

makeGETRequest('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', r => console.log('end', r));

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

class GoodsItem {
// ...
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
// ...
  fetchGoods(cb) {
    makeGETRequest(`${API_URL}`, (goods) => {
        this.goods = JSON.parse(goods);
        cb();
    })
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.catalogue').innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});