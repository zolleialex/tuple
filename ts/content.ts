export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	let mytuple : [number,string,string,string];
	mytuple=[10, "Hello", "World", "typeScript"]; 
	res.write("<p>Items before push: "+ mytuple.length+"</p>");   // visszaadja a tuple méretét 

	mytuple.push(12);                                   // hozzáad egy értéket a tuplehoz
	res.write("<p>Items after push: " + mytuple.length+"</p>");
	res.write("<p>Items before pop " + mytuple.length+"</p>");
	res.write("<p>"+mytuple.pop()+" popped from the tuple </p>"); // kiszedi és visszadja az utolsó elemet
	res.write("<p> Items after pop: " + mytuple.length+"</p>");
	// Tuplik frissitése
	let mytuple2 = [10, "Hello", "World", "typeScript"]; // tuple létrehozása
	res.write("<p>Tuple value at index 0: " + mytuple[0]+"</p>");

	// tuple 0. elemének megváltoztatása
	mytuple[0] = 121;
	res.write("<p>Tuple value at index 0 changed to: " + mytuple[0]+"</p>");
        res.write("<a href='https://github.com/zolleialex/tuple' target='_blank'>" +
            "https://github.com/zolleialex/tuple</a><br>");
        res.end();
    }
}
