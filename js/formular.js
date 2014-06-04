$(document).ready(function () {

        $('#formularIndex').submit(function (event) {

                var error = "Einige Eingaben sind fehlerhaft. Bitte überprüfen sie ihre Eingaben!";
                var fehlerhafteTextfelder = new Array();

                //Prüft Feld Name
                var nachName = $('#name').val();
                var suche = nachName.match("[A-Za-z]+");
                if (nachName != suche) {
                    fehlerhafteTextfelder.push($('#name'));
                    //alert("Bitte Ihren Namen eingeben!");
                }

                //Prüft Feld Vorname
                var vorName = $('#vorname').val();
                var suche = vorName.match("[A-Za-z]+");
                if (vorName != suche) {
                    fehlerhafteTextfelder.push($('#vorname'));
                    //alert("Bitte Ihren Vornamen eingeben!");
                }

                //Prüft Feld Matrikelnummer
                var matrikelNr = $('#matrikelnr').val();
                var suche = matrikelNr.match("[0-9]+");
                if (matrikelNr != suche) {
                    fehlerhafteTextfelder.push($('#matrikelnr'));
                    //alert("Bitte gültige Matrikelnummer eingeben!");
                }

                //Prüft Feld Email
                var emailAdresse = $('#email').val();
                var suche = emailAdresse.match("[a-zA-Z0-9-+_.]+@[a-zA-Z0-9-+_.]+\.[a-z]{2,4}");
                if (emailAdresse != suche) {
                    fehlerhafteTextfelder.push($('#email'));
                    //alert("Bitte Email Adresse eingeben!");
                }

                //Prüft Feld auf Handynummer
                var handyNummer = $('#handy').val();
                var suche = handyNummer.match("0[0-9]+");
                if (handyNummer != suche) {
                    fehlerhafteTextfelder.push($('#handy'));
                    //alert("Bitte Handynummer eingeben!");
                }

                // entfernt Markierung
                $.each($("input"), function () {
                    $(this).removeClass('fehler');
                });

                //Markiert Feld mit ungültiger Eingabe
                if (fehlerhafteTextfelder.length != 0) {
                    for (i in fehlerhafteTextfelder) {
                        fehlerhafteTextfelder[i].addClass('fehler');
                    }

                    alert(error) // Ruft Fehlermeldung auf

                    // verhindert  absenden der Daten
                    event.preventDefault();

                    // fokusiert erstes Feld mit Fehler
                    fehlerhafteTextfelder[0].focus();
                }
            }
        )
    }
);