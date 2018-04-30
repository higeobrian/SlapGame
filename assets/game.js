//Function: adding characters

//vars 

//creating new character with set parameters 
var target = {
    nazi: new Target('Nazi', 100)
}

function Target(name, health) 
{
    this.name = name;
    this.health = health;
    this.items = [];
    this.hits = 0;
    this.
 }

//creating new items with set parameters

function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var items = {
    glue: new Item("glue", -1, "add 1 health"),
    nail: new Item("nail", -2, "add 2 health"),
    weld: new Item("weld", -3, "add 3 health"),
}

//MODIFIERS - damage reduction + pushes items () to nazi.

function giveGlue() {
    target.nazi.items.push(items.glue);
    update();
}

function giveNail() {
    target.nazi.items.push(items.nail);
    update();
}

function giveWeld() {
    target.nazi.items.push(items.weld);
    update();
}


//DAMAGE IMPACT

/** 
var ammo = {
    bullets: new Weapon("Bullets",-1),
    missles: new Weapon("missles",-5),
    lasers: new Weapon("lasers",-10)
}
*/

//is this supposed to be an array?? <======== 
function bullets() {
    target.nazi.health -= 1 * addMods();
    target.nazi.hits += 1;
    update()
}

function missles() {
    target.nazi.health -= 3 * addMods();
    target.nazi.hits += 1;
    update()
}

function lasers() {
    target.nazi.health -= 5 * addMods();
    target.nazi.hits += 1;
    update()
}

//Create a function that will be called, addMods().
//for loop, item array, modify impact.
function addMods(){
var total = 0; 
for (var i = 0; i < target.nazi.items.length; i++) {  
    var item = target.nazi.items[i]; 
    total += item.itemMod; 
} 
return total;
}

//END AND CALL/REFLECT RESULTS

function update() {
    document.getElementById('health').innerText=`${target.nazi.health}`
    document.getElementById('hits').innerText=`${target.nazi.hits}`
    document.getElementById('name').innerText=`${target.nazi.name}`
};

update()

/** 
 * FIX ERRORS: ... do i need to add globals.XXXX()????
 * 
 * game.js:17 Uncaught SyntaxError: Unexpected token }
(index):39 Uncaught TypeError: bullets is not a function
    at HTMLButtonElement.onclick ((index):39)
onclick @ (index):39
(index):40 Uncaught TypeError: missles is not a function
    at HTMLButtonElement.onclick ((index):40)
onclick @ (index):40
(index):41 Uncaught TypeError: lasers is not a function
    at HTMLButtonElement.onclick ((index):41)
onclick @ (index):41
(index):48 Uncaught ReferenceError: glue is not defined
    at HTMLButtonElement.onclick ((index):48)
onclick @ (index):48
(index):49 Uncaught TypeError: nail is not a function
    at HTMLButtonElement.onclick ((index):49)
onclick @ (index):49
(index):50 Uncaught TypeError: weld is not a function
    at HTMLButtonElement.onclick ((index):50)
 */





//function damage 
/** 
var attack = function(bullets, missles, lasers)
{
    this.bullets = bullets;
    this.missles = missles;
    this.lasers = lasers;
}

var modifier = function(name, modifier, description)
{
    this.glue = glue;
    this.nail = nail;
    this.weld = weld;
}

var defense = {
    modify1: new Defense("glue",1),
    modify2: new Defense("nail",2),
    modify3: new Defense("weld",3)
}
 
Function (attack){
    if(this.bullets == 'bullets'){
     nazi.health -= attack.bullets;
     nazi.hits += nazi.glue
    }
    update();
    }

    function repair(glue){
        health += 1;
        hits += 1;
        update();
    }
    
    function repair(nail){
        health += 3;
        hits += 1;
        update();
    }
    
    function repair(weld){
        health += 5;
        hits += 1;
        update();
    }
    
    function attack(bullets){
        nazi.health -= 1;
        nazi.hits += 1;
        update();
        }
    
    function attack(missles){
        nazi.health -= 5;
        nazi.hits += 5;
        update();
    }
    
    function attack(lasers){
        nazi.health -= 10;
        nazi.hits += 10;
        update();
    } 

var repair = {
	glue: new Glue ("glue",+1),
    nail: new Nail ("nail",+3),
    weld: new Weld ("weld",+5),
}

//defense 

function defense(glue){
    nazi.health += 1;
    nazi.hits += 1;
    update();
}

function attack(nail){
    nazi.health += 2;
    nazi.hits += 2;
    update();
}

function attack(weld){
    nazi.health += 3;
    nazi.hits += 3;
    update();
}

var bullet = new attack(-1)
var missle = new attack(-5)
var laser = new attack (-10)

var repair = {
    glue: new repair(1)
    nail: new repair(2)
    weld: new repair(3)
}

var repair = function(glue, nail, weld){
     this.glue = glue;
     this.nail = nail;
     this.weld = weld;
}

// CLASS NOTES

function addMods(){
    var total = ''
   for(let i = 0; i < me.modifiers; i++) {
    const element = me.modifiers[i];
    
    //looks at each mod in the 'me' objects modifiers array
    let mod = me.modifiers[i]
    
    //add to total
    total+= mod.name + ' ' 
}
   return total 
}
 //addMods purpose is to itterate over mods array, add all values, return total values

 //you then need to draw using below function
 function draw()
 var results = addMods()

*/





