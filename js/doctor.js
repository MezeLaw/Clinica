window.onload = function() { 
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    var user = params.get('user');
 
    var saludoPaciente = document.getElementById('saludo-doctor')
    localStorage.setItem('userLogged', user);
    saludoPaciente.textContent = 'Hola, Dr, ' + user;
  };