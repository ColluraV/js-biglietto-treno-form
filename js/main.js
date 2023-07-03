

//20% sconto minorenni
//40% sconto senior over 65 
//0.21€ al km

// dati utente 

const nomeInputElement = document.querySelector("[name='nomeInput']");
const cognomeInputElement = document.querySelector("[name='cognomeInput']");
const etaInputElement = document.querySelector ("[name='etaInput']");
const distanzaInputElement = document.querySelector("[name='trattaInput']");


const btnLogin = document.querySelector(".pulsante-conferma");

console.dir(nomeInputElement);
console.dir (etaInputElement);
console.dir(distanzaInputElement);
console.dir(cognomeInputElement);



const tariffa = 0.21;



const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getUTCMonth() + 1;
const currentYear = date.getFullYear();
const currentDate = ` ${currentDay}/${currentMonth}/${currentYear} `;

//bottone clik


const btnConferma = document.querySelector(".confermaForm");
btnConferma.addEventListener("click", function(){

    const firstName = nomeInputElement.value;
    const secondName = cognomeInputElement.value;
    const eta = etaInputElement.value ;
    const distanza= distanzaInputElement.value;

    console.log(distanza);
    console.log(eta);





    const prezzoLordo = ( distanza * tariffa );
    const ridottoMinori = ( prezzoLordo - (prezzoLordo * 0.20 )  )
    const ridottoSenior = ( prezzoLordo - ( prezzoLordo * 0.40 ) )





    if( eta < 18 ){
        document.getElementById("prezzo").innerHTML = (ridottoMinori.toFixed(2)) ;
        document.getElementById("fasciaPrezzo").innerHTML = (`Ridotto minori`) ;
    
    
    }else if(eta < 65) {
        document.getElementById("prezzo").innerHTML = ( prezzoLordo.toFixed(2)) ;
        document.getElementById("fasciaPrezzo").innerHTML = (`Prezzo Pieno` ) ;
    
    
    }else if(eta > 65) {
            document.getElementById("prezzo").innerHTML = ( ridottoSenior.toFixed(2)) ;
            document.getElementById("fasciaPrezzo").innerHTML = ( `Ridotto Senior`) ;
    
        }





        
        console.log( prezzoLordo.toFixed(2) );
        console.log( ridottoMinori.toFixed(2) );
        console.log( ridottoSenior.toFixed(2) );
        
        console.log(`Ridotto minori ` + ridottoMinori.toFixed(2) );
        console.log( `Ridotto Senior `+ ridottoSenior.toFixed(2) );
        





        document.getElementById("Nome").innerHTML = ` ${firstName}`;
        document.getElementById("secondName").innerHTML = ` ${secondName}`;
        document.getElementById("distanza").innerHTML = `Distanza ${distanza} Km`;
        document.getElementById("data").innerHTML = `${currentDate}`;
        document.getElementById("numBiglietto").innerHTML = `${numBiglietto}`;
        
        console.log(firstName);
        


}
)


//numero biglietto
const primoMin =  0;
const primoMax = 15;
const primoNum = Math.round(Math.random() * (primoMax - primoMin + 1)) + primoMin;


const secondoMin = 10;
const secondoMax = 99;
const secondoNum = Math.round(Math.random() * (secondoMax - secondoMin + 1)) + secondoMin;

const terzoMin = 10;
const terzoMax = 99;
const terzoNum = Math.round(Math.random() * (terzoMax - terzoMin + 1)) + terzoMin;

const numBiglietto = ( "#" + primoNum + secondoNum + terzoNum );

console.log(numBiglietto);








