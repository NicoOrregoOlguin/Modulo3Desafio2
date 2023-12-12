document.getElementById('verificarBtn').addEventListener('click', calcularStickers);

function calcularStickers() {
    var total = parseInt(document.getElementById('sticker1').value || 0) +
                parseInt(document.getElementById('sticker2').value || 0) +
                parseInt(document.getElementById('sticker3').value || 0);
    var resultado = document.getElementById('resultado');
    if (total <= 10) {
        resultado.innerText = 'Llevas ' + total + ' stickers';
        resultado.style.color = 'black';
    } else {
        resultado.innerText = 'Llevas demasiados stickers';
        resultado.style.color = 'red';
    }
}
