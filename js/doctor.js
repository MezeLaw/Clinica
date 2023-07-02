window.onload = function() { 
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    var user = params.get('user');
    var userLocalStorage = localStorage.getItem('userLogged');

    if (user && user === "house") {
      var saludoDoctor = document.getElementById('saludo-doctor')
      localStorage.setItem('userLogged', user);
      saludoDoctor.textContent = 'Hola, ' + user + '!';
    } else if (userLocalStorage && userLocalStorage === "house") {
      var saludoDoctor = document.getElementById('saludo-doctor')
      localStorage.setItem('userLogged', userLocalStorage);
      saludoDoctor.textContent = 'Hola, ' + userLocalStorage + '!';
    } else {
      window.location.href = "./login.html"
    } 
  };