/* prototypes 1 */
let person = Object.create(null);

person.name = "Default Name";
person.greet = function(person) {
  console.log(`${this.name}: Why, hello there, ${person}.`);
};

let mica = Object.create(person);
mica.age = 19;
mica.gender = "Male";
//mica.greet("Liza"); // default name hello liza
mica.name = "Mica";
//mica.greet("Liza"); // mica hello liza

//console.log(Object.keys(person)); // name, greet
//console.log(Object.keys(mica)); // age, gender, name

/* prototypes 2 */
let kristin = Object.create(person);
kristin.name = "Kristin";
kristin.age = 19;
kristin.gender = "Female";

mica.greet = function(person) {
  console.log(`kek ${person}`);
};

kristin.greet = function(person) {
  console.log(`mek ${person}`);
};

// mica.greet("Yo"); // kek Yo
// kristin.greet("Yo"); // mek Yo
// mica.prototype.greet("yo"); // error
