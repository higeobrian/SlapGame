
var name = 'Nazi'
var health = 100
var hits = 0

function slap1(){
    health -= 1;
    hits += 1;
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
}

update();
 

