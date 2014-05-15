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

var ueberschrift ={
    name: "Messe",
    kosten: "Selbstkosten"
};

/* Funktion zum Auslesen der Messekosten */
function auslesenKosten() {
    document.getElementById("hmesse").innerHTML = ueberschrift.name;
    document.getElementById("hkosten").innerHTML = ueberschrift.kosten;

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
function auslesenCebitTeilnehmer(){
    document.getElementById("cebitTeilnehmer1name").innerHTML = cebitTeilnehmer1.name;
    document.getElementById("cebitTeilnehmer1vorname").innerHTML = cebitTeilnehmer1.vorname;
    document.getElementById("cebitTeilnehmer1studiengang").innerHTML = cebitTeilnehmer1.studiengang;
    document.getElementById("cebitTeilnehmer1email").innerHTML = cebitTeilnehmer1.email;

    document.getElementById("cebitTeilnehmer2name").innerHTML = cebitTeilnehmer2.name;
    document.getElementById("cebitTeilnehmer2vorname").innerHTML = cebitTeilnehmer2.vorname;
    document.getElementById("cebitTeilnehmer2studiengang").innerHTML = cebitTeilnehmer2.studiengang;
    document.getElementById("cebitTeilnehmer2email").innerHTML = cebitTeilnehmer2.email;

    document.getElementById("cebitTeilnehmer3name").innerHTML = cebitTeilnehmer3.name;
    document.getElementById("cebitTeilnehmer3vorname").innerHTML = cebitTeilnehmer3.vorname;
    document.getElementById("cebitTeilnehmer3studiengang").innerHTML = cebitTeilnehmer3.studiengang;
    document.getElementById("cebitTeilnehmer3email").innerHTML = cebitTeilnehmer3.email;

    document.getElementById("cebitTeilnehmer4name").innerHTML = cebitTeilnehmer4.name;
    document.getElementById("cebitTeilnehmer4vorname").innerHTML = cebitTeilnehmer4.vorname;
    document.getElementById("cebitTeilnehmer4studiengang").innerHTML = cebitTeilnehmer4.studiengang;
    document.getElementById("cebitTeilnehmer4email").innerHTML = cebitTeilnehmer4.email;
}

function auslesenConhitTeilnehmer(){
    document.getElementById("conhitTeilnehmer1name").innerHTML = conhitTeilnehmer1.name;
    document.getElementById("conhitTeilnemer1vorname").innerHTML = conhitTeilnehmer1.vorname;
    document.getElementById("conhitTeilnehmer1studiengang").innerHTML = conhitTeilnehmer1.studiengang;
    document.getElementById("conhitTeilnehmer1email").innerHTML = conhitTeilnehmer1.email;
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



