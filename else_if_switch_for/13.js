const a = 5;
const b = 5;

if (a <= b) {
    console.log('daugiau');
} else {
    console.log('nėra daugiau');
}

const c = 10;
const d = 12;

if (c === d) {
   console.log('lygu');
} else {
    console.log('nelygu');
}

const pinigine = -10;

if (pinigine > 0) {
    console.log('turiu pinigu');
} else if (pinigine === 0) {
    console.log('neturiu pinigų');
} else {
    console.log('esu skoloje');
}

const akys = "zalios";

if (akys === 'zalios') {
    console.log('esi ragana');
} 

console.log('-------else if-----------------');

const didelis = 8;
const dydis = 5;
const prinokimas = 'neprinokes';

if (dydis >= didelis && prinokimas === 'prinokęs') {
    console.log('didelis prinokęs pomidoras');
} else if (dydis < didelis && prinokimas !== 'prinokęs') {
    console.log('mazas prinokes pomidoras');
} else if (dydis >= didelis && prinokimas !== 'prinokęs') {
    console.log('didelis neprinokes pomidoras');
} else {
    console.log('mazas neprinokes pomidoras');
}

console.log('--------else if----------------');


const day = 10;

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalis');
} else {
    console.log('tokia saaites diena neegzistuoja');
}

console.log('----------switch--------------');

const diena = 6;

switch (diena) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2: 
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    default:
        console.log('tokia diena neegzistuoja');

}

console.log('--------for---------------');

const months = ['sausis', 'vasaris', 'Kovas', 'Balandis', 'geguze', 'Birzelis', 'Liepa'];

console.log('Metu menesiai: ');

for (let i = 0; i < months.length; i++) {
    console.log((i + 1) + '. ' + months[i]);
}

console.log('--------for---------------');

const nuo1 = 0;
const iki1 = 4;
let suma1 = 0;

for (let i = nuo1; i <= iki1; i++) {
    suma1 = suma1 + i;
}

console.log(`Skaiciu nuo ${nuo1} iki ${iki1} suma yra ${suma1}.`);

console.log('--------for---------------');

const nuo2 = 1;
const iki2 = 5000;
let suma2 = 0;

for (let i = nuo2; i <= iki2; i++) {
    suma2 = suma2 + i;
}

console.log(`Skaiciu nuo ${nuo2} iki ${iki2} suma yra ${suma2}.`);

console.log('--------for---------------');

const text = 'abcdef';
let reverseText = '';

for (let i = 0; i < text.length; i++) {
    const symbol = text[text.length - 1 -i];
    reverseText = reverseText + symbol;
}

console.log(`${text} --> ${reverseText}`);

console.log('--------for---------------');

const text2 = 'pomidoras';
let reverseText2 = '';

for (let i = 0; i < text2.length; i++) {
    const symbol = text2[i];
    reverseText2 = symbol + reverseText2;
}

console.log(`${text2} --> ${reverseText2}`);

console.log('--------for---------------');

const text3 = 'alus';
let reverseText3 = '';

for (let i = text3.length - 1; i >= 0 ; i--) {
    const symbol = text3[i];
    reverseText3 =  reverseText3 + symbol;
}

console.log(`${text3} --> ${reverseText3}`);


