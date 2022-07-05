//PART 2

// Callbacks
function titlelize(namesArray, callback) {
    let titleizedArray = namesArray.map((name) => `Mx. ${name} Jingleheimer Schmidt`);
    callback(titleizedArray);
}

// invoking the function with callback
titlelize(['Mary', 'Brian', 'Leo'], (names) => {
    names.forEach((name) => console.log(name));
});


//Constructors, Prototypes, and this

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
    this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function () {
    //prints out a random trick
    let randomIndex = Math.floor(Math.random() * this.tricks.length);
    let trick = this.tricks[randomIndex];
    console.log(`${this.name} is ${trick}!`);
};

//Elephant Function Invocation

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(elephant) {
    console.log(`${elephant.name} is trotting by!`);
}

herd.forEach(paradeHelper);

// Closures

function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return function (food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};
