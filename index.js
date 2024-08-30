const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&';
let intervalo;

let teste = document.getElementById('meuP');

let teste1 = document.getElementById('meuP123');

function startAnimation() {
    const elemento = document.getElementById('meubotao')
    intervalo = setInterval(() => {
        const meuBotao = letras[Math.floor(Math.random() * letras.length)];
        elemento.textContent = meuBotao;
        document.body.style.backgroundImage = 'url("depositphotos_159605622-stock-photo-spooky-doll-in-haunted-house.jpg")';
        document.body.style.fontSize = '16px';
        teste = document.body.style.color = "red"

       

    } , 1)

}

function backdro123() {
    const favDialog = document.getElementById('textoShow');

    // Verifica se o diálogo existe antes de tentar exibi-lo
    if (favDialog) {
        setTimeout(() => {
            favDialog.showModal();
        }, 3000);
    } else {
        console.error('Elemento de diálogo não encontrado.');
    }
}

