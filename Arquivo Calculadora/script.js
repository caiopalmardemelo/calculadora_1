function calculadora(opera) {
    let pons = parseFloat(document.getElementById('iem').value);
    let pins = parseFloat(document.getElementById('idem').value);
    let asnw = 0;

    if(isNaN(pons) || isNaN(pins)){
        alert('hello kitty');
    }else{

        if (opera == '+'){
            asnw = pons + pins;
        }else if (opera == '-'){
            asnw = pons - pins;
        }else if (opera == '*'){
            asnw = pons * pins;
        }else if (opera == '/'){
            asnw = pons / pins;
        }else if (opera == '%'){
            asnw = pons / 100 * pins;        
        }else if (opera == '^'){
            asnw = pons ** pins;
        }
        document.getElementById('rslt').textContent = 'Resultado:' + asnw;

    }
}