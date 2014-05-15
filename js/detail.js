/* JSON-Objekte für Tabelle "Kosten der Messe" erstellen */
var cebit = {
    messename: "CeBIT",
    kosten: "50€"
};

var conhit = {
    messename: "ConHIT",
    kosten: "30€"
};

var webtech = {
    messename: "WebTeCH",
    kosten: "300€"
};

/* Funktion zum Auslesen der Messekosten */
function auslesenKosten() {
    document.getElementById("cebit").innerHTML = cebit.messename;
    document.getElementById("kostencebit").innerHTML = cebit.kosten;

    document.getElementById("conhit").innerHTML = conhit.messename;
    document.getElementById("kostenconhit").innerHTML = conhit.kosten;

    document.getElementById("webtech").innerHTML = webtech.messename;
    document.getElementById("kostenwebtech").innerHTML = webtech.kosten;
}



/* JSON-Objekte für Tabelle "Teilnehmer" erstellen*/
var cebitTeilnehmer1 = {
    name: "Ent",
    vorname: "Thilo",
    studiengang: "IB",
    email: "t.ent@gmail.de"
};

var cebitTeilnehmer2 = {
    name: "Kraus",
    vorname: "Martina",
    studiengang: "IB",
    email: "m.kraus@hs-mannheim.de"
};

var cebitTeilnehmer3 = {
    name: "Smits",
    vorname: "Thomas",
    studiengang: "UIB",
    email: "t.smits@hs-mannheim.de"
};

var cebitTeilnehmer4 = {
    name: "Gröschel",
    vorname: "Michael",
    studiengang: "UIB",
    email: "m.gröschel@hs-mannheim.de"
};

var conhitTeilnehmer1={
    name: "Ent",
    vorname: "Thilo",
    studiengang: "IB",
    email: "t.ent@gmail.de"
};

var conhitTeilnehmer2 = {
    name: "Kraus",
    vorname: "Martina",
    studiengang: "IB",
    email: "m.kraus@hs-mannheim.de"
};

var conhitTeilnehmer3 = {
    name: "Smits",
    vorname: "Thomas",
    studiengang: "UIB",
    email: "t.smits@hs-mannheim.de"
};

var conhitTeilnehmer4 = {
    name: "Gröschel",
    vorname: "Michael",
    studiengang: "UIB",
    email: "m.gröschel@hs-mannheim.de"
};

var webtechTeilnehmer1={
    name: "Ent",
    vorname: "Thilo",
    studiengang: "IB",
    email: "t.ent@gmail.de"
};

var webtechTeilnehmer2 = {
    name: "Kraus",
    vorname: "Martina",
    studiengang: "IB",
    email: "m.kraus@hs-mannheim.de"
};

var webtechTeilnehmer3 = {
    name: "Smits",
    vorname: "Thomas",
    studiengang: "UIB",
    email: "t.smits@hs-mannheim.de"
};

var webtechTeilnehmer4 = {
    name: "Gröschel",
    vorname: "Michael",
    studiengang: "UIB",
    email: "m.gröschel@hs-mannheim.de"
};

/* Funktion zum auslesen der Teilnehmer */
function auslesenTeilnehmer(){

}

/*
 function klickSubNav(obj) {
 var sub_nav = document.getElementByID('sub_nav');
 var kinder = sub_nav.children;
 for (var i = 0; i < kinder.length; i++) {
 kinder[i].classList.remove("submenuAktiv");
 }
 var submenuAktiv = document.getElementById(obj);
 submenuAktiv.classList.add("submenuAktiv");
 }*/


window.onload = montre;
function montre(id) {
    var d = document.getElementById(id);
    for (var i = 1; i <= 10; i++) {
        if (document.getElementById('smenu' + i)) {
            document.getElementById('smenu' + i).style.display = 'none';
        }
    }
    if (d) {
        d.style.display = 'block';
    }
}



