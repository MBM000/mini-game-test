const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position =  323;

function pressUp(event) {
    if(event.keyCode === 32 ){
        if(!isJumping){
            jump();
        }
    }
} 

function jump() {
    isJumping = true;

    let upIterval = setInterval(() =>{
        if(position >= 488){
            clearInterval(upIterval);

            let dawnInterval = setInterval(()=>{
                if(position <= 360){
                    isJumping = false;
                    clearInterval(dawnInterval);
                }
                position -= 10;

                dino.style.bottom = position + `px`;
            },20);
        } else{

            position += 10;
            dino.style.bottom = position + `px`;
        }
    },20);

}  

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1300;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + `px`;
    background.appendChild(cactus);

    let leftIterval = setInterval(()=> {
        if(cactusPosition < 5){
            clearInterval(leftIterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 3 && cactusPosition < 60 && position < 400 ){
            clearInterval(leftIterval);
            document.body.innerHTML = `<h1 class="game-over">você perdeu</h1>`;
        } else{
            cactusPosition -= 10; 
            cactus.style.left = cactusPosition + `px`;
        }
    },20);

    setTimeout(createCactus,randomTime);
}

createCactus();

document.addEventListener('keyup', pressUp);