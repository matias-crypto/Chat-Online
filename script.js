function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();

    if (message !== '') {
        // Aquí enviarías el mensaje a través de AJAX a tu servidor PHP para ser procesado y almacenado en la base de datos simulada
        // Por ahora, simplemente mostramos el mensaje en el chatBox
        var chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += '<p>' + message + '</p>';
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Limpiar campo de entrada
        messageInput.value = '';
    }
}
