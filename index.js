"use strict";
// Async await
Object.defineProperty(exports, "__esModule", { value: true });
const wait = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function makeBiryani() {
    console.log("Biryani will be cooked in 30 minutes");
    await wait();
    console.log("lets making biryani");
    await wait();
    console.log("Biryani ");
}
makeBiryani();
// Example no 1  callbacks
function EatingBiryani(callback) {
    console.log("Biryani will be cooked in 30 minutes");
    setTimeout(() => {
        callback("Let's go have a cold drink");
    }, 3000);
}
function Coldrink(callback1) {
    console.log(callback1);
}
EatingBiryani(Coldrink);
// Example no 2 callbacks
function makingBiryani(callback) {
    console.log("Biryani will be cooked in 30 minutes");
    setTimeout(() => {
        callback("Biryani is done");
    }, 3000);
}
function Make2(callback1) {
    console.log(callback1);
}
makingBiryani(Make2);
function EatingBiryani_(abcd) {
    setTimeout(() => {
        abcd("Let's eat Biryani");
    }, 5000);
}
function callback2_(call3) {
    console.log(call3);
}
EatingBiryani_(callback2_);
function Coldrinks(cd) {
    setTimeout(() => {
        cd("Let's go have a cold drink");
    }, 7000);
}
function callback2(call) {
    console.log(call);
}
Coldrinks(callback2);
// Example no 3
function makingBiryani1(callback) {
    console.log("Biryani will be cooked in 30 minutes");
    setTimeout(() => {
        callback("Biryani is done");
    }, 3000);
}
function EatingBiryani_1(abcd) {
    setTimeout(() => {
        abcd("Let's eat Biryani");
    }, 5000);
}
function Coldrinks1(cd) {
    setTimeout(() => {
        cd("Let's go have a cold drink");
    }, 7000);
}
makingBiryani1(function (para) {
    console.log(para);
    EatingBiryani_1(function (para2) {
        console.log(para2);
        Coldrinks1(function (para3) {
            console.log(para3);
        });
    });
});
