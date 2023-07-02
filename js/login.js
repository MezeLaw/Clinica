document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();  
      
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
     
      if (username === "mirtita" && password === "123") {
        localStorage.setItem('userLogged', username);
        window.location.href = "paciente.html?user=" + encodeURIComponent(username);
      } else if (username === "house" && password === "123") {
        localStorage.setItem('userLogged', username);
        window.location.href = "doctor.html?user=" + encodeURIComponent(username);
      } else {
        alert("Usuario incorrecto");
      } 
    });
  });