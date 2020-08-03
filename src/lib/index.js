// INITIAL PAGE
export const contentInitialPage = () => {
  const initialPage = document.getElementById('initialPage');
  console.log(initialPage);
  initialPage.innerHTML =
      `<div id="logo">
          <img class="logoImg" src="img/logo.png" alt="logo">
      </div>
      <br>
      <!-- inicio sesion -->
      <p class="titles"><strong>Bienvenido a Barkify</strong></p>
      <input id="userEmail" type="email" placeholder="Email">
      <input id="userPassword" type="password" placeholder="Contraseña">
      <br>
      <button id="btnLogin">Log In</button>
      <br>
      <p><u>¿Olvidaste tus datos de inicion de sesión? <strong>Recuperar</strong></u></p>
      <br>
      <!-- ingresar con google -->
      <div>
          <p>Aqui va google</p>
      </div>
      <br>
      <p id="textSignIn"><u><strong>¿No estas en Barkify aún? Regístrate</strong></u></p>`
};
// PARTE DEL SIGNIN
export const contentSignIn = () => {
  const containerSignIn = document.getElementById('containerSignIn');
  containerSignIn.innerHTML =
      `<div id="signIn" >
    <div id="titleSignIn">
      <p class="titles">&#10094</p>
      <p class="titles">Sign In</p>
      <p class="titles">&#10006;</p>
    </div>
    <br>
    <div id="logoSignIn">
      <img class="logoImg" src="img/logo.png" alt="logo">
    </div>
    <br>
    <div id="thirdQuestionSignIn" class="questionSignIn">
      <p><strong>¿Cuál es tu correo?</strong></p>
      <br>
      <input type="email" id="newUserEmail" placeholder="Correo">
      <button class="btnContinue" id="btnContinue3">Siguiente</button>
    </div>
    <div id="forthQuestionSignIn" class="hide questionSignIn">
      <p><strong>Ingrese una Contraseña</strong></p>
      <br>
      <input type="password" id="newUserPassword" placeholder="Contraseña">
      <button class="btnContinue" id="btnContinue4">Finalizar</button>
    </div>
    <div id="doneSignIn" class="hide questionSignIn">
      <p class="titles"><strong>Bienvenido a Barkify!!!</strong></p>
      <br>
      <p>Haz finalizado tu registro con exito!</p>
      <p>Para culminar tu registro, por favor verifica tu mail</p>
      <button class="btnContinue" id="btnHomeSignIn">Ir al home</button>
    </div>
  </div>`

  const nextPage = () =>{
    document.querySelector('#thirdQuestionSignIn').classList.add('hide');
    document.querySelector('#forthQuestionSignIn').classList.remove('hide');
  };
  document.querySelector('#btnContinue3').addEventListener('click',nextPage);

  const finishRegistration = () =>{
    document.querySelector('#forthQuestionSignIn').classList.add('hide');
    document.querySelector('#doneSignIn').classList.remove('hide');
  };
  document.querySelector('#btnContinue4').addEventListener('click',finishRegistration);
};

//PARTE DEL HOME 
export const contentHome = () => {
  const mainScreen= document.getElementById('mainScreen');
  initialPage.innerHTML =
  `<header class="header">
    <div id="logoHeader">
      <img class="logoImg" src="img/logo.png" alt="logo">
    </div>
  </header>
  <main id="mainContentInitialPage">
    <p>Aún no has creado un perfil para tu mascota</p>
    <button class="btnContinue" id="btnCreateProfile">Crear Perfil</button>
  </main>
  <footer>
    <div class="paw">
      <img class="iconsFooter" src="img/heartIconNormal.png" alt="paw">
    </div>
    <div class="home">
      <img class="iconsFooter" src="img/homeIconNormal.png" alt="home">
    </div>
    <div class="profile">
      <img class="iconsFooter" src="img/searchIconNormal.png" alt="profile">
    </div>
  </footer>`

}; 



/* <div id="firstQuestionSignIn" class="hide questionSignIn">
      <p><strong>Ingrese su nombre y apellido</strong></p>
      <br>
      <button class="btnContinue" id="btnContinue">Siguiente</button>
    </div> 
    <div id="secondQuestionSignIn" class="hide questionSignIn">
      <p><strong>¿Cuál es tu nombre de usuario?</strong></p>
      <br>
      <input type="text" id="userName" placeholder="Nombre de Usuario">
      <button class="btnContinue" id="btnContinue2">Siguiente</button>
    </div> --></br> */

    // <!-- <div id="fifthQuestionSignIn" class="hide questionSignIn">
    //   <p><strong>Comuna donde reside</strong></p>
    //   <br>
    //   <select name="Comuna" id="userSelect">
    //     <option value="default" selected> Indique la comuna </option>
    //     <option value="comuna"> La Reina</option>
    //     <option value="comuna2"> Las Condes </option>
    //     <option value="comuna3"> Ñuñoa </option>
    //     <option value="comuna4"> Providencia </option>
    //     <option value="comuna5">Santiago (Centro)</option>
    //   </select>
    //   <button class="btnContinue" id="btnContinue5">Siguiente</button>
    // </div> -->

