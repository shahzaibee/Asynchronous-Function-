"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BirthDayParty() {
    console.log("Birthday Party will be start as soon as possible");
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            let party = 10;
            if (party == 10) {
                resolve("Come before 10 o'clock otherwise the party will be over");
            }
            else {
                reject("The party is over, you were supposed to arrive at 10 o'clock");
            }
        })
            .then((res) => {
            console.log(res);
        })
            .catch((rej) => {
            console.log(rej);
        });
    }, 3000);
}
BirthDayParty();
