//Function: adding characters

function Target(name, health, bullets, missles, lasers) 
{
    this.name = name;
    this.health = health;
    this.attacks = {
        'bullets': bullets,
        'missles': missles,
        'lasers': lasers
    }
    this.items = []
    this.hits = 0
 };

var target = {
    Nazi: new Target('Nazi', 100, 5, 6, 7)
}

//constructor function attack 

var attack = function(bullets, missles, lasers)
{
    this.bullets = bullets;
    this.missles = missles;
    this.lasers = lasers;
}

var modifier = function(glue, nail, weld)
{
    this.glue = glue;
    this.nail = nail;
    this.weld = weld;
}

//object literal 

var ammo = {
    bullets: new Weapon("Bullets",-1),
    missles: new Weapon("Bullets",-5),
    lasers: new Weapon("Bullets",-10)
}

var modifier = {
    glue: new Defense("glue",1),
    nail: new Defense("nail",2),
    weld: new Defense("weld",3)
}

//function modifier... still need to construct this.


var shield = {
modifiers: [{name: shield1, name: shield2, name: shield3}]
}

var modifiers = {
modif1: new Shield (),
modif2: new Shield (),
modif3: new Shield 
}

//step 6: reduce damage -- add the function word addMods in each damage reduction function

function addMods() {
    var modTotal = 0
    for (let i = 0; i < nazi.modifier.length; i++) {
        let mod = nazi.modifier[i];
        modTotal += mod.modifier
    }
    return modTotal
}

function modify1() {
    nazi.health -= (addMods() + 1)
    nazi.hits -= 1
    update()
}

function modify2() {
    nazi.health -= (addMods() + 2)
    nazi.hits -= 1
    update()
}

function modify3() {
    nazi.health -= (addMods() + 3)
    nazi.hits -= 1
    update()
}

    function update() {
        document.getElementById('health').innerText=`${nazi.health}`
        document.getElementById('hits').innerText=`${nazi.hits}`
        document.getElementById('name').innerText=`${Enemy.name}`
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



var name = 'Nazi'
var health = 100
var hits = 0

 
function attack(bullets){
    nazi.health -= 1;
    nazi.hits += 1;
    update();
}

function attack(missles){
    health -= 5;
    hits += 1;
    update();
}

function attack(lasers){
    health -= 10;
    hits += 1;
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

function update() {
   
    document.getElementById('health').innerText=`${health}`;
    document.getElementById('hits').innerText=`${hits}`;
    document.getElementById('name').innerText=`${name}`;
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

// <p>my modifies: <span id='modifiers'>...</span> </p>
//<button></button>
//<button></button>
//<button></button>


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


























//READ ME PART-3

//Encapsulation
/** 
function GameService(){

    var dataStore = this
    var target = new Target("Scarecrow", 100, 1, 5, 10);

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






/** DONE - notes section

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

*/



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

/** 
var saudi = new player1('Saudi')

function player(saudi){
    this.saudi = saudi
    this.health = 100
    this.hits = 0
}
 * Saudi Character

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


