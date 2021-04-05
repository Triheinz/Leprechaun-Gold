let rainbow;
let introScreen;
let rainbowScreen;
let gameOverScreen;

function buildDom(htmlString){
const temDiv = document.createElement('div');
tempDiv.innerHTML = htmlString;
return temDiv.children [0];
}

function createIntroScreen() {
  introScreen = buildDom(`<rainbow>
      <h1>Leprechaum Gold</h1>
      <button> Start </button>
    </rainbow>
    `);

    document.body.appendChild(introScreen);
    const startButton = introScreen.querySelector('button');

    startButton.addEventListener('click',function() {
      console.log('Start Game');
      removeIntroScreen();
    });
}

function removeIntroScreen() {
  introScreen.remove();
  console.log(introScreen);
}

window.addEventListener('load',()=>{
  let rainbow= new rainbow()
});
