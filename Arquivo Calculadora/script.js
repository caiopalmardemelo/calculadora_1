function calculadora(opera) {
    let pons = parseFloat(document.getElementById('iem').value);
    let pins = parseFloat(document.getElementById('idem').value);
    let asnw = 0;

    if(isNaN(pons) || isNaN(pins)){
        alert('Hello Kitty não gostou disso!');
    }else{

        if (opera == '+'){
            asnw = pons + pins;
        }else if (opera == '-'){
            asnw = pons - pins;
        }else if (opera == '*'){
            asnw = pons * pins;
        }else if (opera == '/'){
            asnw = pons / pins;
        }
        document.getElementById('rslt').textContent = 'Resultado:' + asnw;

    }
}