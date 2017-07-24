var input = process.argv.slice(2);

var translate = function pigLatin(input) {
var newWord = input.substr(1) + input.charAt(0) + 'ay';
return newWord;
}

function print(input) {
var output = "";
for (var i = 0; i < input.length; i++) {
 output += (translate(input[i])) + " ";
}
return output;
}

console.log(print(input));


