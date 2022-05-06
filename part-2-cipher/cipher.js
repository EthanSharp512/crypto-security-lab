// let code = {
//     "a": "-",
//     "b": "_",
//     "c": "=",
//     "d": "+",
//     "e": "[",
//     "f": "]",
//     "g": "|",
//     "h": "}",
//     "i": ":",
//     "j": ";",
//     "k": "!",
//     "l": "@",
//     "m": "#",
//     "n": "$",
//     "o": "%",
//     "p": "^",
//     "q": "&",
//     "r": "*",
//     "s": "(",
//     "t": ")",
//     "u": "<",
//     "v": ">",
//     "w": ",",
//     "x": ".",
//     "y": "?",
//     "z": "/",
//     " ": "0"
// }
let alphabet = "abcdefghijklmnopqrstuvwxyz ";
let newalpha = "";
let result = "";

function shift(num) {
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + num) % alphabet.length;
		newalpha += alphabet[offset];
	}
}

function encode(message, number) {

    shift(number);

    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    console.log(result);
}

encode("I love cryptography", 3);

// function secondEncoder(result){
//     let secondEncoded = "";
//     let dictionary = {};

//     for(let i = 0; i < alphabet.length;i++){
//         dictionary[newalpha[i]] = code[i];
//     }

//     for (let i = 0; i < result.length; i++) {
//         let char = result.charAt(i);
        
//         if(dictionary.hasOwnProperty(char)){
//             secondEncoded += dictionary[char];
//         }else{
//             secondEncoded += char;
//         }
//     }

//     return secondEncoded;
// }

// console.log(encode("Hello Ethan", 1))
// secondEncoder();


