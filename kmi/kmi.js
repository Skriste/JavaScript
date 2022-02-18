let atsParag1 = document.getElementsByTagName("p")[0];
let form = document.querySelector("form");

function getKMI(num1, num2) {
    return num2 * 10000 / (num1 * num1);
}

function KMIrez(kmiInd) {
    let result = "";
    if (kmiInd < 18.5) {
        result = "svoris yra nepakankamas";
    } else if (kmiInd >= 18.5 && kmiInd < 25) {
        result = "svoris yra normalus"
    } else if (kmiInd >= 25 && kmiInd < 30) {
        result = "turite antsvorio"
    } else {
        result = "esate nutukęs - susirūpinkite"
    } return result;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let ugis = +e.target.elements.ūgis.value;
    let svoris = +e.target.elements.svoris.value;
    atsParag1.textContent = "Jūsų KMI yra: " + getKMI(ugis, svoris).toFixed(2) + " - " + KMIrez(getKMI(ugis, svoris));
}

)
