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
var items = {
    glue: new Item(glue, -1, "add 1 health"),
    nail: new Item(nail, -2, "add 2 health"),
    weld: new Item(weld, -3, "add 3 health"),
}

function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}
//remember to capitalize the constructor name
//item constructor and function to push new items to character

//readme2, step 4, #3

//MODIFIERS - reduce damage impact

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

function bullets() {
    target.nazi.health -= 1 (addMods();
    target.nazi.hits += 1;
    update()
}

function missles() {
    target.nazi.health -= 3 (addMods();
    target.nazi.hits += 1;
    update()
}

function lasers() {
    target.nazi.health -= 5 (addMods();
    target.nazi.hits += 1;
    update()
}

/**
function glue(){
    giveNazi(items.glue)
}
function nail(){
    giveNazi(items.nail)
}
function weld(){
    giveNazi(items.weld)
}
 */

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
}

update()


//function damage 
/** 
var attack = function(bullets, missles, lasers)
{
    this.bullets = bullets;
    this.missles = missles;
    this.lasers = lasers;
}

*/


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



//attack
//function attack(dmg){
//    this.dmg = dmg
//}
 
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
       

/**

var repair = {
	glue: new Glue ("glue",+1),
    nail: new Nail ("nail",+3),
    weld: new Weld ("weld",+5),
}
*/

//defense

//function defense(repair){
//    this.repair = repair
//}

/**    

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

/**
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
*/




// CLASS NOTES


/**modifiers
 * 
 * var me = {
 * modifiers: [{name: 'modify1}]
 * }

 *  
 * var modifiers = {
 * modif1: {name: 'modifier1},
 * modif2: {...},
 * modif3: {...},
 * }
 * 
 * //done


/**function

var slap(){
    me.health-=5 + addMods()
}

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
 document.getelementbyid('modifiers').innertext = ''

in html 
onclick='globals.modify1()'
hits or repair...
*/







