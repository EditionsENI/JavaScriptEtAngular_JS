// C:\JavaScriptEtAngularJavaScript\C07\demonstration\voiture.ts 
// Définition de la classe Voiture 
class Voiture {
    // Attributs 
    private _kilometrage: number;
    private _proprietaire: string;
    private _couleur: string;

    // Getters 
    get kilometrage() {
        return this._kilometrage;
    }
    get proprietaire() {
        return this._proprietaire;
    }
    get couleur() {
        return this._couleur;
    }

    // Setters 
    set kilometrage(km: number) {
        this._kilometrage = km;
    }
    set proprietaire(nom: string) {
        this._proprietaire = nom;
    }
    set couleur(couleur: string) {
        this._couleur = couleur;
    }

    // Le constructeur 
    constructor(kilometrage: number, proprietaire: string,
        couleur: string) {
        this._kilometrage = kilometrage;
        this._proprietaire = proprietaire;
        this._couleur = couleur;
    }

    // Les méthodes 
    avance(nbreDeMetres: number) {
        this._kilometrage += nbreDeMetres;
    }
    recule(nbreDeMetres: number) {
        this._kilometrage += nbreDeMetres;
    }
}

// Déclaration d'une nouvelle voiture 
let maVoiture = new Voiture(180000, "CapitaineFlam", "Rouge");
console.log("kilométrage au départ : " + maVoiture.kilometrage);
console.log("J'avance ...");
maVoiture.avance(100);
console.log("Je recule ...");
maVoiture.recule(50);
console.log("kilométrage à l'arrivée : " + maVoiture.kilometrage);
console.log("Si quand j'avance, tu recules, ...") 