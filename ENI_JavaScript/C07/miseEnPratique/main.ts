// C:\JavaScriptEtAngularJavaScript\C07\miseEnPratique\main.ts 
module ENIecole {
    export class Personne {
        // Attributs 
        _nom: string;
        _prenom: string;
        _age: number;
        _taille: number;
        _poids: number;
        // Getters 
        get nom() {
            return this._nom;
        }
        get prenom() {
            return this._prenom;
        }
        get age() {
            return this._age;
        }
        get taille() {
            return this._taille;
        }
        get poids() {
            return this._poids;
        }

        // Setters 
        set nom(nom: string) {
            this._nom = nom;
        }
        set prenom(prenom: string) {
            this._prenom = prenom;
        }
        set age(age: number) {
            this._age = age;
        }
        set taille(taille: number) {
            this._taille = taille;
        }
        set poids(poids: number) {
            this._poids = poids;
        }

        // Le constructeur 
        constructor(nom: string, prenom: string, age: number,
            taille: number, poids: number) {
            this._nom = nom;
            this._prenom = prenom;
            this._age = age;
            this._taille = taille;
            this._poids = poids;
        }
    }
    export class Etudiant extends Personne {

        _promotion: string;

        // Getters 
        get promotion() {
            return this._promotion;
        }

        // Setters 
        set promotion(promo: string) {
            this._promotion = promo;
        }

        // Le constructeur 
        constructor(nom: string, prenom: string, age: number,
            taille: number, poids: number, promo: string) {
            super(nom, prenom, age, taille, poids); // Appel du constructeur de la classe Personne 
            this._promotion = promo;
        }

    }
    export class Cours {

        _intitule: string;

        // Getters 
        get intitule() {
            return this._intitule;
        }

        // Setters 
        set intitule(intitule: string) {
            this._intitule = intitule;
        }

        // Le constructeur 
        constructor(intitule: string) {
            this._intitule = intitule;
        }
    }
    export class Formateur extends Personne {

        _listeCours: Cours[];

        // Getters 
        get listeCours() {
            return this._listeCours;
        }

        // Setters 
        set promotion(listeCours: Cours[]) {
            this._listeCours = listeCours;
        }

        // Le constructeur 
        constructor(nom: string, prenom: string, age: number,
            taille: number, poids: number, listeCours: Cours[]) {
            super(nom, prenom, age, taille, poids); // Appel du  constructeur de la classe Personne 
            this._listeCours = listeCours;
        }

        // Ajouter un cours 
        ajouterCours(cours: Cours) {
            this._listeCours.push(cours);
        }

        afficherListeCours() {
            this._listeCours.forEach(element => {
                console.log(" - " + element.intitule);
            });
        }

        afficher() {
            console.log("Moi, " + this._nom + " " + this._prenom + ", j'enseigne les cours de : ");
            this.afficherListeCours();
        }
    }
}
let listeDeCours = [new ENIecole.Cours("Java"), new ENIecole.Cours("JavaScript")];
let moi = new ENIecole.Formateur("Caliendo", "Julien", 35, 185, 81, listeDeCours);
moi.afficher(); 