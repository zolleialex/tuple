"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	let mytuple = [10, "Hello", "World", "typeScript"]; 
	res.write("<p>Tuple elemei:</p>");
	var i;
	for (i = 0; i < mytuple.length; i++) { 
  		res.write(mytuple[i]+",");
	}
	res.write("<p>Elemek száma " + mytuple.length+"</p>");
	mytuple.push(12); // hozzáad egy értéket a tuplehoz
	res.write("<p>Hozzáadunk egy elemet: </p>");
	var y;
	for (y = 0; y < mytuple.length; y++) { 
  		res.write(mytuple[i]+",");
	}	    
	res.write("<p>"+mytuple.pop()+" kitörölve a tupleból</p>"); // kiszedi és visszadja az utolsó elemet
	res.write("<p>Elemek száma " + mytuple.length+"</p>");
	// Tuplik frissitése
	res.write("<p>Tuple 0. elemének az értéke: " + mytuple[0]+"</p>");
	// tuple 0. elemének megváltoztatása
	mytuple[0] = 121;
	res.write("<p>Tuple 0. eleme megváltoztatva: " + mytuple[0]+"</p>");
        res.write("<a href='https://github.com/zolleialex/tuple' target='_blank'>" +
            "https://github.com/zolleialex/tuple</a><br>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
