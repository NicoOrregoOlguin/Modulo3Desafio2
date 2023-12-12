document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ingresarBtn').addEventListener('click', verificarPassword);
});

function verificarPassword() {
    var pass = document.getElementById('select1').value + 
               document.getElementById('select2').value + 
               document.getElementById('select3').value;
    var mensaje = document.getElementById('mensajePassword');
    if (pass === '911') {
        mensaje.innerText = 'Password 1 correcto';
        mensaje.style.color = 'green';
    } else if (pass === '714') {
        mensaje.innerText = 'Password 2 correcto';
        mensaje.style.color = 'green';
    } else {
        mensaje.innerText = 'Password incorrecto';
        mensaje.style.color = 'red';
    }
}
