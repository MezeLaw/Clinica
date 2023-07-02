window.onload = function() { 

    var nombre = localStorage.getItem('userLogged');
    var loginBtn = document.getElementById('login-btn');
    var logOutBtn = document.getElementById('log-out-btn')
    var perfil = document.getElementById('perfil')
   
    if (nombre) {
        loginBtn.style.display = 'none';
        logOutBtn.style.display = 'block'
        perfil.style.display = 'block'
    } else {
        logOutBtn.style.display = 'none'
        loginBtn.style.display = 'block'
        perfil.style.display = 'none'
    }

    if (nombre === 'mirtita') {
        perfil.href = "./paciente.html"
    } else if(nombre === 'house') {
        perfil.href = "./doctor.html"
    } else {
        perfil.style.display = 'none'
    } 

    document.querySelector('body').classList.add('visible');
  };