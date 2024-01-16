let letters = document.querySelector('.letters');
let letter;
let letterNumber = 0;
let buttons = document.querySelector('.alphabet');
let buttonLetters = document.querySelectorAll('.button-letter');
let lostMenu = document.querySelector('.lost-menu');
let lostMenuText = document.querySelector('.lost-menu__text');
let correctWord = document.querySelectorAll('.correct-word');
let winMenu = document.querySelector('.win-menu');
let visilica = document.querySelector('.visilica');
let btnBorder = document.querySelector('.border');
let localTheme = localStorage.getItem('theme')
let localArr;

//отслеживание клавиш пользователя

document.addEventListener('keydown', function(e){
    let key = e.key.toUpperCase();
    console.log(key);
    buttonLetters.forEach((letter)=>{
        if(key === letter.innerHTML){
            letter.click()
        }
    })
})


function getTheme () {

    if (localTheme == 'animalsArr') {localArr = animalsArr;} 
    else if (localTheme == 'countryArr') {localArr = countryArr}
    else if (localTheme == 'capitalArr') {localArr = capitalArr}
    else if (localTheme == 'dishArr') {localArr = dishArr}
    else if (localTheme == 'flowerArr') {localArr = flowerArr}
    else if (localTheme == 'customArr') {
        localArr = localStorage.getItem('encodedArray')
        
        let customArr = decodeArray(localArr)
        localArr = transformArray(customArr)
        console.log(localArr);
    }
    return localArr

}

let randomWordUser = getRandomWordAndSplit(getTheme()); //вызывает ф-ию в игру и ещё тут проблема
//Забыл какая проблема была, но вроде всё работает
let nums = randomWordUser.length;

function createElements(nums) {

    
    let splitedWord = randomWordUser.split('');
    for (let i = 0; i < nums; i++) {
    
        letter = document.createElement('div');
        letter.classList.add('letter');
        letter.classList.add(letterNumber);
        letter.innerHTML = '<span class="hidden-letter"></span><hr>';
        letters.appendChild(letter);
        letterNumber++;

    }
    //разделяем слово по буквам
    
}

createElements(nums);

correctWord[0].innerHTML = randomWordUser;
correctWord[1].innerHTML = randomWordUser;

buttons.addEventListener('click', (e)=>{
    let currentButton = e.target;
    let letterInButton = currentButton.innerHTML.toLowerCase(); // буква в кнопке

    if (currentButton.classList.contains('button-letter') == true){ // проверака на клик по кнопке с буквой 
        currentButton.classList.add('clicked');
        //код чтобы угадывать буквы
        let f = 0;
        for(let c = 0; c < spanLetters.length; c++) { //цикл для ввыведения буквы на экран
            
            if (letterInButton == spanLetters[c].innerHTML){
                let currentNeedLetter = spanLetters[c];
                currentNeedLetter.style.display = 'block';
                for(f; f < buttonLetters.length; f++ ) { //цикл для добавления класса true, если буква правильная
                    
                    if (buttonLetters[f].innerHTML.toLowerCase() == currentNeedLetter.innerHTML) { 
                        buttonLetters[f].classList.add('true');
                    } 

                }
            } else if (letterInButton != spanLetters[c].innerHTML){
                currentButton.classList.add('false');
            }
            
            
        }

    }
    
    for (let v = 0; v < buttonLetters.length; v++){
        
        if (buttonLetters[v].classList.contains('true')){
            
            buttonLetters[v].innerHTML = `<img src="https://img.icons8.com/?size=512&id=11849&format=png" alt="">`;
            buttonLetters[v].classList.remove('false');
            // correctLetter++
            // console.log(correctLetter++);
            
            
        } else if (buttonLetters[v].classList.contains('false')){

            buttonLetters[v].innerHTML = `<img src="https://img.icons8.com/?size=512&id=T9nkeADgD3z6&format=png" alt="">`;
            buttonLetters[v].classList.remove('true');

        }

    }

    checkLoose ();
    checkWin ();

})
//spanLetters[b] буква, которая появляется

let splitedWord = randomWordUser.split('');
let spanLetters = document.querySelectorAll('.hidden-letter');
console.log(spanLetters);

for(let a = 0; a < spanLetters.length; a++){
    spanLetters[a].innerHTML = splitedWord[a];
    spanLetters[a].style.display = 'none';
}

function checkLoose () { // ищет сколько неправиольных букв

    let miss = 0;
    for (let t = 0; t < buttonLetters.length; t++) {
        if(buttonLetters[t].classList.contains('false')){
            miss++;
        }
    }

    if (miss == 7 || miss > 7) {

        setTimeout(() => {
            lostMenu.style.display = 'flex';
            buttons.style.display = 'none';
        }, 200);
    }

    if(miss != 0){visilica.innerHTML = `<img style="width: 500px; height: 300px;" class="img${miss}" src="img/visilaca${miss}.png" alt="">`;}
    
}


function checkWin () { // ищет сколько неправиольных букв

    let correctLetter = 0;

    for (let t = 0; t < spanLetters.length; t++) {
        if(spanLetters[t].style.display == 'block'){
            correctLetter++;
        }
    }

    if (correctLetter == randomWordUser.split('').length){

        setTimeout(() => {
            winMenu.style.display = 'flex';
            buttons.style.display = 'none';
        }, 200);

    }

}

//сделать возможность добавлять массив слов свой с помощью файла