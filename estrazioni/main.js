function RNG(min, max) {
    var rng = Math.random();
    // rng * (max - min) + min)
    // rng = 0 => min
    // rng = 1 => max
    return Math.trunc(rng * (max - min) + min);
}
function RNGDec(min, max, precision) {
    if (!Number.isInteger(precision)) {
        throw new Error('Error "precision must be an Integer"');
    }
    var rng = Math.random();
    var risultato = rng * (max - min) + min;
    return risultato.toFixed(precision);
}
function RNGSequence(len, min, max) {
    if (len > max - -min) {
        console.error("cannon find " + len + " numbers between " + min + " and " + max);
        return;
    }
    var res = [];
    while (res.length < len) {
        var rn = RNG(min, max);
        // con il comando .includes si va a controllare se rn è gia presente nell'array res[].
        if (res.includes(rn)) {
            continue;
        }
        res.push(rn);
    }
    return res;
}
var ruote = [
    "Bari",
    "Cagliari",
    "Firenze",
    "Genova",
    "Milano",
    "Napoli",
    "Palermo",
    "Roma",
    "Torino",
    "Venezia",
    "Nazionale",
];
var estrazioni = {};
for (var _i = 0, ruote_1 = ruote; _i < ruote_1.length; _i++) {
    var ruota = ruote_1[_i];
    var estrazione = RNGSequence(5, 1, 91);
    estrazioni[ruota] = estrazione;
}
function createRuotaCnt(ruotaName, estrazioni) {
    var ruotaDiv = document.createElement("div");
    ruotaDiv.className = "ruota " + ruotaName.toLowerCase();
    var nameH2 = document.createElement("h2");
    nameH2.className = "ruota-title";
    nameH2.innerText = ruotaName;
    ruotaDiv.appendChild(nameH2);
    for (var _i = 0, estrazioni_1 = estrazioni; _i < estrazioni_1.length; _i++) {
        var num = estrazioni_1[_i];
        var numP = document.createElement("p");
        numP.innerText = " " + num;
        var numDiv = document.createElement("div");
        numDiv.className = "ruota-estrazione";
        ruotaDiv.appendChild(numP);
        ruotaDiv.appendChild(numDiv);
    }
    return ruotaDiv;
}
var container = document.getElementById("cnt");
if (container) {
    var pre = document.createElement("pre");
    for (var _a = 0, ruote_2 = ruote; _a < ruote_2.length; _a++) {
        var ruota = ruote_2[_a];
        var ruotaEstrazioni = estrazioni[ruota];
        var ruotaDiv = createRuotaCnt(ruota, ruotaEstrazioni);
        container.appendChild(ruotaDiv);
    }
}
