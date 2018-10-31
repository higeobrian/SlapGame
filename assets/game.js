var target = 
{
    nazi: new Target('Nazi', 100)
}

function Target(name, health) 
{
    this.name = name;
    this.health = health;
    this.item = [];
    this.hits = 0;
 }
 
 //DONE with character.  

 function Item(name, modifier, description) 
 {
     this.name = name;
     this.modifier = modifier;
     this.description = description;
 }
 //bulk objects, each object with own name and parameters. Constructor defines paramters.
 var items = 
 {
     glue: new Item("glue", 1, "add 1 health"),
     nail: new Item("nail", 2, "add 2 health"),
     weld: new Item("weld", 3, "add 3 health"),
 }

 //DONE with items. Created 3 modifiers. *NUMERIC VALUE.
//Edit: Step 7 - giveFunction, reflect onclick buttons on HTML. Push items to nazi.

// s

function giveGlue(){
    target.nazi.health += 1 * addMods();
    health();
    update();
}

function giveNail(){
    target.nazi.health += 2 * addMods();
    health();
    update();
}

function giveWeld(){
    target.nazi.health += 3 * addMods();
    health();
    update();
}

//DONE with Step 4: Giving nazi items using .push. Could this be done with 1 function?

// FOR LOOP FUNCTION 

// Step 5: addmods, start "for loop". calculate combined value of modifiers in the target.items array. Create variable total above/outside the loop. is 0 greater than item array. YES, because all items begin with a negative number. Var is -1, -2, or -3.       
//Have function 'return' total;...

// SHOULD THIS BE: total -= item.modifier?????
// EDIT: step 6: if there are no mods, the total should be 1. Need to return 1.
// SHOULD AddMods() function be moved up to the functions between line 33 and 49? 


function slap1() {
    target.nazi.health -= 1 * addMods();
    hit();
    update();
}

function slap2() {
    target.nazi.health -= 5 * addMods();
    hit();
    update();
}

function slap3() {
    target.nazi.health -= 10 * addMods();
    hit();
    update();
}

function hit() {
    target.nazi.hits++
    update();
}

function health() {
    target.nazi.health++
    update();
}

function addMods()
{
    var total = 0; 
    for(var i = 0; i < target.nazi.item.length; i++) 
    {  
        var item = target.nazi.item[i]; 
        total += item; //removed .modifier
    } 
    if(total)
    {
    return total;
    }
    else;
    {
    return 1;
    }
}  

// function addMods()
// {
//     var total = 0; 
//     for(var i = 0; i < target.nazi.item.length; i++) 
//     {  
//         var item = target.nazi.item[i]; 
//         total += item; //removed .modifier
//     } 

//     if(total)
//     {
//     return total;
//     }
//     else;
//     {
//     return 1;
//     }
// }  



// THE FRONT END IS CAUSING HEALTH SPAN TO PRODUCE "NAN" AKA NOT A NUMBER. HEALTH: NAN, WHEN I CLICK THE SLAP BUTTONS. SOMETHING IS WRONG WITH *addMods() function.

function update() {
    document.getElementById('health').innerText=`${target.nazi.health}`
    document.getElementById('hits').innerText=`${target.nazi.hits}`
    document.getElementById('name').innerText=`${target.nazi.name}`
};

update()


// MODIFIERS ARE NOT WORKING? 
// Items = Reduce Damage? 


//Create a function that will be called, addMods(), including forloop with 
//for loop, item array, modify impact.
//Using a "for loop", calculate the combined value of modifiers in the target.items array.
//create a total variable 
//if 0 is great than what the nazi uses, add 1.
//var item = target.nazi.items[i]; array. 
//total = 0, add to ---- confused with last part. item references the above, but .modifier references the item? So target.nazi.items[i]... choose glue, which is +1..total (0) +1 to modifier glue. returns +1 to health? 


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





