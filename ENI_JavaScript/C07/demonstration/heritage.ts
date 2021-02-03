// C:\JavaScriptEtAngularJavaScript\C07\demonstration\heritage.ts 
// Définition de la classe Vehicule 
class Vehicule {
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

// Voiture héritée
class VoitureHeritee extends Vehicule { }

// Tracteur hérité
class TracteurTondeuse extends Vehicule {
    abaisse(nbreDeCm: number) {
        console.log("hélice abaissée de " + nbreDeCm + "   centimètres");
    }
    remonte(nbreDeCm: number) {
        console.log("hélice remontée de " + nbreDeCm + "   centimètres");
    }
}

let tesla = new VoitureHeritee(666, "Caliendo Julien", "Bleu   outremer");
let tt = new TracteurTondeuse(12, "Caliendo Julien", "Vert");
console.log("Kilométrage : " + tt.kilometrage);
tt.abaisse(10);
tt.avance(0.1)
tt.remonte(10);
tt.recule(0.1);
console.log("Kilométrage : " + tt.kilometrage); 