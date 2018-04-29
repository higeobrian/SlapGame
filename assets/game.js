
// var name = 'Nazi'
// var health = 100
// var hits = 0

//players

var nazi = new Player('Nazi')

function player(nazi){
    this.nazi = nazi
    this.health = 100
    this.hits = 0
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


var attack = function(bullets, missles, lasers){
    this.bullets = bullets;
    this.missles = missles;
    this.lasers = lasers;
}

var ammo = {
	bullets: new bullets ("Bullets",-1,"This is a bullet!"),
    missles: new missles ("Missle",-5,"This is a missle!"),
    lasers: new laser ("Laser",-10,"This is a laser!"),
}

var defense = function(glue, nail, weld){
    this.glue = glue;
    this.nail = nail;
    this.weld = weld;
}

var repair = {
	glue: new Glue ("glue",+1,"This is a glue!"),
    nail: new Nail ("nail",+3,"This is a nail!"),
    weld: new Weld ("weld",+5,"This is a weld!"),
}


Function Attack(this.bullets){
    if(bullets == 'bullets'){
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


update();

var items = {
	shield:new Item("Shield",0.3,"This is an awesome shield!"),
}

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

