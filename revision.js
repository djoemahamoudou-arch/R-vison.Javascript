/*Revision du code Javascript 
 Date : 08/01/2026
 Auteur : Rachid
*/



// La déclaration de variable
// je déclare une variable pour enregistrer le nom du village
let village = "Koungou";
console.log("Mon village  : ",village);


//Je déclare une varible pour enregistrer le nomde chanteur préféré
let chanteurPréféré = "niska";
console.log("Mon chanteure préféré : ", chanteurPréféré);



// Je créé une variable pour enregistrer l'age de mon chanteur
let ageDeMonchanteur = "31 ans ";
console.log("l'age de niska :", ageDeMonchanteur);



// Je créé un tableau qui liste les 5 albums de mon chanteur 

 let albume = ["Commando","le monde est méchant","mr sale"];
  
//J'affiche dans la console les albums n°1,n°4,n°5

console.log(albume)
console.log[albume[0]]; 
console.log[albume[3]];
console.log[albume[4]];



/*====================================*/


/*
*7.Je crée un disque CD sous forme d'objet.
*le disque contient 1 morceau.
*les information du morceau sont :
*titre
*nom de chanteur
*date de sortie
*duréé
*style de musique
*compositeur
*auteur
*prix
*lien vers Youtube
*/
 let disqueCD={
    titre : "makavélik",
    nom:"Abdel-k",
    datedesortie :"15/05/2026",
    duréé: 5,
    styledemusique:"Chanson française.",
    compositeur:"Pyotr Ilyich Tchaikovsky. ",
    auteur:"rachid",
    prix:"200$",
    lienversYoutube :"https://www.youtube.com/watch?v=xWNtN-5qWgE&list=RDxWNtN-5qWgE&start_radio=1"
};
console.log(disqueCD);
console.log(disqueCD.lienversYoutube);

// J'affiche tout dans la console Tout en MAJISCULE le titre du morceau
console.log( disqueCD.titre.toUpperCase());
console.log(disqueCD.styledemusique.toLowerCase());




/*==============================================*/



// Je déclare une liste de notes : 34 , 26 , 86 , 33 , 17 , 68
let note = [34 , 26 , 86 , 33 , 17 , 68];

// je récupère le plus grand nombre et je l'affiche dans la console

let maxnote  = Math.max(...note)

console.log("le plus grand nombre note :", maxnote);

// J'affiche dans la console le plus petit nombre
let mininote = Math.min(...note)

console.log("le plus plus nombre :", mininote);

let tableauFruits = ["Manga", "Papaya","Fenisi","tundra"];
let tableauLegumes = ["Demba" , "Tamati" , "Dodoki" , "Benguani", "Mafana"];

let fusionTableauxfruitslegume = [...tableauFruits, ...tableauLegumes];
console.log("Fusion des fruit et légumes  : ", ...tableauFruits, ...tableauLegumes);






/*==========================*/




// la notion de MAP
// Une MAP permet de structurer(coder)les information sous forme de couple.
// Le couple est formé d'une clé et d'une valeur clée-valeur ou key-value (anglais)
//je vais créer une ou plusieurs instances issues de l'objet MAP()
let mapVetements = new Map([
    ["t-shirt" , 100 ],
    ["chemise" , 200],
    ["robes" , 300],
    ["salouva" ,250],
]);
console.log(mapVetements);

console.log("## mapVetements initiall :", mapVetements);

// J'utilise des Getters et setters pour manipuler la map
// Getteur (anglais) signifie accesseurs.
// Pour accéder , j'utilise la methode get().

console.log("t-shirt :" ,mapVetements.get("t-shirt"));

console.log("salouva :", mapVetements.get("salouva"), "robes :",mapVetements.get("robes"));

// Setter (anglais)signifie modifieur.
// il permet de modifier le couple dans la map ou d'ajouter un nouveau 

mapVetements.set("patalon",150);

console.log("## mapVetements modifié : ", mapVetements);

// afficher les valeur de variable mapVetement

mapVetements.forEach(function(value,key){
    console.log(key,' = ',value);
});

// vérifie si t-shirt existe ou pas
console.log("t-shirt : " , mapVetements.has());

console.log("=============================");


let couplesMap = mapVetements.entries();
console.log("couplesMap" , couplesMap);

for(let couple of couplesMap){
    console.log(couple);
}

console.log("=============================");
for(let c of mapVetements.entries()){
    console.log(c);
}




console.log("=============================");

/* la methode value() récupérer uniquement les valeur(valeur).*/
let valeurs = mapVetements.values()
console.log("Je récupere que les valeur :", valeurs);






console.log("================================");




//récuperer les valeur uniquement sans tableau.

for(let valeur of mapVetements.values()){
    console.log(valeur)

};



        


    












