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
 
 var items = 
 {
     glue: new Item("glue", -1, "add 1 health"),
     nail: new Item("nail", -2, "add 2 health"),
     weld: new Item("weld", -3, "add 3 health"),
 }

 //DONE with items. Created 3 modifiers. *NUMERIC VALUE.

 function glue() 
{
    target.nazi.item.push(items.glue.modifier);
    update();
}

function nail() 
{
    target.nazi.item.push(items.nail.modifier);
    update();
}

function weld() 
{
    target.nazi.item.push(items.weld.modifier);
    update();
}

//DONE with Step 4: Giving nazi items using .push. Could this be done with 1 function?



// FOR LOOP FUNCTION 

// Step 5: addmods, start "for loop". calculate combined value of modifiers in the target.items array. Create variable total above/outside the loop. define i variable as 0. if 0 is greater than running total, multiply (i++).       Have function 'return' total;...

function addMods()
{
    var total = 0; 
    for(var i = 0; i < target.nazi.item.length; i++) 
    {  
        var item = target.nazi.item[i]; 
        total += item.modifier; 
    }; 
    if(total){
    return total;
}
};

// 4LOOP FUNCTION 


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



//Do i need to add glue, nail, weld or is that covered on line 23?

function update() {
    document.getElementById('health').innerText=`${target.nazi.health}`
    document.getElementById('hits').innerText=`${target.nazi.hits}`
    document.getElementById('name').innerText=`${target.nazi.name}`
};

update()






















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





