document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const rut = document.getElementById('rut').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Si todo está bien, puedes enviar los datos a tu servidor o realizar alguna otra acción
        // Por ejemplo, podrías enviarlos a través de AJAX o Fetch

        // Aquí podrías enviar los datos a través de AJAX o Fetch

        // Por ahora, solo mostraremos un mensaje de éxito
        alert('Registro exitoso!');
    });
});