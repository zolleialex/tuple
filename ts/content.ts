
export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
		let mytuple = [10, "Hello", "World", "typeScript"]; 
		res.write("Items before push " + mytuple.length);   // visszaadja a tuple méretét 

		mytuple.push(12);                                   // hozzáad egy értéket a tuplehoz
		res.write("Items after push " + mytuple.length);
		res.write("Items before pop " + mytuple.length);
		res.write(mytuple.pop() + " popped from the tuple"); // kiszedi és visszadja az utolsó elemet
		res.write("Items after pop " + mytuple.length);
		// Tuplik frissitése
		let mytuple2 = [10, "Hello", "World", "typeScript"]; // tuple létrehozása
		res.write("Tuple value at index 0 " + mytuple[0]);

		// tuple 0. elemének megváltoztatása
		mytuple[0] = 121;
		res.write("Tuple value at index 0 changed to   " + mytuple[0]);
		// Üres tuple
		let tup = [] ;
		tup[0] = 12 ;
		tup[1] = 23 ;

		res.write(tup[0]) ;
		res.write(tup[1]);

        
        res.write("<a href='https://github.com/zolleialex/tuple' target='_blank'>" +
            "https://github.com/zolleialex/tuple</a><br>");
        res.end();
    }
}