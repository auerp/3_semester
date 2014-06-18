/**
 * Created by pauer on 11.06.14.
 */

function klick(id) {
    var klassenName = document.getElementById(id).className;
    var klasse = document.getElementsByClassName(klassenName);
    var aktiv = document.getElementById(id);
    for (var i=0; i<klasse.length; i++){
        klasse[i].classList.remove("aktiv");
    }
    aktiv.classList.add('aktiv');
}