document.getElementById("olá").innerHTML = "Hello World"
document.getElementsByClassName('centralizar')
const centrais = document.getElementsByClassName('centralizar')

centrais[0].style.textAlign = "center"
centrais[1].style.textAlign = "center"

for(var i = 0; i < centrais.length; i++){
    centrais[i].style.backgroundColor = "yellow"
}

const btn_aviso = document.querySelector('#btn-aviso')

/*btn_aviso.addEventListener('click', function() {
    alert("O site deseja abrir o Utorrent!")
})*/

btn_aviso.addEventListener('click', emiteAlerta)

function emiteAlerta(){
    alert("O site deseja abrir o Utorrent!")
}