// let wordsArr = ['Макака', 'Организм', 'Пельмени', 'Виноград', 'Удар'];
let animalsArr = ['Собака', "Кошка", "Макака", "Обезьяна", "Кенгуру", "Шакал", "Барсук", "Скунс", 
"Кит", "Акула", "Попугай", "Голубь", "Лев", "Тигр", "Лошадь", "Ленивец", "Коала", "Слон"];

let countryArr = ['Россия', 'США', 'Китай', 'Германия', 'Франция', 'Италия', 'Япония', 'Испания', 
'Великобритания', 'Канада', 'Австралия', 'Бразилия', 'Индия', 'Мексика', 'Южная Корея', 'Турция', 'Иран', 'Аргентина', 'Польша'];

let capitalArr = ['Москва', 'Вашингтон', 'Пекин', 'Берлин', 'Париж', 'Рим', 'Токио', 'Мадрид', 'Лондон', 
'Оттава', 'Канберра', 'Бразилиа', 'НьюДели', 'Мехико', 'Сеул', 'Анкара', 'Тегеран', 'БуэносАйрес', 'Варшава'];

let dishArr = ['Пицца', 'Суши', 'Паста', 'Бургер', 'Тако', 'Спагетти', 'Паэлья', 'Стейк', 'Цезарь',
 'Лазанья', 'Фрикасе', 'Хинкали', 'Гуляш', 'Пельмени', 'Хачапури', 'Мисосуп', 'Кимчи', 'Пилаф'];

let flowerArr = ['Роза', 'Лилия', 'Тюльпан', 'Орхидея', 'Гербера', 'Ирис', 'Пион', 'Нарцисс', 'Гвоздика',
 'Камелия', 'Эдельвейс', 'Фиалка', 'Астра', 'Хризантема', 'Лаванда', 'Гладиолус', 'Мимоза', 'Эустома', 'Сирень', 'Тульпан'];
let encodedArray = localStorage.getItem('encodedArray')

function getRandomWordAndSplit(arr) { //получаем раномное слово

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max); //получаем рандомное число
    }

    let randomNum = getRandomInt(arr.length);
    console.log(randomNum);
    let randomWord;
    randomWord = arr[randomNum]
    console.log(randomWord);
    return randomWord;

}

function decodeArray(array) { // дешифровщик
    let decodedArray = [];
    for (let i = 0; i < array.length; i++) {
        let decodedValue = '';
        for (let j = 0; j < array[i].length; j++) {
            decodedValue += String.fromCharCode(array[i].charCodeAt(j) - 1);
        }
        decodedArray.push(decodedValue);
    }
    return decodedArray;
}

function transformArray(arr) { // надо
    var customArr = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "+") {
        continue;
      }
      
      var word = "";
      
      while (i < arr.length && arr[i] !== "+") {
        word += arr[i];
        i++;
      }
      
      customArr.push(word);
    }
    
    return customArr;
  }