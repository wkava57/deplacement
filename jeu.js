// on créer un objet : 
let vaisseau1 = new Sprite("vaisseau", document.body.clientWidth/2, document.body.clientHeight/2, "red", 100, 30);

let vaisseau2 = new Sprite("avion", 20, 20, "blue", 100, 50);

let vaisseau3 = new Sprite("cop", document.body.clientWidth/2, 10, 10, "yellow", 50, 20);



// Première étape : créer l'objet visuel Sprite

// Notre objet Sprite va prendre 4 propriétés :
// 1) filename => nom du fichier/chemin d'accès
// 2) left => récupérer et définir sa position par rapport au bord gauche 
// 3) top => récupérer et définir sa position par rapport au bord haut 
function Sprite(filename, left, top, bgColor, width, borderRadius){
    // 4 propriétés : filename, left, top, bgColor, width, borderRadius

    // this = anglais => celui-ci

    // this._node = anglais => node (noeud) DONC on rappelle l'objet en cours (Sprite) avec tout son noeud (donc toutes ses méthodes)

    // 1ère chose que l'on veut faire, c'est définir ce à quoi va reseembler notre objet visuel
    // (donc, créer une image)
    this._node = document.createElement('img');
    
    // je veux attribuer à cette image sa source 
    this._node.src = "./"+filename+".png";
    
    // je mets en position absolute l'objet courant
    this._node.style.position = "absolute";

    // j'attribue mon objet au body
    document.body.appendChild(this._node);

    // Nos premières méthodes de get et de set pour LEFT
    // Définir la propriété Left et ses deux méthodes (get set)

    this._bgColor = bgColor;
    this._node.style.backgroundColor = this._bgColor;

   
    this._width = width;
    this._node.style.width = this._width+"px";

    this._borderRadius = borderRadius;
    this._node.style.borderRadius =this._borderRadius+"%";

    // on définit une propriété (ici LEFT), de l'objet courant (THIS)
    Object.defineProperty(this, "left",{
        get: function(){
            // la méthode get me renvoie la valeur de LEFT de l'objet en cours
            return this._left;
        },
        // la méthode set c'est une méthode qui attribue une valeur à LEFT
        set: function (value){
            // on prend la valeur de la propriété LEFT de l'objet courant et on lui attribue une valeur (reçue en paramètre)
            this._left = value;

            // on modifie le css de l'objet pour sa propriété left
            this._node.style.left = this._left+"px";

        }
    });
    Object.defineProperty(this, "top",{
        get: function (){
            return this._top;
        },
        set: function(value){
            this._top = value;

            // this._node = l'objet + tous ses noeuds (toutes ses propriétés)
            this._node.style.top = this._top+"px";
        }
    })

    // on définit la valeur de la propriété left de l'objet par le paramètre left reçu lors de la création d'un objet
    this.left = left;
    this.top = top;
    
}
document.onkeydown = function (event){
        
    
    if(event.code == "ArrowUp"){
        vaisseau1.top  -= 15;    
    }
    if(event.code == "ArrowDown"){
        vaisseau1.top += 15;
    }
    if(event.code == "ArrowRight"){
        vaisseau1.left  += 15;    
    }
    if(event.code == "ArrowLeft"){
        vaisseau1.left  -= 15;    
    }
   

    if(event.code == "KeyW"){
        vaisseau2.top  -= 20;    
    }
    if(event.code == "KeyZ"){
        vaisseau2.top += 20;
    }
    if(event.code == "KeyD"){
        vaisseau2.left  += 20;    
    }
    if(event.code == "KeyA"){
        vaisseau2.left  -= 20;    
    }
    

    if(event.code == "KeyP"){
        vaisseau3.top  -= 20;    
    }
    if(event.code == "Period"){
        vaisseau3.top += 20;
    }
    if(event.code == "Semicolon"){
        vaisseau3.left  += 20;    
    }
    if(event.code == "KeyL"){
        vaisseau3.left  -= 20;    
    }
    console.log(event.code);



    if(vaisseau1.top < 0){
        vaisseau1.top = 0;
    }
    if(vaisseau1.left < 0){
        vaisseau1.left = 0;
    }
    if(vaisseau1.top > document.body.clientHeight-vaisseau1._node.height-25){
        vaisseau1.top = document.body.clientHeight-vaisseau1._node.height-25;
    }
    if(vaisseau1.left > document.body.clientWidth-vaisseau1._node.width-25){
        vaisseau1.left = document.body.clientWidth-vaisseau1._node.width-25;
    }

    if(vaisseau2.top < 0){
        vaisseau2.top = 0;
    }
    if(vaisseau2.left < 0){
        vaisseau2.left = 0;
    }
    if(vaisseau2.top > document.body.clientHeight-vaisseau2._node.height-25){
        vaisseau2.top = document.body.clientHeight-vaisseau2._node.height-25;
    }
    if(vaisseau2.left > document.body.clientWidth-vaisseau2._node.width-25){
        vaisseau2.left = document.body.clientWidth-vaisseau2._node.width-25;
    }


    if(vaisseau3.top < 0){
        vaisseau3.top = 0;
    }
    if(vaisseau3.left < 0){
        vaisseau3.left = 0;
    }
    if(vaisseau3.top > document.body.clientHeight-vaisseau3._node.height-25){
        vaisseau3.top = document.body.clientHeight-vaisseau3._node.height-25;
    }
    if(vaisseau3.left > document.body.clientWidth-vaisseau3._node.width-25){
        vaisseau3.left = document.body.clientWidth-vaisseau3._node.width-25;
    }
}
document.onkeydown = function (event){
    console.log(event.code);
    // fonction qui gère le déplacement d'un sprite (tous les vaisseaux) passé en paramètre.
    moveUp(vaisseau2, );
    // fonction qui empêche le déplacement d'un sprite passé en paramètre de sortir du body.
    controlBorders(vaisseau2);
}



function move(param){
    if(event.code == "ArrowUp"){
       param.top  -= 15;    
    }
    if(event.code == "ArrowDown"){
        param.top += 15;
    }
    if(event.code == "ArrowRight"){
        param.left  += 15;    
    }
    if(event.code == "ArrowLeft"){
        param.left  -= 15;    
    }
    if(param.top < 0){
        param.top = 0;
    }
    if(param.left < 0){
        param.left = 0;
    }
    if(param.top > document.body.clientHeight-param._node.height-25){
        param.top = document.body.clientHeight-param._node.height-25;
    }
    if(param.left > document.body.clientWidth-param._node.width-25){
        param.left = document.body.clientWidth-param._node.width-25;
    }
}
