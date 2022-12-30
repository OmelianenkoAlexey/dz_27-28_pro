// ! ДЗ 27. this chain

// Це ladder(сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

// let ladder = {
//     step: 0,
//     up: function () {
//         this.step++;
//     },
//     down: function () {
//         this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
// };

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// Змініть код методів up, down і showStep таким Таким чином,
// щоб їх виклик можна було зробити по ланцюжку, наприклад:
// ladder.up().up().down().showStep(); // 1
// Такий підхід широко використовується в бібліотеках JavaScript.

// let ladder = {
//     step: 0,
//     up: function () {
//         this.step++;
//         return this;

//     },
//     down: function () {
//         this.step--;
//         return this;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ! Вызов всех функций можно записать в одне строку!!!
// ladder.up().up().down().up().showStep();

// ! ДЗ 28. SuperMath

// Створити клас SuperMath.
class SuperMath {
    constructor(X, Y, znak) {
        this.X = X;
        this.Y = Y;
        this.znak = znak;
    }

    check(obj) {
        let question = confirm(`Вы хотите сделать действие " ${obj.znak} " с числами "${obj.X}" и "${obj.Y}"?`);
        if (question) {
            let result = obj.X + obj.Y;
            console.log(`Числа ${obj.X} и ${obj.Y}, действие ${obj.znak}, результат ${result}.`);
        } else {
            p.input();
        }
    }

    input() {
        let result = 0;
        let firstNumber = +prompt("Введите первое число");
        let secondNumber = +prompt("Введите второе число");

        let matAction = prompt('Введите математическое действие " + ", " - ", " * " ," / ", " % "').replaceAll(" ", "");
        while (matAction !== "+" && matAction !== "-" && matAction !== "*" && matAction !== "/" && matAction !== "%") {
            alert("Вы ввели не верно, введите повторно!!!")
            matAction = prompt('Введите математическое действие " + ", " - ", " * " ," / ", " % "').replaceAll(" ", "");
        }
        if (matAction === "+") {
            result = firstNumber + secondNumber;
        } else if (matAction === "-") {
            result = firstNumber - secondNumber;
        } else if (matAction === "*") {
            result = firstNumber * secondNumber;
        } else if (matAction === "/") {
            result = firstNumber / secondNumber;
        } else if (matAction === "%") {
            result = firstNumber % secondNumber;
        }
        console.log(`Числа ${firstNumber} и ${secondNumber}, действие ${matAction}, результат ${result}.`);
    }
}
let obj = {
    X: 12,
    Y: 3,
    znak: "*"
}
let p = new SuperMath();
p.check(obj); // -- > no p.input() -> 3 prompt -> рахує

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
// Якщо хоче, зробити математичну дію znak(яка описана в прототипі),
// інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

//     p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує
