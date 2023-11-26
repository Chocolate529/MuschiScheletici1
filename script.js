window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    const texte = document.getElementsByClassName('grup');
    var lastAtr = null;
    for (var i = 0; pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            if (t.target.getAttribute('data-position') != null) {
                if(lastAtr!= null){document.getElementById(lastAtr).style.visibility = "hidden"}
                let atribut = t.target.getAttribute('data-position');
                document.getElementById(atribut).style.visibility = "visible";
                document.getElementById("blank").style.visibility = "hidden";
                lastAtr = atribut;
            }
            else{
            if (t.target.parentElement.getAttribute('data-position') != null) {
                if(lastAtr!= null){document.getElementById(lastAtr).style.visibility = "hidden"}
                let atribut = t.target.parentElement.getAttribute('data-position');
                
                document.getElementById(atribut).style.visibility = "visible";
                document.getElementById("blank").style.visibility = "hidden";
                lastAtr = atribut;
            }
        }
    }
}
}