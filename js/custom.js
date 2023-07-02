
  

  function logOut(){

    localStorage.clear()
    var loginBtn = document.getElementById('login-btn');
    var logOutBtn = document.getElementById('log-out-btn')
    var perfil = document.getElementById('perfil')

    logOutBtn.style.display = 'none'
    loginBtn.style.display = 'block'
    perfil.style.display = 'none'

    window.location.href = "./index.html"
  }

  function logOutFromProfile(){

    localStorage.clear()
    var loginBtn = document.getElementById('login-btn');
    var logOutBtn = document.getElementById('log-out-btn')
    var perfil = document.getElementById('perfil')

    logOutBtn.style.display = 'none' 
    perfil.style.display = 'none'

    window.location.href = "./index.html"
  }