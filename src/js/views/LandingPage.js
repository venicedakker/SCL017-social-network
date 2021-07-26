export default () => {
  const landingView = `
        <nav id="navbar">
            <a href="#/login" id="login" class="button" >LOGIN</a>
            <a href="#/register" id="register" class="button" >REGISTER</a>
            
        </nav>
        <main class="main-content"> 
            <section id="landing">
                <img id="symbol-1" class="logo" src="./css/img_app/chevronLS.png" alt="logo">
                <div class="title-students">
                    <h1 class="students"> <span class="chevron left"></span> Laboratoria Students<span
                        class="chevron right"></span> </h1>
                    <h2 class="title-two">Una red para todas</h2>
                </div>
                <section class="img-background"></section>
            </section>
        </main>
        `;

  const landingElement = document.createElement('section');
  landingElement.innerHTML = landingView;
  return landingElement;
};
