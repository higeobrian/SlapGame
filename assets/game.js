
// var name = 'Nazi'
// var health = 100
// var hits = 0

//Function: adding characters

function Enemy(name, health) {
    this.name = name;
    this.health = health;
    this.attacks = {
        bullets: 1,
        missles: 5,
        lasers: 10
    }
    this.items = []
    this.hits = 0
 }

 //Enemy creator

var Enemies = {
    Nazi: new Enemy('Nazi', 100)
}

/** 
var nazi = {
    health: new Health(100),
    hits: new Hits(0),
    Defense: new Defense ([repair.glue, repair.nail, repair.weld]),
    Attack: new Attack ([repair.glue, repair.nail, repair.weld])
}

function Enemy(nazi){
    this.nazi = nazi
    this.health = 100
    this.hits = 0
}
*/

//constructor function attack 
var Attack = function(bullets, missles, lasers)
{
    this.bullets = bullets;
    this.missles = missles;
    this.lasers = lasers;
}

//object literal 
var ammo = {
    bullets: new Weapon("Bullets",-1),
    missles: new Weapon("Bullets",-5),
    lasers: new Weapon("Bullets",-10)
}

//constructor function attack 
var Defense = function(glue, nail, weld)
{
    this.glue = glue;
    this.nail = nail;
    this.weld = weld;
}

//object literal 
var repair = {
    glue: new Shield("Bullets",1),
    nail: new Shield("Bullets",2),
    weld: new Shield("Bullets",3)
}

function nazi (){
var ammo = [0]
}

//step 6: reduce damage -- add the function word addMods in each damage reduction function
//
function addMods() {
    var modTotal = 0
    for (let i = 0; i < nazi.attack.length; i++) {
        let mod = nazi.attack[i];
        modTotal += mod.modifier
    }
    return modTotal
}

function glue() {
    nazi.health -= (addMods() + 1)
    nazi.hits -= 1
    update()
}

function nail() {
    nazi.health -= (addMods() + 2)
    nazi.hits -= 1
    update()
}

function weld() {
    nazi.health -= (addMods() + 3)
    nazi.hits -= 1
    update()
}

//update on front end --- use update in each function.
    function update() {
        document.getElementById('health').innerText=`${nazi.health}`
        document.getElementById('hits').innerText=`${nazi.hits}`
        document.getElementById('name').innerText=`${Enemy.name}`
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

                update()



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



//readme3
//Encapsulation

/** 
function GameService(){

    var dataStore = this
    var target = new Target("Scarecrow", 100, 1, 5, 10);
    
    function Target(name, health, slap, punch, kick) {
            this.name = name;
            this.health = health;
            this.attacks = {
                "slap": slap,
                "punch": punch,
                "kick": kick
            };
            this.items = []
            this.hits = 0
        };
        
    function Item(name, modifier, description) {
            this.name = name;
            this.modifier = modifier;
            this.description = description;
        };
    

        //step 2: getters and setters 

        dataStore.attack = function(type) {
            target.health -= target.attacks[type] * this.addMods()
            target.hits += 1
        }


        //step 3: Controller
function GameController(){
    var dataStore = new GameService()
    }

    */