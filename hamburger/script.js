class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }
    addTopping(topping) {

    }   // Добавить добавку 
    removeTopping(topping) {} // Убрать добавку 
    getToppings(topping) {
        alert("Также к бургеру можете добавить один из топпингов: " + topping[0].item + " или " + topping[1].item);
        alert('Но не сегодня!=)')
    }   // Получить список добавок 
    getSize() {
        const availableAnswers = ["A", "B"];
        while(true) {
            let userAnswer = prompt('Выберите размер:' + "\n" + 'A: маленький или В: большой' + "\n" + '"Отмена", если вы за ЗОЖ');
            if (userAnswer == null) {
                alert("Хорошего дня!");
            } else if (!availableAnswers.includes(userAnswer.toUpperCase())) {
                alert('Выберите один из представленных вариантов (А или В)');
                continue;
            }
            if (userAnswer.toLocaleUpperCase() == "A") {
                alert("Вы выбрали " + this.size[0].name);
                totalPrice = this.size[0].price;
                console.log(totalPrice);
                return totalPrice
            } else {
                alert("Вы выбрали " + this.size[1].name);
                totalPrice = this.size[1].price;
                console.log(totalPrice);
                return totalPrice
            }        
        }        
    }              // Узнать размер гамбургера }
    getStuffing() {
        const availableAnswers = ["A", "B", "C"];
        while(true) {
            let userAnswer = prompt('Выберите начинку:' + "\n" + 'A: с сыром, B: с картофелем или C: с салатом' + "\n" + '"Отмена", если вы за ЗОЖ');
            if (userAnswer == null) {
                alert("Хорошего дня!");
            } else if (!availableAnswers.includes(userAnswer.toUpperCase())) {
                alert('Выберите один из представленных вариантов (А, B или C)');
                continue;
            }
            let stuffingPrice = null;
            switch (userAnswer.toLocaleUpperCase()) {
                case 'A':
                    alert("Вы выбрали " + this.stuffing[0].feature);
                    totalPrice += this.stuffing[0].price;
                    totalCalories += this.stuffing[0].calories;
                    console.log(totalPrice);
                    return totalPrice
                case 'B':
                    alert("Вы выбрали " + this.stuffing[1].feature);
                    totalPrice += this.stuffing[1].price;
                    totalCalories += this.stuffing[1].calories;
                    console.log(totalPrice);
                    return totalPrice
                case 'C':
                    alert("Вы выбрали " + this.stuffing[2].feature);
                    totalPrice += this.stuffing[2].price;
                    totalCalories += this.stuffing[2].calories;
                    console.log(totalPrice);
                    return totalPrice
            }
        } 
    }          // Узнать начинку гамбургера }
    calculatePrice() {
        alert("Общая сумма: " + totalPrice);
    }       // Узнать цену }
    calculateCalories() {
        alert("Количество калорий: " + totalCalories);
    }    // Узнать калорийность }
}

const size = [
    { name: 'Junior', price: 50, calories: 20 },
    { name: 'Big', price: 100, calories: 40 },
];

const stuffing = [
    { feature: 'сыр', price: 10, calories: 20 },
    { feature: 'картофель', price: 20, calories: 5 },
    { feature: 'салат', price: 15, calories: 10 },
];

const topping = [
    { item: 'Приправа', price: 50, calories: 20 },
    { item: 'Майонез', price: 100, calories: 40 },
];

let totalPrice = null;
let totalCalories = null;

const burger = new Hamburger(size, stuffing);
burger.getSize();
burger.getStuffing();
burger.addTopping(stuffing)
burger.getToppings(topping);
burger.calculatePrice();
burger.calculateCalories();
