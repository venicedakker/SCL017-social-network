export default () => {
  const landingView = `
        <nav id="navbar">
            <a href="#/login" id="login" class="button" >LOGIN</a>
            <a href="#/register" id="register" class="button" >REGISTER</a>
            <!-- <a href="#/post" id="post" class="button" >POST</a> -->
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
                <!--
                <div id="slider">
                    <figure> 
                        <div><h2 class="green-circle">Cuadro uno</h2></div>
                        <div><h2 class="green-circle">Cuadro dos</h2></div>
                        <div><h2 class="green-circle">Cuadro tres</h2></div>
                        <div><h2 class="green-circle">Cuadro cuatro</h2></div>
                        <div><h2 class="green-circle">Cuadro cinco</h2></div>
                    </figure>
                </div>
                -->
            </section>

        </main>
        `;

  const landingElement = document.createElement('section');
  landingElement.innerHTML = landingView;

  // // Changing Title of the page
  // const title = document.querySelector('title');
  // title.innerHTML = '';
  // title.innerHTML = 'Laboratoria Students';

  return landingElement;
};
