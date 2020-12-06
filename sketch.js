var dog,happyDog,foodS,foodStock,database,position;

function preload(){
     dog = loadImage("images/dogImg.png"); 
     happyDog = loadImage("images/dogImg1.png"); 
}

function setup() {
    createCanvas(500, 500);
    database=firebase.database();
    foodStock=database.ref('Food');
    foodStock.on("value",readStock);
    image(dog, 250, 250, 50, 50);
    image(happyDog, 250, 250, 50, 50);
}


function draw() {  
    background(46, 139, 87);
    if(keyWentDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(dogHappy);
    }
    drawSprites();
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
    if (x<=0){
        x=0;
    }
    else{
        x=x-1;
    }
    database.ref("/").update({
        Food:x
    })
}
