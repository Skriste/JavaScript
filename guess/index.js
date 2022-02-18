function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

}

let randNum = rand(0, 100);
console.log(randNum);

function numCheck(rNum, ivestasSk) {
    let ats = "";
    if (ivestasSk == rNum) {
        ats ='atspejai';
    } else if (ivestasSk > rNum) {
        ats = 'Spejamas skaicius yra mazesnis';
    } else if (ivestasSk < rNum) {
        ats = "spejamas skaicius yra didesnis";
    }
    return ats;
}

let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target.elements.number.value);
    
    let spejimas = e.target.elements.number.value;
    console.log(numCheck(randNum, spejimas));
}
);