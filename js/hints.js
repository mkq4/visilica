// .hint-block
// .hint-text
// .hint-sum
// .hint-btn


let hintsTime = localStorage.getItem('hints')
let hintBtn = document.querySelector('.hint-btn')
let hintWord = document.querySelector('.hint-sum')


hintWord.innerHTML = hintsTime
let indexLetter = 0
hintBtn.addEventListener('click', ()=>{
    showButton()
    
    hintWord.innerHTML = hintsTime


    checkLoose ();
    checkWin ();
})



function showButton() {
    if(hintsTime > 0) {
        
        if(spanLetters[indexLetter].style.display == 'none') { // если буква не активна, то 

            buttonLetters.forEach((letter, index)=> {
                if(spanLetters[indexLetter].innerHTML == letter.innerHTML.toLocaleLowerCase()){
                    letter.classList.add('true')
                    letter.innerHTML = '<img src="https://img.icons8.com/?size=512&id=11849&format=png" alt="">'
                }
            })

            spanLetters.forEach((letter)=>{
                if(letter.innerHTML == spanLetters[indexLetter].innerHTML){
                    
                    letter.style.display = 'block' // открываем все одинаковые буквы


                }
            })

            indexLetter++ //увеличиваем до следующей буквы
            hintsTime -= 1 // уменьшаем количество

        } 
        else if (spanLetters[indexLetter].style.display == 'block'){  // Если буква активна, то 
            indexLetter++ // переключаемся на следующую букву
            showButton()
        }

    
    }
}
