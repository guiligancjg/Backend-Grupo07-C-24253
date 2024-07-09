//LOGUARSE USUARIO

document.getElementById('logout').addEventListener('click', (event)=> {
    event.preventDefault();
    sessionStorage.removeItem('authToken');
    window.location.href = '../index.html';
});
