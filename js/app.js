var listaAmigos = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if(nomeAmigo != ''){
        if(!listaAmigos.includes(nomeAmigo)){
            listaAmigos.push(nomeAmigo);
        }else{
            alert("Amigo já adcionado");
        }
    }
    mostrarLista(listaAmigos);
    document.getElementById('nome-amigo').value = "";
}

function mostrarLista(listaDeAmigos) {
    document.getElementById('lista-amigos').innerHTML = listaDeAmigos;
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.querySelector('.prizeDraw__container').innerHTML = '';
    // document.getElementById('lista-sorteio').innerHTML = '';

}

function embaralhar(listaDeAmigos) {
    for (let i = listaDeAmigos.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [listaDeAmigos[i], listaDeAmigos[j]] = [listaDeAmigos[j], listaDeAmigos[i]];
    }
    return listaDeAmigos;
}

function sortear(){
    embaralhar(listaAmigos);
    document.querySelector('.prizeDraw__container').innerHTML = '';
    for (let i=0; i<listaAmigos.length; i++) {
        if(i == listaAmigos.length-1){
            document.querySelector('.prizeDraw__container').innerHTML += `<p>${listaAmigos[i]} ==> ${listaAmigos[0]}</p>`; 
        }else{
            document.querySelector('.prizeDraw__container').innerHTML += `<p>${listaAmigos[i]} ==> ${listaAmigos[i+1]}</p>`; 
        }
    }
}   

function sortear2(){
    embaralhar(listaAmigos);
    document.querySelector('.prizeDraw__container').innerHTML = '';
    for (let i=0; i<listaAmigos.length; i++) {
        document.querySelector('.prizeDraw__container').innerHTML += `<p>${i+1}º ${listaAmigos[i]}</p>`; 
    }
}   
