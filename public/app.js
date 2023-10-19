$(document).ready(() => {
    $("#enviar").click(() => {
        const mensaje = {
            nombre: $("#nombre").val(),
            mensaje: $("#mensaje").val()
        };

        fetch('http://localhost:3000/mensajes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mensaje)
        })
        .then(response => {
            if (response.ok) {
                console.log('Message sent successfully');
                obtenerMensajes(); // Fetch messages after sending a new one
            } else {
                console.error('Failed to send message');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    function obtenerMensajes() {
        fetch('http://localhost:3000/mensajes')
        .then(response => response.json())
        .then(data => {
            // Handle received data and update the UI
            console.log('Recieved Messages', data);
            const notificationSound = document.getElementById('notificationSound');
            notificationSound.play();
            const mensajesDiv = $("#mensajes");
            mensajesDiv.empty(); // Clear previous messages

            data.forEach(mensaje => {
                mensajesDiv.append(`
                    <div class="mensaje">
                        <strong>${mensaje.nombre}:</strong> ${mensaje.mensaje}
                    </div>
                `);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
