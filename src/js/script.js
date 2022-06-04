//minimal//

//First task//

/*

1) function name () {

}

name ();

2) let function name () {

};

name ();

3) let name = () => expresion;

*/

//Second task//

//Third task//

let firstNum = +prompt('Введи перше число');
let secondNum = +prompt('Введи друге число');

function firstTask (a, b) {
    if (a < b) {
        console.log('-1');
    } else if (a > b) {
        console.log('1');
    } else {
        console.log('0');
    }
}

firstTask (firstNum, secondNum);

//Fourth task//

let num = +prompt('Введи число');
let x = 1;

for(i = num; i > 0; i--) {
    console.log(i);
    x = x * i;
}

console.log(x);

//Fifth task//

let firstNumber = +prompt('Введи перше число');
let secondNumber = +prompt('Введи друге число');
let thirdNumber = +prompt('Введи третє число');
let numbers;

function fifthTask (a, b, c) {
    numbers = a + '' + b + '' + c;
    alert(+numbers);
}

fifthTask(firstNumber, secondNumber, thirdNumber);

//Sixth task//

let heigth = +prompt('Введи висоту');
let width = +prompt('Введи ширину');
let ploshchaKvadrata;
let ploshchaPryzmokutnuka;

function sixthTask (a, b) {
    // if (a == 0 || b == 0 || a == b) {
    //     ploshchaKvadrata = a * a;
    //     console.log('Площа квадрата дорівнює' + ' ' + ploshchaKvadrata);
    // } else if (a > b || a < b || a == b) {
    //     ploshchaPryzmokutnuka = a * b;
    //     console.log('Площа прямокутника дорівнює' + ' ' + ploshchaPryzmokutnuka);
    // }

    switch(true) {
        case(a == 0) : 
            ploshchaKvadrata = b * b;
            console.log('Площа квадрата дорівнює' + ' ' + ploshchaKvadrata);
        break;
        case(b == 0) :
            ploshchaKvadrata = a * a;
            console.log('Площа квадрата дорівнює' + ' ' + ploshchaKvadrata);
        break;
        case(a == b || b == a) :
            ploshchaKvadrata = a * a;
            console.log('Площа квадрата дорівнює' + ' ' + ploshchaKvadrata);
        break;
        case(a > b || a < b || a == b) :
            ploshchaPryzmokutnuka = a * b;
            console.log('Площа прямокутника дорівнює' + ' ' + ploshchaPryzmokutnuka);
        break;
        default: ;
    }
}

sixthTask (heigth, width);

//Norma//

//First task//

let l = +prompt('Введи число');
let s = 0;

function normaFirst (a) {
    for(i = 1; i < l; i++) {
        if ( l % i == 0) {
            s = s + i;
        }
    }

    if ( l == s) {
        console.log('Число досконале');
    } else {
        console.log('Число не є досконалим');
    }
}

normaFirst (l);

//Second task//

// let g = +prompt('Введи перше число');
// let h = +prompt('Введи друге число');
// let p = 0;

// function normaSecond (a, b) {
//     for(i = g; i <= h; i++) {
//         for(j = 1; j < i; j++) {
//             if ( i % j == 0) {
//                 p = p + i;
//             }
//         }

//         if ( i == p) {
//             console.log('Число досконале' + ' ' + i);
//         } else {
//             console.log('Число не є досконалим');
//         }
//     }
// }

// normaSecond(g, h);