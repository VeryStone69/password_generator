let arr2 = [1,2,3,4,5,6,7,8,9,0];
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr5 = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];


document.getElementById("param-1").oninput = function (){
// Ползунок - длина массива
   document.getElementById('password-length').innerHTML = this.value
}

document.getElementById("generator").onclick = generatePass;



function generatePass() {
    let result = [];
    if (document.getElementById("param-2").checked) {
        result = result.concat(arr2);
        // включены ли цифры
    }
    if (document.getElementById("param-3").checked) {
        result = result.concat(arr3);
        // включены ли строчные буквы
    }
    if (document.getElementById("param-4").checked) {
        result = result.concat(arr4);
        // включены ли прописные буквы
    }
    if (document.getElementById("param-5").checked) {
        result = result.concat(arr5);
        // включены ли спецсимволы
    }
    result.sort(compareRandom);     // перемешиваю результирующий массив

    document.getElementById('out').innerHTML = '';
        for (k = 0; k < 6; k++) {
            let pass = '';                  // будующий пароль
            let arrLength = result.length;  // длина рез. массива
            let passLength = parseInt(document.getElementById('param-1').value);
            for (i = 0; i < passLength; i++) {
                // цикл по длине пароля
                // выбираю случайные значения из массива result
                pass += result[randomInteger(0, arrLength - 1)];
            }
            document.getElementById('out').innerHTML += `<p>${pass}</p>`; // вывод пароля
        }
}

function compareRandom() {
    return Math.random() - 0.5;
}
const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));