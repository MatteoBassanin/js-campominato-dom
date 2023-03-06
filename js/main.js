const containerDom = document.getElementById("grid_container");
const gameModeDom = document.getElementById("game_mode");
const buttonDom = document.getElementById("action");
let numberBlackList = [];
let totalSquare;

let score = 0;

function setDiffcult(mode){
    containerDom.innerHTML = "";
    numberBlackList = [];


    if (mode == "easy"){totalSquare = 100};
    if (mode == "hard"){totalSquare = 81};
    if (mode == "mamma_mia"){totalSquare = 49};

    for (let i = 0; i < totalSquare ; i++){

            const squareDom = document.createElement('div');
            squareDom.innerHtml = i;
            squareDom.classList.add('square_' + mode);
            containerDom.append(squareDom);          

            squareDom.addEventListener('click',
                       
                function(){
                    this.classList.toggle('selected');
                    console.log(i + 1);

                    


                    if (numberBlackList.includes(i + 1)){
                        this.classList.add('bomb');
                        alert("Hai perso");
                        alert("Il tuo punteggio è " + score);
                        containerDom.classList.add('no_click');                     
                      }
                      else{
                        score++;
                        console.log("il tuo punteggio è " + score);
                      }
                }       
            );                  
            
            buttonDom.addEventListener('click',
                function(){
                    squareDom.classList.toggle('d_none');
                    squareDom.classList.remove('selected');
                }  
            );                      
  
        };
       
}


buttonDom.addEventListener('click',
    function(){
        
        setDiffcult(gameModeDom.value);
        
        containerDom.classList.remove('no_click'); 
        for(let i = 0 ; i < 16 ; i++){             
            const validNumberBomb = bombGenerator (numberBlackList,1 ,totalSquare);
            numberBlackList.push(validNumberBomb);
            console.log(validNumberBomb);
            console.log(numberBlackList);
            
        }
    });

function bombGenerator (numberBlackList, min, max){

    let validNumber = false;
    let randomNumberBomb;

    while (!validNumber) {
        randomNumberBomb = generateRandomnumberBombs(min, max);
        if (!numberBlackList.includes(randomNumberBomb)){
            validNumber = true;
        }
    }

    return randomNumberBomb;
    
}


function generateRandomnumberBombs(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}






