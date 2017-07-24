
var arr =  process.argv.slice(2);

var reversed = arr.map(function reverse(arr) {
    if (arr === "") {
        return "";
      }
    else {
       return reverse(arr.substr(1)) + arr.charAt(0);
}
});

reversed.forEach(function(string) {
  console.log(string)
});
