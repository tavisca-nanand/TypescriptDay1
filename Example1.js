var names = new Array();
names.push("abcd");
names.push("abcde");
names.push("ab");
names.push("bdc");
console.log("Sorted Names :-");
names.sort(function (a, b) { return a.length - b.length; }).forEach(function (v, i) {
    console.log(v);
});
console.log();
console.log("Revere Names :-");
names.reverse().forEach(function (v, i) {
    console.log(v);
});
