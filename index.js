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

snacks = ["crackers", "gouda", "thyme"]
soup = ["tomato soup", "cheddar", "oyster", "crackers", "gouda"]
ingredients = ["garlic", "rosemary", "bread"]

function findTheCheese(ingre) {
  var cheeses = ["cheddar", "gouda", "camembert"]
  for (var c = 0; c < ingre.length; c++){ 
    for ( var i = 0; i < cheeses.length; i++){ 
if (cheeses[i] === ingre[c]) {
  return ingre[c]
      }
   }
}
   return "no cheese!"

}


function wordsWithB(words) {
 for(var c = 0; c < words.lenth; c++) {
   if(words[c][0] === "b") { 
     return words[c][0]
   }
 }
 
 



}


    








