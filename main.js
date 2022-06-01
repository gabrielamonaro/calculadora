function inserir(numero){
    var res = window.document.getElementById('res');
    res.innerHTML = res.innerText + numero;
 }

 function cancel(){
    var res = window.document.getElementById('res');
    res.innerHTML= '';
 }
 function igual(){
    var resultado = window.document.getElementById('res');
        if(res){
            document.getElementById('res').innerText = eval(resultado.innerHTML);
        }
}