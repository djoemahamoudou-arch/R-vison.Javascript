class voiture{
    constructor(volant,roue,pédale,boitedevitesse,siege,couleur,capo,port){
        this.volon = volant;
        this.leRoue = roue;
        this.lePedale = pédale;
        this.leBoitedevitesse = boitedevitesse;
        this.leSiège = siege;
        this.leCouleur = couleur;
        this.leCapo = capo;
        this.lePort = port;
          
  
    }
    
}

let voiture1 = new voiture("droit", 4 , 2 , "automatique" , 4 , "rouge" , 1 , 4 );
console.log("Reponse :",voiture1);