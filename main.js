
//Character costructor
function Character(name,strength,health){
    this.name=name;
    this.strength=strength;
    this.health=health;
    this.element=new UIElement(this.name)

}
//add to portotype
Character.prototype.attack=function(opponent) {
    if(opponent.health>0){
        opponent.health-=this.strength;
        opponent.element.healthBar.style.cssText=`width:${opponent.health}%`  
    }
    //if heath =0 opponent will die
    if(opponent.health<=0){
        opponent.element.attackBtn.remove()
        opponent.element.healthBtn.remove()
        document.querySelector(`.${opponent.name}-died`).innerHTML=`${opponent.name} is died`
        opponent.element.healthBar.style.cssText=`width:0%`  
      
    }

}
//add to prototype
Character.prototype.fullHealth=function(){
    if(this.health<100){
        this.health+=20
        this.element.healthBar.style.cssText=`width:${this.health}%`
    }
    if(this.health>100){
        this.health=100
        this.element.healthBar.style.cssText=`width:${this.health}%`
    }
}
function UIElement (name){
    this.attackBtn=document.querySelector(`.${name}-attack`)
    this.healthBtn=document.querySelector(`.${name}-health`)
    this.healthBar=document.querySelector(`.${name}-health-bar span`)
}

//create player objects
let nartoo=new Character("nartoo",10,100);
let sasakii=new Character("sasakii",15,100);
//events attack and health
nartoo.element.attackBtn.addEventListener("click",function(){
    nartoo.attack(sasakii)
})
sasakii.element.attackBtn.addEventListener("click",function(){
    sasakii.attack(nartoo)
})

nartoo.element.healthBtn.addEventListener("click",function(){
nartoo.fullHealth()
})

sasakii.element.healthBtn.addEventListener("click",function(){
sasakii.fullHealth()
    })