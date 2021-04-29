//Exo 1
let personnage1 = {
nom : "Ayite",
prenom : "Andy",
age : 29,
taille: 170+"cm"
}
//console.log(personnage1.age ); 

//Exo2
let personnage2 ={
    nom: "Lodbrok",
    prenom: "Ragnar",
    age : 45,
    taille: 180,
    alive: false
}

let personnage3 ={

}
// Exo 3
// Remplir les propriétées du 3eme personnage
// Son nom doit valoir le nom du personnage1
// Son age doit valoir celui du personnage2
// Et sa taille doit être rempli avec la valeur que vous souhaitez
//Exo3
personnage3.nom= personnage1.nom;
personnage3.age=personnage2.age;
personnage3.taille= 175;

console.log(personnage3);
