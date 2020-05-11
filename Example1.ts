let names: Array<string> = new Array<string>();
names.push("abcd");
names.push("abcde");
names.push("ab");
names.push("bdc");

console.log("Sorted Names :-");
names.sort((a, b) => a.length - b.length).forEach(function (v, i) {
    console.log(v);
});

console.log();

console.log("Revere Names :-");
names.reverse().forEach((v:string, i:number)=> {
    console.log(v);
});