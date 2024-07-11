//const PORT = 3000;
//const SERVER_URL = `http://localhost:${PORT}`;
const SERVER_URL = `https://backend-grupo07-c-24253.onrender.com/`;

//REGISTRAR USUARIO

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    console.log(`Nombre de usuario: ${email}`);
    console.log(`Password: ${password}`);

    fetch(`${SERVER_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error al registrarse');
        }
        return response.json();
    })
    .then(data => {
        
        //alert('Registro exitoso. Por favor, inicia sesión.');
        window.location.href = '/login.html';
        
        
    })
    .catch(error => {
        console.log('Error: ', error);
        alert('Error al registrase1111');
    })
});