button = document.getElementById("bt");
button.addEventListener("click", function() {
function Citate() 
{
var v = ["Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. ― Marie Curie","The good thing about science is that it’s true whether or not you believe in it. ― Neil deGrasse Tyson","You cannot teach a man anything; you can only help him discover it in himself. - Galileo","One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don’t throw it away. ― Stephen Hawking","Nu căuta răspunsuri imposibile. Mai bine schimbă întrebările. Confucius","Omul înţelept nu spune tot ce gândeşte, dar ce spune, gândeşte. Aristotel","Nu putem rezolva probleme folosind același tip de gândire cu care au fost create. Albert Einstein","Nu este îndeajuns să ai o minte bună, scopul principal e să o folosești bine. Rene Descartes","Nu spune puțin în vorbe multe, ci mult în vorbe puține. Pitagora"];
    x=Math.floor(Math.random() *8);
    document.getElementById("demo").innerHTML = v[x];
    alert(200,v[x]);
}
}
)