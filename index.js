document.addEventListener('DOMContentLoaded', function () {
    let i;
    document.getElementById("input").onkeypress = tasta;
    document.getElementsByClassName("minus").onkeypress = sterge;

    if (localStorage.getItem("nr") == null || localStorage.getItem("nr") == undefined)
    /* Daca utilizatorul nu a mai folosit platforma TO-do, atunci
     *@getItem("nr") ar trebui sa nu existe deci sa initializeze i cu 0;
     *altfel, ar trebui sa aiba o valoare sub forma de String si sa continue
     *de unde a ramas cu numaratoarea.
     */ {  i = 0; }
    else {  i = parseInt(localStorage.getItem("nr"), 10); }


    console.log("prima data i=" + i);
    console.log("parseInt(localStorage.getItem('nr'),10)=", + parseInt(localStorage.getItem("nr"), 10));
    console.log("localStorage.getItem('nr')=" + localStorage.getItem("nr"));

    //  !!  Restabileste TO-do-urile din localStorage.  !!  (functioneaza perfect)(sau lasa)


    var count = parseInt(localStorage.getItem("nr"), 10);



    var char2 = "";
    var todo3 = "";
    for (var k = 0; k <= i; k++) {
        console.log(" in primul for k=" + k);
        todo3 = localStorage.getItem(k.toString());
        
        console.log("localStorage.getItem(k.toString())=" + localStorage.getItem(k.toString()));
        var para = document.createElement("a");
        //!!!API GASIRE PRODUSE!!! - INCA IN DEVELOPMENT, CODUL PENTRU DEMONSTRATIE HACKATHON
        para.setAttribute("target", "_blank");
        if (k == 0) {
            para.setAttribute("href", "https://www.auchan.ro/store/Orez-Riso-Scotti-bob-cu-bob-colosal-1-kg/p/011842");//orez
        } else if (k == 1) {
            para.setAttribute("href", "https://www.mega-image.ro/ro-ro/Ingrediente-culinare/Ulei-otet-si-suc-de-lamaie/Ulei-de-masline/Ulei-de-masline-extravirgin-500ml/p/4529");//ulei de masline
        } else {
            para.setAttribute("href", "https://www.emag.ro/supermarket/lapte-3-5-grasime-1-7l-napolact-30608/pd/DX87V2MBM/");//lapte
        }
        var node = document.createTextNode(todo3);
        if(todo3!=null) para.appendChild(node);
        Pdiv = document.createElement("div");
        Pdiv.setAttribute("title","asta e primul div");
        

        var RemoveDIV = document.createElement("div");
        
        var RemoveBTN = document.createElement("button");
        var minus = document.createTextNode("-");


        
        para.setAttribute("id", "button" + k.toString());

        var br = document.createElement("br");

        br.setAttribute("id", "br" + k.toString());
        br.setAttribute("class", "br");





        

        listuta = document.getElementById("div1");
        div2 = document.createElement("div");
        listuta.appendChild(div2);
        div2.appendChild(para);
    }

    var todo = [];
    // document.getElementById("buton").onclick = add;
    document.getElementById("button").onclick = storage;
    document.getElementById("vanish").onclick = vanish;




    function add() {
        let i;
        if (localStorage.getItem("nr") == null || localStorage.getItem("nr") == undefined)
             i = 0;
        else
             i = parseInt(localStorage.getItem("nr"), 10);

        console.log("i in add()=" + i);


        var da = document.getElementById("input").value;
        if (da.localeCompare("")) { //functia se executa doar daca am bagat text propriu-zis.




            todo[i] = da; //introdu variabila in vector.
            var para = document.createElement("a"); //creeaza un element @p in "div1" si desparte-le cu <br>.
            var node = document.createTextNode(da);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
            let stringI = i.toString();
            para.setAttribute("id", "button" + stringI);
            var br = document.createElement("br");
            //!!!API GASIRE PRODUSE!!! - INCA IN DEVELOPMENT, CODUL PENTRU DEMONSTRATIE HACKATHON
            para.setAttribute("target", "_blank");
            if (i == 0) {
                para.setAttribute("href", "https://www.auchan.ro/store/Orez-Riso-Scotti-bob-cu-bob-colosal-1-kg/p/011842");//orez
                console.log("unu");
            } else if (i == 1) {
                para.setAttribute("href", "https://www.mega-image.ro/ro-ro/Ingrediente-culinare/Ulei-otet-si-suc-de-lamaie/Ulei-de-masline/Ulei-de-masline-extravirgin-500ml/p/4529");//ulei de masline
                console.log("doi");
            } else {
                para.setAttribute("href", "https://www.emag.ro/supermarket/lapte-3-5-grasime-1-7l-napolact-30608/pd/DX87V2MBM/");//lapte
                console.log("trei");
            }
            br.setAttribute("id", "br" + stringI);
            br.setAttribute("class", "br" + stringI);
            element.appendChild(br);


            var RemoveBTN = document.createElement("button");

            var minus = document.createTextNode("-");


            var unde = document.getElementById("remover");
            var div3 = document.getElementById("div1");
            RemoveBTN.appendChild(minus);

            RemoveBTN.setAttribute("name", k.toString());
            RemoveBTN.setAttribute("class", "minus btn-block btn " + i.toString());


            
            document.getElementById("input").value = "";

            localStorage.setItem(i.toString(), da); //salveaza ultimul element adaugat sub identificatorul @i 
            //pe care trebuie sa il transform in String din cauza metodei @setItem().

            localStorage.setItem("nr", i.toString());//salveaza ultimul index introdus in vector, identificator "nr".        

            div4 = document.createElement("div");
            div3.appendChild(div4);
            div3.appendChild(RemoveBTN);
i++;
localStorage.setItem("nr",i.toString());



        }

    }

    function storage() { //functie care arata intr-o alerta ce e salvat in @localStorage
        var counter = localStorage.getItem("nr");

        counter = parseInt(counter, 10);





        var char = "";
        var todo2 = "";
        for (var j = 0; j <= counter; j++) {
            todo2 = localStorage.getItem(j.toString());
            char += todo2 + "\n";



        }
        alert(char);



    }
    function vanish() {

        localStorage.clear();
        location.reload();
        i=0;
    }
    function tasta() {

        var char = event.which || event.keyCode;
        if (char == 13) add();

    }
    function sterge() {

        alert("Am intrat in functie");
        var deSters = RemoveBTN.name;
        var nrDeSters = parseInt(deSters, 10);



        var bll = localStorage.getItem("nr");
        bll--;
        localStorage.setItem("nr", bll);
        location.reload();

    }

})



//localStorage.setItem('user', JSON.stringify(user));  pentru adaugare in storage

//var user = JSON.parse(localStorage.getItem('user')); pentru a sterge tot ce este stocat in localStorage

//localStorage.clear();

//var id = null;
var id = null;
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
  alert("Introduceti produsele iar Sergiu le va gasi la cel mai mic pret de pe magazinele online din Romania!");
}

