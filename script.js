let time = new Date();
const op = ["a", "c", "b", "d", "f", "e","a", "c", "b", "d", "f", "e"];
let first, sec, thr, fort;
let num1, num2;
document.querySelector(".clock").innerHTML = `${time.getHours()}:${time.getMinutes()}`;
function rand() {
    num1 = Math.floor(Math.random() * 9);
    num2 = Math.floor(Math.random() * 9);
}


function changing() {
    console.log(num1,num2,first,sec);
    for (let i = 1; i <= 6; i++) {
        rand();
        first = op[num1];
        sec = op[num2];
        thr = op[num2 + 1];
        document.querySelector(`.child${i}`).style.background = `#${num2}${first}${num1}${sec}${thr}${num1 + 3}`;
    }

    for (let j = 7; j <=13 ; j++) {
        rand();
        first = op[num1];
        sec = op[num2];
        thr = op[num2 + 1];
        document.querySelector(`.child${j}`).style.background = `#${first}${num1}${num2}${sec}${num1 + 3}${thr}`;
    }


    for (let k = 14; k <= 24; k++) {
        rand();
        first = op[num1];
        sec = op[num2];
        thr = op[num2 + 1];
        document.querySelector(`.child${k}`).style.background = `#${num1 + 3}${num2}${first}${sec}${thr}${num1}`;
    }
}

function openfun(){
    window.open("https://github.com/adithyanap/weather-app/tree/main");
}
setInterval(changing, 500);
main()