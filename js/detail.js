

var cebit= {
    messename: "CeBIT",
    kosten: "50€"
 };

var conhit ={
    messename: "ConHIT",
    kosten: "30€"
};

var webtech ={
    messename: "WebTeCH",
    kosten: "300€"
};


function auslesen(){
    document.getElementById("cebit").innerHTML=cebit.messename;
    document.getElementById("kostencebit").innerHTML=cebit.kosten;

    document.getElementById("conhit").innerHTML=conhit.messename;
    document.getElementById("kostenconhit").innerHTML=conhit.kosten;

    document.getElementById("webtech").innerHTML=webtech.messename;
    document.getElementById("kostenwebtech").innerHTML=webtech.kosten;
}
