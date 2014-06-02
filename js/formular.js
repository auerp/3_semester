/**
 * Created by pauer on 02.06.14.
 */

/* Methode zur Überpüfung der Eingabe innerhalb der Textfelder */
function checkEingabe() {

    result = true;

    // Prüft Feld Name
    if (document.Formular.Name.value == "") {
        alert("Bitte Ihren Namen eingeben!");
        document.Formular.Name.focus(); // setzt Cursor auf Textfeld
        return false; // erzeugt Abbruch und verhindert die weiteren Abfrageb
    }

    //Prüft Feld Vorname
    if (document.Formular.Vorname == "") {
        alert("Bitte Ihren Vornamen eingeben!");
        document.Formular.Vorname.focus();
        return false;
    }

    //Prüft Feld Matrikelnummer
    if (document.Formular.Matrikelnr == "") {
        alert("Bitte gültige Matrikelnummer eingeben!");
        document.Formular.Matrikelnr.focus();
        return false;
    }

    //Prüft Feld Email
    if (document.Formular.Email == "") {
        alert("Bitte Email Adresse eingeben!");
        document.Formular.Email.focus();
        return false;
    }

    //Prüft Feld Email auf @ und .
    if (document.Formular.Email.value.indexOf("@") == -1 || //"-1" nicht Inhalt der Zeichenkette
        document.Formular.Email.value.indexOf(".") == -1) {
        alert("Keine gültige Email Adresse");
        document.Formular.Email.focus();
        return false;
    }

    //Prüft Feld auf Handynummer
    if (document.Formular.Handy == "") {
        alert("Bitte Handynummer eingeben!");
        document.Formular.Handy.focus();
        return false;
    }

    // Prüft Feld Handynummer auf korrekte Eingabe, nur Zahlen erlaubt
    var checkHandy = 1;
    for (i = 0; i < document.Formular.Handy.value.length; ++i)
        if (document.Formular.Handy.value.charAt(i) < "0" ||    // Prüft Zeichen welche bei der Eingabe erlaubt sind
            document.Formular.Handy.value.charAt(i) > "9")
            chkZ = -1;

    if (chkZ == -1) {
        alert("Eingabe ist keine Zahl!");
        document.Formular.Handy.focus();
        return false;
    }
}

