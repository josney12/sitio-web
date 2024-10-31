// Evento para manejar el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Credenciales del administrador
    const adminEmail = "josneycastillo2011@gmail.com";
    const adminPassword = "12345";

    if (email === adminEmail && password === adminPassword) {
        // Redirigir a la página del administrador
        window.location.href = "admin.html";
        
    } else {
        // Validar con los usuarios almacenados en localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            // Guardar el email y nombre del usuario en localStorage
            localStorage.setItem('currentUserEmail', user.email);
            localStorage.setItem('currentUserName', user.name);

            // Redirigir a la página de cursos o página de inicio de usuario
            window.location.href = "index.html";
        } else {
            alert('Tipo de usuario no existe');
        }
    }
});


// app.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const adminEmail = "josneycastillo2011@gmail.com";
    const adminPassword = "12345";

    if (email === adminEmail && password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            localStorage.setItem('currentUserEmail', user.email);
            localStorage.setItem('currentUserName', user.name);
            window.location.href = "index.html";
        } else {
            alert('Tipo de usuario no existe');
        }
    }

window.onload = function() {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            fillTable('user-table', users, ['name', 'email', 'password']);
        });

    fetch('http://localhost:3000/payments')
        .then(response => response.json())
        .then(payments => {
            fillTable('payment-table', payments, ['nombre', 'correo', 'curso']);
        });

    fetch('http://localhost:3000/pqrs')
        .then(response => response.json())
        .then(pqrs => {
            fillTable('pqrs-table', pqrs, ['nombre', 'dni', 'tipo', 'mensaje']);
        });

    fetch('http://localhost:3000/workers')
        .then(response => response.json())
        .then(workers => {
            fillTable('worker-table', workers, ['nombre', 'dni', 'cuenta', 'telefono', 'direccion', 'destinatario', 'pedido']);
        });
};


function deleteUser(index) {
    fetch(`http://localhost:3000/users/${index}`, { method: 'DELETE' })
        .then(() => window.location.reload());
}

function deletePayment(index) {
    fetch(`http://localhost:3000/payments/${index}`, { method: 'DELETE' })
        .then(() => window.location.reload());
}

function deletePQRS(index) {
    fetch(`http://localhost:3000/pqrs/${index}`, { method: 'DELETE' })
        .then(() => window.location.reload());
}

function deleteWorker(index) {
    fetch(`http://localhost:3000/workers/${index}`, { method: 'DELETE' })
        .then(() => window.location.reload());
}

});




