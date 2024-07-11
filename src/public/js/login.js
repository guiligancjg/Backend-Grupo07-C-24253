//const PORT = 3000;
//const SERVER_URL = `http://localhost:${PORT}`;
const SERVER_URL = `https://backend-grupo07-c-24253.onrender.com/`;


//LOGUARSE USUARIO

document.getElementById('loginForm').addEventListener('submit', (event)=> {
    event.preventDefault();

    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Error al iniciar sesión');
        }
        return response.json();
    })
    .then(data => {
        sessionStorage.setItem('authToken', JSON.stringify(data));
        //console.log(authData.html)
        //sessionStorage.setItem('token', data.token);
        window.location.href = '/protected/pedidos.html';
        //alert('Inicio de Seción Exitoso');
        
    })
    .catch(error => {
        console.log('Error: ', error);
        alert('Error al inicar');
    })
});
