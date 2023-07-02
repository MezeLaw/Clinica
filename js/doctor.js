window.onload = function() { 
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    var user = params.get('user');
    var userLocalStorage = localStorage.getItem('userLogged');

    if (userLocalStorage === "house") {
      var saludoDoctor = document.getElementById('saludo-doctor')
      localStorage.setItem('userLogged', userLocalStorage);
      saludoDoctor.textContent = 'Hola, ' + userLocalStorage + '!';
    } else if (user === "house") {
      var saludoDoctor = document.getElementById('saludo-doctor')
      localStorage.setItem('userLogged', user);
      saludoDoctor.textContent = 'Hola, ' + user + '!';
    } else {
      window.location.href = "./login.html"
    } 

    document.querySelector('body').classList.add('visible');
  };