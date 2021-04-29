//Exo 1
let personnage = {
    nom : "Fus",
    prenom : "Rodah",
    sePresenter (){
        console.log("Bonjour je m'appelle "+this.nom+" "+this.prenom);
    }
}
personnage.sePresenter() //On appel l'objet personnage et on appel la methode Sepresenter qui se trouve dedans.

//Exo 2
let personnage2= {
    nom: "Ragnar",
    age : 45,
    maMethode (){
        this.age = prompt("Changez l'age du perso.Il a 45 ans de base")
    }
}
personnage2.maMethode() //Lancer la methode de l'objet
alert(`${personnage2.nom} a ${personnage2.age}`) //lancer l'alerte