function test(n){
    d = new Array(31);
    l = 0;
    while (n > 0) {
        d[l] = n % 2;
        n = Math.trunc(n / 2);
        l += 1;
    }
    for (p = 1; p < 1 + Math.trunc(l / 2); ++p) {
        ok = true;
        for (i = 1; i < l - p; ++i) {
            if (d[i] != d[i + p]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            return p;
        }
    }
}


function llamarFuncion(){
    const forma = document.getElementById('forma');
    let aux = forma['numero'];
    let numero = parseInt(aux.value);
    let res = test(numero);
    if (res === undefined){
        res = -1;
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${res}`;
};
