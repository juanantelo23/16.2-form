document.addEventListener('DOMContentLoaded', function() {
    const botonRegistro = document.getElementById("regBtn");
    const form = document.querySelector("form");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const requiredFields = document.getElementsByClassName("form-control");
    const checkpoint = document.getElementById("terminos");
    const terminos1 = document.getElementById('terminos1');
    const btnTerminos = document.getElementById("btnTerminos");
  
    botonRegistro.addEventListener("click", function validateForm(event) {
      event.preventDefault();
  
      // Obtener los valores actuales de las contraseñas
      const password1Value = password1.value;
      const password2Value = password2.value;
  
      // Verificar si todas las condiciones se cumplen
      const arePasswordsEqual = password1Value === password2Value;
      const areFieldsFilled = !hasEmptyField();
  
      if (form.checkValidity() && arePasswordsEqual && areFieldsFilled && checkpoint.checked) {
        showAlertSuccess();
      } else {
        showAlertError();
        form.classList.add("was-validated");
      }
    });
  
    password2.addEventListener('input', function() {
      // Obtener los valores actuales de las contraseñas
      const password1Value = password1.value;
      const password2Value = password2.value;
  
      // Si los campos están en blanco, no se aplica ninguna clase
      if (password1Value === '' || password2Value === '') {
        password2.classList.remove('is-valid', 'is-invalid');
        return;
      }
      
      if (password1Value === password2Value) {
        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid');
      } else {
        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        
      }
    });
  
    checkpoint.addEventListener('click', function() {
      if (checkpoint.checked) {
        checkpoint.classList.remove('is-invalid');
        checkpoint.classList.add('is-valid');
        btnTerminos.classList.remove("terminos-requerido")
        terminos1.innerHTML = '';
      } else {
        checkpoint.classList.add('is-invalid');
        terminos1.innerHTML = 'Debe aceptar los términos de servicio.';
        btnTerminos.classList.add("terminos-requerido")
      }
    });
  
    form.addEventListener('invalid', function (e) {
      e.preventDefault();
    }, true);
  
    form.addEventListener('submit', function () {
      if (!form.checkValidity()) {
        showAlertError();
      }
    });
  
    function hasEmptyField() {
      for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === "") {
          return true;
        }
      }
      return false;
    }
  
    function showAlertSuccess() {
      document.getElementById("alert-success").classList.add("show");
      setTimeout(function () {
        document.getElementById("alert-success").classList.remove("show");
      }, 3000);
    }
  
    function showAlertError() {
      document.getElementById("alert-danger").classList.add("show");
      setTimeout(function () {
        document.getElementById("alert-danger").classList.remove("show");
      }, 3000);
    }
  });