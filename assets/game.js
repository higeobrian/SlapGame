
// var name = 'Nazi'
// var health = 100
// var hits = 0

var nazi = new Player('Nazi')

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
 

var ammo = function(bullets, missle, laser){
    this.bullets = bullets;
    this.missle = missle;
    this.laser = laser;
}

function Attack(dmg){
    this.dmg = dmg
}

function defense(repair){
    this.repair = repair
}


//constructor for player
function Player(name){
    this.name = name
    this.health = 100
    this.hits = 0
}

var bullet = new Attack(-1)
var missle = new Attack(-5)
var laser = new Attack (-10)

var repair = {
    glue: new repair(1)
    nail: new repair(2)
    weld: new repair(3)
}

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

