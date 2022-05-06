let code = {
    "a": "-",
    "b": "_",
    "c": "=",
    "d": "+",
    "e": "[",
    "f": "]",
    "g": "|",
    "h": "}",
    "i": ":",
    "j": ";",
    "k": "!",
    "l": "@",
    "m": "#",
    "n": "$",
    "o": "%",
    "p": "^",
    "q": "&",
    "r": "*",
    "s": "(",
    "t": ")",
    "u": "<",
    "v": ">",
    "w": ",",
    "x": ".",
    "y": "?",
    "z": "/",
    " ": "0"
}
let alphabet = "abcdefghijklmnopqrstuvwxyz ";
let newalpha = "";
let result = "";

function encode(message, number) {

    
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + number) % alphabet.length;
        newalpha += alphabet[offset];
    }
    
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    
    inverse(code) {
        let retobj = {};
        for(var key in obj){
          retobj[code[key]] = key;
        }
        console.log(retobj);
    }
}


encode("Hello Ethan", 1)



// function shift(num) {
// 	for (let i = 0; i < alphabet.length; i++){
// 		let offset = (i + num) % alphabet.length;
// 		newalpha += alphabet[offset];
// 	}
// }
