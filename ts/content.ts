let mytuple = [10, "Hello", "World", "typeScript"]; 
console.log("Items before push " + mytuple.length);   // visszaadja a tuple méretét 

mytuple.push(12);                                   // hozzáad egy értéket a tuplehoz
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // kiszedi és visszadja az utolsó elemet
console.log("Items after pop " + mytuple.length);
// Tuplik frissitése
let mytuple2 = [10, "Hello", "World", "typeScript"]; // tuple létrehozása
console.log("Tuple value at index 0 " + mytuple[0]);

// tuple 0. elemének megváltoztatása
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
// Üres tuple
let tup = [] ;
tup[0] = 12 ;
tup[1] = 23 ;

console.log(tup[0]) ;
console.log(tup[1]);