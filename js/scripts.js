var elGameForm = document.querySelector('.game__form');
var elGameInput = elGameForm.querySelector('.game__input');
var elGameButton = elGameForm.querySelector('.game__button');

var elGameHeart = document.querySelector('.game__hearts');
var elGameHelp = document.querySelector('.game__help');
var elGameEntered = document.querySelector('.game__entered');

var test = Math.floor(Math.random() * (100 - 1 + 1) + 1);
console.log(test);

var hearts = 6;


elGameForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  var inputNumber = Number(elGameInput.value);
  elGameEntered.textContent = inputNumber;

  var little = inputNumber > test;
  var much = inputNumber < test;
  // var welldone = inputNumber = test;


  if(little){
    elGameHelp.textContent = `Yashirin son kiritilgan sondan kichik`;
  } else if(much){
    elGameHelp.textContent = 'Yashirin son kiritilgan sondan katta';
  }else{
    elGameHelp.textContent = 'Siz yutdingiz!';
  }

  hearts-=1;
  elGameHeart.textContent = hearts;
  if(hearts === 0){
    elGameInput.disabled = true;
    elGameButton.disabled= true;
    elGameHelp.textContent = 'Siz yutqizdingiz :(';
  }


})