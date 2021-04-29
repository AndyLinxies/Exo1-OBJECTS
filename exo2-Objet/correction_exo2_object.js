//exo1
// let personnage = {
//     nom: "fus",
//     prenom: "rodah",
//     sePresenter(){
//         console.log("Bonjour je m'appel " + this.nom + " " + this.prenom );
//     }
// }

// personnage.sePresenter();

//exo2
let nice = {
    nom: "Alain",
    ageNom(){
        this.age = prompt('change mon age');
        alert(this.nom + " a " + this.age + " ans");
    }
}

nice.ageNom();
console.log(nice);