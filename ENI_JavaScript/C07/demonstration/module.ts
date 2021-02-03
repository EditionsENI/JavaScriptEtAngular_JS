// C:\JavaScriptEtAngularJavaScript\C07\demonstration\module.ts 
module monModule {

    export class Vehicule {
        methodeDuVehicule() {
            console.log("Méthode du véhicule.");
        }
    }

    class Voiture extends Vehicule {
        methodeDeLaVoiture() {
            console.log("Méthode de la voiture.");
        }
    }

    class TracteurTondeuse extends Vehicule {
        methodeDuTracteurTondeuse() {
            console.log("Méthode du tracteur tondeuse.");
        }
    }
} 