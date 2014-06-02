/**
 * Created by pauer on 02.06.14.
 */

/* Methode zur Überpüfung der Eingabe innerhalb der Textfelder */
function checkEingabe(){
    if(document.Formular.name.value == "")  //Name des Formular.Name des textfeldes
    {
        alert("Bitte Ihren Namen eingeben!");
        document.Formular.name.focus();
        return false;
    }
    if(document.Formular.vorname == ""){
        alert("Bitte Ihren Vornamen eingeben!");
        document.Formular.vorname.focus();
        return false;
    }
    if(document.Formular.matrikelnr == ""){
        alert("Bitte gültige Matrikelnummer eingeben!");
        document.Formular.matrikelnr.focus();
        return false;
    }
    if(document.Formular.email == ""){
        alert("Bitte Email Adresse eingeben!");
        document.Formular.email.focus();
        return false;
    }
    if(document.Formular.handy == ""){
        alert("Bitte Handynummer eingeben!");
        document.Formular.handy.focus();
        return false;
    }

}