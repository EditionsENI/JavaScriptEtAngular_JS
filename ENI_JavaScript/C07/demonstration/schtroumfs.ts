// C:\JavaScriptEtAngularJavaScript\C07\demonstration\schtroumfs.ts 
function traducteurSchtroumfs(mot: string): string {
    return "Schtroumfs";
}
let phrase: string = "Quand un Schtroumpf se fait un bleu, c'est comme quand nous, on ne se fait rien.";
let tabMots: string[] = phrase.split(' ');
for (let i = 0; i < tabMots.length; i++) {
    console.log(traducteurSchtroumfs(tabMots[i]));
} 