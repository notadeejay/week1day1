
function loopyLighthouse(range, markers){
  var output;
  for(var i = range[0]; i < range[1] + 1; i++) {
    output = '';
    var number;
    var term;
    for(var j=0; j<markers.length;j++){
      number = markers[j].number;
      term = markers[j].term;
      if(i%number === 0){
        output+=term;
      }
    }
    if(output === '') {
      output+=i;
    }
    console.log(output);
  }
}

loopyLighthouse([15, 90], [{number: 2, term: "Batty"}, {number : 5, term : "Beacon"}]);
