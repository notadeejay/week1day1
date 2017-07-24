var password = process.argv.slice(2);

var scramble = function obfuscate(password) {
  var newPswd = '';

  for (var i = 0; i < password.length; i++) {
    newPswd = password.replace(/a/g, 4).replace(/e/g, 3).replace(/o/g, 0).replace(/l/g, 1);
  }

  return newPswd;
 }

function print(password) {
var output = "";
for (var i = 0; i < password.length; i++) {
 output += (scramble(password[i]));

}
return output;
}

console.log(print(password));
