var names = new Array();
names.push("James Bond");
names.push("Ethan Hunt");
names.push("Indiana Jones");
names.push("Jason Bourn");
names.sort(function (a, b) { return a.length - b.length; }).reverse().forEach(function (v, i) {
    console.log(v);
});
