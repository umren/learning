// human
let mica = Object.create(null);
Object.defineProperty(mica, "name", {
  value: "Mica",
  writable: false,
  configurable: true,
  enumerable: true
});

mica.name = "Tricky";

console.log(mica); // Mica

function getAge() {
  return `${this.fullAge} years.`;
}

function setAge(age) {
  this.fullAge = age;
}

Object.defineProperty(mica, "age", {
  get: getAge,
  set: setAge,
  configurable: true,
  enumerable: true
});

mica.age = 13;

console.log(mica.age);

console.log(Object.getOwnPropertyNames(mica));

// krogan
let krog = {
  first_name: "Krog",
  last_name: "Whale",
  age: 333,
  gender: "Unknown",
  get name() {
    return `${this.first_name} ${this.last_name}`;
  },
  set name(new_name) {
    names = new_name.trim().split(/\s+/);
    this.first_name = names["0"] || "";
    this.last_name = names["1"] || "";
  }
};

console.log(krog.name);

krog.attack = function(person) {
  return `${this.name}: Die ${person} Fool!`;
};

console.log(krog.attack("Michelle"));
