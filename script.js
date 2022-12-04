function deviseFc(){
    let usd = document.getElementById("usd");
    let fc = document.getElementById("cdf").value;
    let fcfa = document.getElementById("fcfa");
    let euro = document.getElementById("euro");
    if (fc !=""){
    usd.value= Number.parseInt(fc,10) / 2020;
    fcfa.value = Number.parseFloat(fc,10) * 0.30;
    euro.value=Number.parseFloat(fc,10) * 0.00046;
} 
 }
function deviseE(){
    let usd = document.getElementById("usd");
    let euro = document.getElementById("euro").value;
    let fcfa = document.getElementById("fcfa");
    let cdf = document.getElementById("cdf");
    if (euro !=""){
    usd.value= Number.parseInt(euro,10) * 1.05;
    fcfa.value = Number.parseFloat(euro,10) * 655.95;
    cdf.value=Number.parseFloat(euro,10) * 2160.17;
     }
} 
function deviseD(){
    let euro = document.getElementById("euro");
    let usd = document.getElementById("usd").value;
    let fcfa = document.getElementById("fcfa");
    let cdf = document.getElementById("cdf");
    if (usd !=""){
    euro.value= Number.parseInt(usd,10) * 0.95;
    fcfa.value = Number.parseFloat(usd,10) * 622.50;
    cdf.value=Number.parseFloat(usd,10) * 2020;
}  }
function deviseFcfa(){
    let usd = document.getElementById("usd");
    let fcfa = document.getElementById("fcfa").value;
    let fc = document.getElementById("cdf");
    let euro = document.getElementById("euro");
    if (fcfa !=""){

        usd.value= Number.parseInt(fcfa,10) * 0.0016;
        fc.value = Number.parseFloat(fcfa,10) * 3.29;
        euro.value=Number.parseFloat(fcfa,10) * 0.0015;
    }
} 

