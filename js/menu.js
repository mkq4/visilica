let playBtn = document.querySelector('.menu__play-btn');
let changeThemeBtn = document.querySelector('.menu__theme-btn');
let themeBlock = document.querySelector('.theme__block');
let theme = document.querySelectorAll('.theme-item');
let currentTheme;
let userTheme = document.querySelector('.menu__theme-user');
let settings = document.querySelector('.settings');
let settingsBlock = document.querySelector('.settings-block');
let img = document.querySelector('.menu__block')
let hintList = document.querySelectorAll('.hints-time')
let cross = document.querySelector('.settings-close')
let customInputs = document.querySelector('.custom-inputs')
let customTitle = document.querySelector('.theme-custom-title')
let saveCustom = document.querySelector('.input-btn')
let customTextArea = document.querySelector('.custom-input')



if(localStorage.length != 0) { // тема по дефолту и подсказки

    let theme = localStorage.getItem('theme')
    if(theme == 'dishArr') {userTheme.innerHTML = "Блюда"}
    else if (theme == 'animalsArr') {userTheme.innerHTML = "Животные"}
    else if (theme == 'countryArr') {userTheme.innerHTML = "Страны"}
    else if (theme == 'flowerArr') {userTheme.innerHTML = "Цветы"}
    else if (theme == 'capitalArr') {userTheme.innerHTML = "Столицы"}
    else if (theme == 'customArr') {userTheme.innerHTML = 'Своя тема'}
    localStorage.setItem('hints', 3)
    
}

themeBlock.addEventListener('click', (e)=>{ // клики по темам

    let themeItem = e.target;
    // console.log(themeItem.classList);
    if(themeItem.classList.contains('custom') || themeItem.classList.contains('theme-custom-title')) {
        customInputs.style.display = 'flex'
        themeBlock.style.top = '440px'

        
    }
    else if (themeItem.classList.contains('theme-item')) {

        currentTheme = themeItem.innerHTML;
        userTheme.innerHTML = currentTheme;
        themeBlock.style.display = 'none';
        changeThemeBtn.innerHTML = "Выбрать тему";
        changeThemeBtn.classList.toggle('active');
        setTheme() // установить тему в local storage

    } 
})

changeThemeBtn.addEventListener('click', ()=>{ // кнопка по темам
    // console.log(1123);
    themeBlock.style.display = 'flex';
    changeThemeBtn.classList.toggle('active');
    changeThemeBtn.innerHTML = 'Закрыть';

    if(changeThemeBtn.classList.contains('active') == false){
        themeBlock.style.display = 'none';
        changeThemeBtn.innerHTML = "Выбрать тему";
        customInputs.style.display = 'none'
        themeBlock.style.top = '44%'
    }

})

saveCustom.addEventListener('click', ()=>{
    
    let value = customTextArea.value
    if(value != '') {

        console.log(value);
        let customArr = value.split(", ").map(item => item.trim());
        console.log(customArr);
        localStorage.setItem('theme', 'customArr')
        encodeArray(customArr)
        localStorage.setItem('encodedArray', encodeArray(customArr))
        // setTheme()
        themeBlock.style.display = 'none';
        changeThemeBtn.innerHTML = 'Своя тема'

        
        changeThemeBtn.innerHTML = "Выбрать тему"; // кнопка, не трогать
        changeThemeBtn.classList.toggle('active'); // кнопка, не трогать

        currentTheme = 'Своя тема'
        userTheme.innerHTML = currentTheme;
        
        // changeThemeBtn.innerHTML = "Выбрать тему"

    
    } else {
        alert('Заполните тему!')
    }


})



function setTheme () { // сохраняет в local storage значение
    
    if(currentTheme == 'Животные') {localStorage.setItem('theme', 'animalsArr')}
    else if(currentTheme == 'Страны'){localStorage.setItem('theme', 'countryArr')}
    else if (currentTheme == "Блюда") {localStorage.setItem('theme', 'dishArr')}
    else if (currentTheme == "Цветы") {localStorage.setItem('theme', 'flowerArr')}
    else if (currentTheme == "Столицы") {localStorage.setItem('theme', 'capitalArr');}
    else if (currentTheme == "Своя тема") {localStorage.setItem('theme', 'customArr');}
    
}



playBtn.addEventListener('click', ()=>{

    if(userTheme.innerHTML != ' '){window.location.href='menu.html';}
    else{
        alert('Тема не выбрана')
    }

})

settings.addEventListener('click', ()=>{ // кнопка настроек 

    settingsBlock.classList.toggle('active-settings')
    if (settingsBlock.classList.contains('active-settings')){ 
        playBtn.style.display = 'none'
        img.style.margin = '200px 0 0 0'
    } else {
        playBtn.style.display = 'block'
        img.style.margin = '50px 0 0 0'
    }

})

settingsBlock.addEventListener('click', (e)=>{ // переключение количетво подсказок

    // cross.classList.add('open')

    if(localStorage.getItem('hints' != '')) {
        hintList.forEach((i)=>{
            i.classList.remove('active')
        })
        // Доделать тут
    }
    let target = e.target
    if(target.classList.contains('hints-time')){

        hintList.forEach((i)=>{
            i.classList.remove('active')
        })

        target.classList.add('active')
        localStorage.setItem('hints', target.innerHTML)

    }
})

cross.addEventListener('click', ()=>{
    settingsBlock.classList.toggle('active-settings')
    if (settingsBlock.classList.contains('active-settings')){ 
        playBtn.style.display = 'none'
        img.style.margin = '200px 0 0 0'
    } else {
        playBtn.style.display = 'block'
        img.style.margin = '50px 0 0 0'
    }
})

function encodeArray(array) { // кодировщик
    let encodedArray = [];
    for (let i = 0; i < array.length; i++) {
      let encodedValue = '';
      for (let j = 0; j < array[i].length; j++) {
        encodedValue += String.fromCharCode(array[i].charCodeAt(j) + 1);
      }
      encodedArray.push(encodedValue);
    }
    console.log(encodedArray);
    return encodedArray;
    
}


//сделать кастомную тему
