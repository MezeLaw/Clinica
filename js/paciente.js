window.onload = function() { 
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    var user = params.get('user');
 
    var saludoPaciente = document.getElementById('saludo-paciente')
   
    saludoPaciente.textContent = 'Hola, ' + user + '!';
  };


  function cancelarTurno() { 
    var boton = event.target;
    var fila = boton.closest('tr');
    fila.remove();
    document.getElementById('turno-cancelado').innerHTML = '<div class="alert alert-success" role="alert">El turno se cancelo correctamente.</div>';
    
    setTimeout(function() {
        document.getElementById('turno-cancelado').innerHTML = '';
    }, 5000);
  }

  function sacarTurno() {
    var especialidad = document.getElementById('especialidad').value;
    var medico = document.getElementById('medico').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var email = document.getElementById('email').value;
  
    if (especialidad === '' || medico === '' || fecha === '' || hora === '' || email === '') {
      document.getElementById('mensaje').innerHTML = '<div class="alert alert-danger" role="alert">Verifique los datos del turno. Por favor complete todos los campos.</div>';
    } else {
      document.getElementById('mensaje').innerHTML = '<div class="alert alert-success" role="alert">Turno reservado.</div>';
    }

    setTimeout(function() {
        document.getElementById('mensaje').innerHTML = '';
      }, 5000);
  }
  