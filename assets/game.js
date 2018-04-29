
// var name = 'Nazi'
// var health = 100
// var hits = 0

//players

var nazi = new Player('Nazi')

function Player(nazi){
    this.nazi = nazi
    this.health = 100
    this.hits = 0
}

var nazi = {
    health: 100,
    hits: 0,
    defense:[repair.glue, repair.nail, repair.weld]
}

var Attack = function(bullets, missles, lasers){
    this.bullets = bullets;
    this.missles = missles;
    this.lasers = lasers;
}

var Defense = function(glue, nail, weld){
    this.glue = glue;
    this.nail = nail;
    this.weld = weld;
}

var ammo = 
{
    bullets: new ammo("Bullets",-1),
    missles: new ammo("Bullets",-5),
    lasers: new ammo("Bullets",-10)
}

var repair = 
{
    glue: new repair("Bullets",1),
    nail: new repair("Bullets",2),
    weld: new repair("Bullets",3)
}

function nazi (){
var ammo = [0]
}
/** 
var saudi = new player1('Saudi')

function player(saudi){
    this.saudi = saudi
    this.health = 100
    this.hits = 0
}
*/

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


Function (attack){
    if(this.bullets == 'bullets'){
     nazi.health -= attack.bullets;
     nazi.hits += nazi.glue
    }
    update();
    }

    Function Attack(missles){
        if(missles == 'missles'){
         nazi.health -= attack.missles;
         nazi.hits += nazi.nail
        }
        update();
        }

        Function Attack(lasers){
            if(lasers == 'bullets'){
             nazi.health -= attack.lasers;
             nazi.hits += nazi.weld
            }
            update();
            }

            Function defense(this.glue){
                if(this.glue == 'glue'){
                 nazi.health -= defense.glue;
                 nazi.hits += nazi.glue
                }
                update();
                }



/** var ammo = {
	bullets: new bullets ("Bullets",-1),
    missles: new missles ("Missles",-5),
    lasers: new laser ("Lasers",-10),
}

var repair = {
	glue: new Glue ("glue",+1),
    nail: new Nail ("nail",+3),
    weld: new Weld ("weld",+5),
}
*/

/**             
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

function attack(bullets){
    saudi.health -= 1;
    saudi.hits += 1;
    update();
}

function attack(missles){
    saudi.health -= 5;
    saudi.hits += 5;
    update();
}

function attack(lasers){
    saudi.health -= 10;
    saudi.hits += 10;
    update();
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

//

function defense(glue){
    saudi.health += 1;
    saudi.hits += 1;
    update();
}

function defense(nail){
    saudi.health += 1;
    saudi.hits += 1;
    update();
}

function defense(weld){
    saudi.health += 1;
    saudi.hits += 1;
    update();
}
*/

/**
var bullet = new attack(-1)
var missle = new attack(-5)
var laser = new attack (-10)

var repair = {
    glue: new repair(1)
    nail: new repair(2)
    weld: new repair(3)
}
*/


/**  
function slap1(){
    nazi.health -= 1;
    nazi.hits += 1;
    update();
}

function slap2(){
    health -= 5;
    hits += 1;
    update();
}

function slap3(){
    health -= 10;
    hits += 1;
    update();
}

function slap4(){
    health += 1;
    hits += 1;
    update();
}

function slap5(){
    health += 3;
    hits += 1;
    update();
}

function slap6(){
    health += 5;
    hits += 1;
    update();
}

function update() {
   
    document.getElementById('health').innerText=`${health}`;
    document.getElementById('hits').innerText=`${hits}`;
    document.getElementById('name').innerText=`${name}`;
}
*/

// var repair = function(glue, nail, weld){
//     this.glue = glue;
//     this.nail = nail;
//     this.weld = weld;
// }


/**modifiers
 * var me = {
 * modifiers: [{name: 'modify1}]
 * }
 * 
 * var modifiers = {
 * modif1: {name: 'modifier1},
 * modif2: {...},
 * modif3: {...},
 * }



// <p>my modifies: <span id='modifiers'>...</span> </p>
//<button></button>
//<button></button>
//<button></button>


/**function modify1(){
    me.modifiers.push(modifiers.mod1) <-- calls it and pushes it
    draw()
}

function modify2()
    me.modifiers.push(modifiers.mod1)
    draw()
{
    
}
function modify3(){
    me.modifiers.push(modifiers.mod1)
    draw()
}

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

