var count = 0;
var number = 1;

class Palvelu {
    constructor() {
        this.kaverit = [];
        this.viestit = [];
    }
}

var katriNiemenSome = new Palvelu;

class Kaveri {
    constructor(nimi) {
        this.nimi = nimi;
        this.kaverilista = [];
        this.viestilista = []; 
    }
    
    
}

class Viesti {
    constructor() {
        this.lahettaja = Kaveri;
        this.vastaanottaja = Kaveri; 
        this.viesti = String;
        this.tykkaykset = Number;
    }
}


function luoKaverit() {
    var kaveri1 = new Kaveri("Bill Gates");
    var kaveri2 = new Kaveri("Sauli Niinistö");
    var kaveri3 = new Kaveri("Esa Saarinen");
    var kaveri4 = new Kaveri("Jethro Rostedt");
    var kaveri5 = new Kaveri("Aku Louhimies");
    
    kaveri1.kaverilista.push(kaveri2);
    kaveri1.kaverilista.push(kaveri3);
    
    kaveri2.kaverilista.push(kaveri1);
    kaveri2.kaverilista.push(kaveri4);
    
    kaveri3.kaverilista.push(kaveri5);
    kaveri3.kaverilista.push(kaveri2);
    
    kaveri4.kaverilista.push(kaveri3);
    kaveri4.kaverilista.push(kaveri5);
    
    kaveri5.kaverilista.push(kaveri1);
    kaveri5.kaverilista.push(kaveri2);
    
    katriNiemenSome.kaverit.push(kaveri1);
    katriNiemenSome.kaverit.push(kaveri2);
    katriNiemenSome.kaverit.push(kaveri3);
    katriNiemenSome.kaverit.push(kaveri4);
    katriNiemenSome.kaverit.push(kaveri5);
    
}
    
    


function printtaaKaverit() {
    luoKaverit();
    document.getElementById("eka").innerHTML = katriNiemenSome.kaverit[0].nimi + " " + katriNiemenSome.kaverit[1].nimi + " " + katriNiemenSome.kaverit[2].nimi + " " + katriNiemenSome.kaverit[3].nimi + " " + katriNiemenSome.kaverit[4].nimi

}


function lahetaViesti(lahettaja, vastaanottaja, teksti, liket) {
    
    var ekaViesti;
    var tokaViesti;
    var kolmasViesti;
    var neljasViesti;
    var viidesViesti;
    
    
    if (count === 0) {
     ekaViesti = new Viesti();
     ekaViesti.lahettaja = lahettaja;
     ekaViesti.vastaanottaja = vastaanottaja;
     ekaViesti.viesti = teksti;
     ekaViesti.tykkaykset = liket;
     vastaanottaja.viestilista.push(ekaViesti);
     lahettaja.viestilista.push(ekaViesti);
     katriNiemenSome.viestit.push(ekaViesti); 
    }
    
     if (count === 1) {
     tokaViesti = new Viesti();
     tokaViesti.lahettaja = lahettaja;
     tokaViesti.vastaanottaja = vastaanottaja;
     tokaViesti.viesti = teksti;
     tokaViesti.tykkaykset = liket;
     vastaanottaja.viestilista.push(tokaViesti);
     lahettaja.viestilista.push(tokaViesti);
     katriNiemenSome.viestit.push(tokaViesti); 
    }
    
    if (count === 2) {
     kolmasViesti = new Viesti();
     kolmasViesti.lahettaja = lahettaja;
     kolmasViesti.vastaanottaja = vastaanottaja;
     kolmasViesti.viesti = teksti;
     kolmasViesti.tykkaykset = liket;
     vastaanottaja.viestilista.push(kolmasViesti);
     lahettaja.viestilista.push(kolmasViesti);
     katriNiemenSome.viestit.push(kolmasViesti); 
    }
    
    if (count === 3) {
     neljasViesti = new Viesti();
     neljasViesti.lahettaja = lahettaja;
     neljasViesti.vastaanottaja = vastaanottaja;
     neljasViesti.viesti = teksti;
     neljasViesti.tykkaykset = liket;
     vastaanottaja.viestilista.push(neljasViesti);
     lahettaja.viestilista.push(neljasViesti);
     katriNiemenSome.viestit.push(neljasViesti); 
    }
    
    if (count === 4) {
     viidesViesti = new Viesti();
     viidesViesti.lahettaja = lahettaja;
     viidesViesti.vastaanottaja = vastaanottaja;
     viidesViesti.viesti = teksti;
     viidesViesti.tykkaykset = liket;vastaanottaja.viestilista.push(viidesViesti);
     lahettaja.viestilista.push(viidesViesti);
     katriNiemenSome.viestit.push(viidesViesti); 
    }
    
    
}
   
//Ajaa funktion lahetaViesti() viisi kertaa tehtävänannon mukaisesti.

function viestienLuonti() {
    
    lahetaViesti(katriNiemenSome.kaverit[0], katriNiemenSome.kaverit[1], "Hei! Osta minulta Microsoft-tuotteita", 15);
    
    lahetaViesti(katriNiemenSome.kaverit[1], katriNiemenSome.kaverit[3], "Myy mun asunto!", 10);
    
    lahetaViesti(katriNiemenSome.kaverit[2], katriNiemenSome.kaverit[4], "Hellän dynaaminen tunnelma!", 10000);
    
    lahetaViesti(katriNiemenSome.kaverit[3], katriNiemenSome.kaverit[2], "Ostatko vokaalin?",1);
    
    lahetaViesti(katriNiemenSome.kaverit[4], katriNiemenSome.kaverit[1], "Tein isänmaallisen elokuvan.", 69);
    
      
    
}


function viestiNaytto() {
    
    if (number === 1) {
        viestienLuonti();
    }
    
    document.getElementById("toka").innerHTML = "Viestit yksi kerrallaan";
    
    if (number === 1) {
    document.getElementById("kolmas").innerHTML = ("Viesti 1 " + katriNiemenSome.viestit[0].lahettaja.nimi + " to " + katriNiemenSome.viestit[0].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[0].viesti);
        
    } 
    
    if (number === 2) {
    document.getElementById("neljas").innerHTML = ("Viesti 2 " + katriNiemenSome.viestit[1].lahettaja.nimi + " to " + katriNiemenSome.viestit[1].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[1].viesti);
        
    } 
    
    if (number === 3) {
    document.getElementById("viides").innerHTML = ("Viesti 3 " + katriNiemenSome.viestit[2].lahettaja.nimi + " to " + katriNiemenSome.viestit[2].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[2].viesti);
        
    } 
    
    if (number === 4) {
    document.getElementById("kuudes").innerHTML = ("Viesti 4 " + katriNiemenSome.viestit[3].lahettaja.nimi + " to " + katriNiemenSome.viestit[3].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[3].viesti);
        
    } 
    
    if (number === 5) {
    document.getElementById("seitsemas").innerHTML = ("Viesti 5 " + katriNiemenSome.viestit[4].lahettaja.nimi + " to " + katriNiemenSome.viestit[4].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[4].viesti);
        
    } 
    
    number++;
    
}

function kaikkiViestit() {
    
    document.getElementById("8").innerHTML = ("Viesti 1 " + katriNiemenSome.viestit[0].lahettaja.nimi + " to " + katriNiemenSome.viestit[0].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[0].viesti);
        
    document.getElementById("9").innerHTML = ("Viesti 2 " + katriNiemenSome.viestit[1].lahettaja.nimi + " to " + katriNiemenSome.viestit[1].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[1].viesti);
    
    document.getElementById("10").innerHTML = ("Viesti 3 " + katriNiemenSome.viestit[2].lahettaja.nimi + " to " + katriNiemenSome.viestit[2].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[2].viesti);
    
    document.getElementById("11").innerHTML = ("Viesti 4 " + katriNiemenSome.viestit[3].lahettaja.nimi + " to " + katriNiemenSome.viestit[3].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[3].viesti);
    
    document.getElementById("12").innerHTML = ("Viesti 5 " + katriNiemenSome.viestit[4].lahettaja.nimi + " to " + katriNiemenSome.viestit[4].vastaanottaja.nimi + ": " + katriNiemenSome.viestit[4].viesti);

    
}


