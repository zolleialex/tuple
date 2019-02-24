
export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		let mytuple = [10, "Hello", "World", "typeScript"]; 
		res.write("<h1> Items before push " + mytuple.length+"</h1>");   // visszaadja a tuple méretét 

		mytuple.push(12);                                   // hozzáad egy értéket a tuplehoz
		res.write("<h1> Items after push " + mytuple.length+"</h1>");
		res.write("<h1> Items before pop " + mytuple.length+"</h1>");
		res.write("<h1>"+"mytuple.pop() + " popped from the tuple +"</h1>"); // kiszedi és visszadja az utolsó elemet
		res.write("<h1> Items after pop " + mytuple.length+"</h1>");
		// Tuplik frissitése
		let mytuple2 = [10, "Hello", "World", "typeScript"]; // tuple létrehozása
		res.write("<h1> Tuple value at index 0 " + mytuple[0]+"</h1>");

		// tuple 0. elemének megváltoztatása
		mytuple[0] = 121;
		res.write("<h1> Tuple value at index 0 changed to   " + mytuple[0]+"</h1>");
		// Üres tuple
		let tup = [] ;
		tup[0] = 12 ;
		tup[1] = 23 ;
        res.write("<a href='https://github.com/zolleialex/tuple' target='_blank'>" +
            "https://github.com/zolleialex/tuple</a><br>");
        res.end();
    }
}