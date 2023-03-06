const containerDom = document.getElementById("grid_container");
const gameModeDom = document.getElementById("game_mode");
const buttonDom = document.getElementById("action");
let numberBlackList = [];


function setDiffcult(mode){
    containerDom.innerHTML = "";



    let totalSquare;


    if (mode == "easy"){totalSquare = 100};
    if (mode == "hard"){totalSquare = 81};
    if (mode == "mamma_mia"){totalSquare = 49};


    for (let i = 0; i < totalSquare ; i++){

            const squareDom = document.createElement('div');
            squareDom.innerHtml = i;
            squareDom.classList.add('square_' + mode);
            squareDom.classList.add('pippo');
            containerDom.append(squareDom);

            
            for(let i = 0 ; i < 16 ; i++){
                
                const validNumberBomb = bombGenerator (numberBlackList,1 ,totalSquare);
                numberBlackList.push(validNumberBomb);
                console.log(numberBlackList)

            }

            squareDom.addEventListener('click',
            

            
                function(){
                    this.classList.toggle('selected');
                    console.log(i + 1);
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
    
    });

// generare 16 bombe
// non posso esserci più di 1 bomba nella stessa casella




function bombGenerator (numberBlackList, min, max){

    let validNumber = false;
    let randomNumberBomb;

    while (!validNumber) {
        randomNumberBomb = generateRandomnumberBombs(min, max);
        if (!numberBlackList.includes(randomNumberBomb)){
            validNumber = true;
        }
    }
    numberBlackList.push(randomNumberBomb);
    return randomNumberBomb;
    
}


function generateRandomnumberBombs(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}







