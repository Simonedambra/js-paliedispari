'use strict';

let pariDispari = prompt('inserisci pari o dispari')
let user = prompt('inserisci un numero tra 1 e 5')
let numberComputer = Math.floor((Math.random() * 5) + 1);
let numeroUser = parseInt(user)

pariDispari.toLocaleLowerCase
let num = (numeroUser + numberComputer);

if (pariDispari === 'pari' && num % 2 === 0) {

    console.log('utente vince con pari')
    console.log(num);
} else if (pariDispari === 'dispari' && num % 2 !== 0) {

    console.log('utente vince con dispari')
    console.log(num);
} else {
    console.log('computer vince')
}

