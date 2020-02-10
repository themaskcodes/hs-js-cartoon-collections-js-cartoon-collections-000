var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var rollcall = "";
  for (var i = 0; i < dwarves.length; i++) {
    rollcall = rollcall + `${i+1}. ${dwarves[i]} `;
    
  }
  return rollcall;
  
}


planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet (planeteerCalls) {
	var newCalls = [];
	for (var i = 0; i < planeteerCalls.length; i++) {
		var call = planeteerCalls[i].toUpperCase() + "!";
		newCalls.push(call);
	}
	return newCalls;
}


shortWords = ["wind", "fire"];
assortedWords = ["earth", "wind", "heart", "fire"];

function longPlaneteerCalls(words) {
  var result = false
for(var i = 0; i < words.length; i++) {
	if(words[i].length > 4) {
	result = true	}
}
return result
}



function findTheCheese(maybeCheese) {
  var cheeses = ["cheddar", "gouda", "camembert"]
  //iterate over maybeCheese check if any of the items inside of maybeCheese exists in cheeses, and if they do, return that cheese. and if not return noCheese.
  
}

    








