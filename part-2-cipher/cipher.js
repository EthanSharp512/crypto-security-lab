var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

function shift(n){
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
    console.log(newalpha)
}

shift(1)

// function encode(message){
//     let result = "";
//     message = message.toLowerCase();
//     for (let i = 0; i < message.length; i++){
//         let index = alphabet.indexOf(message[i]);
//         result += newalpha[index];
//     }
//     return result;
// }