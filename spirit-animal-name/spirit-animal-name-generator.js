/*console.log('Hello! Want to know your animal spirit name!');

const spiritAnimals = [
  'The Playfull Coyote',
  'The Curious Cat',
  'The Transformed Butterfly',
  'Bear-The Leader',
  'An Innocent Deer',
  'The Peaceful Dolphin',
  'The Transformational Dragonfly',
  'The Attentive Fox',
  'Horse-The Driving Force',
  'The Powerful Lion',
];

const submit = document.getElementById('submit');
let input = document.getElementById('input-text');
const clear = document.getElementById('clear');
const output = document.getElementById('output');
//const form = document.getElementById('spirit-form');
const radio = document.getElementById('event-type');

console.log(input);
function getRandomNumber() {
  return Math.floor(Math.random() * spiritAnimals.length);
}

function displaySpiritName() {
  const spiritAnimal = spiritAnimals[getRandomNumber()];

  console.log('in display-spirit if');

  //form.appendChild(output).innerHTML = userTemplateString;
  output.innerHTML = spiritAnimal;
  /* } else {
    console.log('in display-spirit else');
    output.innerHTML = spiritAnimal;
  }
  /*if (!input) {
    console.log('there is not input here');
  }
}

let eventType;
const radios = document.getElementsByName('event-type');
console.log('radios' + radios);

function trackRadioClick(event) {
  //const userInput = input;
  const spiritAnimal = spiritAnimals[getRandomNumber()];
  //eventType = event.target.value;
  /*console.log('in trackradio: event type is: ' + eventType);
  if (eventType === 'click') {
    console.log('in click');
    submit.addEventListener('click', () => {
  console.log(event);
  //const userTemplateString = `${input} - ${spiritAnimal}`;
  if (event === 'click') {
    console.log('in click');
    submit.addEventListener('click', displaySpiritName);
  }
  //output.innerText = input.value + ' ' + spiritAnimal;
  else if (event == 'mouseover') {
    console.log('in mouseever');
    submit.addEventListener('onmouseover', displaySpiritName);
  }
  //output.innerHTML= /* });
  //submit.removeEventListener('mouseover', displaySpiritName); //input.removeEventListener('onBlur', displaySpiritName);
  else if (event === 'change') {
    console.log('in change');
    input.addEventListener('onchange', displaySpiritName);
  }
  //button.removeEventListener('click', displaySpiritName);
  //input.removeEventListener('onBlur', displaySpiritName);
  /* } else if (radio.id === 'change') {
    console.log(eventType);
    console.log('in change');
    submit.addEventListener('onChange', displaySpiritName);
    //button.removeEventListener('click', displaySpiritName);
    //button.removeEventListener('mouseover', displaySpiritName);
  }
}

radios.forEach((radio) => {
  console.log('in radios.foreach:   ' + radio.id);
  trackRadioClick(radio.id);
});

/*
//button.addEventListener('click', myButtonFunction);
function myButtonFunction() {
  const spiritAnimal = spiritAnimals[getRandomNumber()];
  console.log('in button click');
  //  const userTemplateString = `${userInput} - ${spiritAnimal}`;
  output.textContent = spiritAnimal;
}
//button.addEventListener(eventType, displaySpiritName(eventType));
clear.addEventListener('click', function () {
  console.log('in clear');
  input.value = '';
  output.textContent = '';
});*/
console.log('Hello! Want to know your animal spirit name!');

const spiritAnimals = [
  'The Playfull Coyote',
  'The Curious Cat',
  'The Transformed Butterfly',
  'Bear-The Leader',
  'An Innocent Deer',
  'The Peaceful Dolphin',
  'The Transformational Dragonfly',
  'The Attentive Fox',
  'Horse-The Driving Force',
  'The Powerful Lion',
];
/***********GETTING FORM ELEMENTS******************************** */
const submit = document.getElementById('submit');
let input = document.getElementById('input-text');
const clear = document.getElementById('clear');
const output = document.getElementById('output');
/******************GETTING RADIO BUTTONS ************************* */
const hover = document.getElementById('mouseover');
const click = document.getElementById('click');
const inputR = document.getElementById('change');

/*********************FUNCTIONS************************************ */
function getRandomNumber() {
  return Math.floor(Math.random() * spiritAnimals.length);
}

function displaySpiritName() {
  const spiritAnimal = spiritAnimals[getRandomNumber()];
  output.innerHTML = `${input.value} ${spiritAnimal}`;
}
/******************RADIO BUTTONS CHECK****************************** */
hover.onclick = function onSelect() {
  if (hover.checked) {
    input.removeEventListener('keyup', displaySpiritName);
    submit.removeEventListener('click', displaySpiritName);
    input.addEventListener('mouseover', displaySpiritName);
  }
};
click.onclick = function onSelect() {
  if (click.checked) {
    input.removeEventListener('mouseover', displaySpiritName);
    input.removeEventListener('keyup', displaySpiritName);
    submit.addEventListener('click', displaySpiritName);
  }
};
inputR.onclick = function onSelect() {
  if (inputR.checked) {
    input.removeEventListener('mouseover', displaySpiritName);
    submit.removeEventListener('click', displaySpiritName);
    input.addEventListener('keyup', displaySpiritName);
  }
};
/***************** CLEAR ****************************** */
clear.addEventListener('click', function () {
  input.value = '';
  output.textContent = '';
});
