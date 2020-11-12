function calcularDecimal(){

    var valorBin = document.getElementById('campbin');
    var tamanhoBin = valorBin.value.length;
    var resultado = document.getElementById('res');
    var decimal = parseInt(valorBin.value, 2);

    for (var i = 0; i<tamanhoBin; i++)
    {
        if (valorBin.value.charAt(i) !== '0' && valorBin.value.charAt(i)!=='1')
        {
            alert('Colocar um valor binário de digitos 0 ou 1');
            break;

        }
    }
    
    resultado.innerHTML = "O valor em decimal é : "+decimal;
   
}
