// JavaScript logika

function potvrdiRezervaciju(){
    let x = documen.forms("potvrdiRezervaciju")("Rezervacija").value;
    if (x=="") {
        alert ("Name must be filled out");
        return false;
    }


}