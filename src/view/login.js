import { signInOnSubmit, signInOnSubmitGoogle ,signInOnSubmitFacebook } from "../controller/controller1.js";
export default () => {
  const root = document.getElementById("root");
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "container");
  divElement.innerHTML = `
    <aside class="left ancho">
      <img src="./css/img/day.jpg" alt="cargando imagen" class="img">
    </aside>
    <main class="right ancho">
      <form action="" class="formulario acceder">
      <h1> < Breath Life > </h1>
      <h3> Respira salud, Respira vida </h3>
          <input id="email" class="input redondear" type="email" placeholder="Ingrese su correo">
          <input id="password" class="input redondear" type="password" placeholder="Ingrese su contraseña">
          <button type="button" class="button-acceder redondear"  id="btn-sign-in">Acceder</button>
      </form>
      <div>
          <p>O bien ingresa con...</p>
          <div class="iconos">
              <i id='icon-facebook' class="fab fa-facebook-square"></i>
              <i id='icon-google' class="fab fa-google"></i>
          </div>
          <p>¿No tienes una cuenta? <a href="#/registro" id="register-link">Regístrate</a></p>
      </div>
    </main>`;
  root.appendChild(divElement);
  const btnSignIn = divElement.querySelector('#btn-sign-in');
  btnSignIn.addEventListener('click', signInOnSubmit);
  const iconGoogle = divElement.querySelector("#icon-google");
  iconGoogle.addEventListener("click",signInOnSubmitGoogle );
  const iconFacebook = divElement.querySelector("#icon-facebook");
  iconFacebook.addEventListener("click", signInOnSubmitFacebook );

  return root;
};


// <i id="icon-google" class="fab fa-google"></i>
// <i class="fab fa-facebook-square"></i>