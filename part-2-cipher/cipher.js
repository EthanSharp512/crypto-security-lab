let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = "";



function shift(n) {
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}


function encode(message, num) {
    shift(num)

    let result = [];
    message = message.toLowerCase();
    let words = message.split(" ")

    for (let i = 0; i < words.length; i++) {
        let index = alphabet.indexOf(words[i]);
        result += newalpha[index];
        for (let j = 0; j < words[i].length; j++) {
            let word = words[i]
            
            
        }
        
    }
    return result
}


console.log(encode("Hello Ethan", 1))



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
//     "z": "/"
// }
