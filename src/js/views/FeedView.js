/* import firebaseFunctions from './js/firebase-functions.js';  */


export default () => {
  const feedView = `
                <nav id="navbar-feed">
                    <div id="side-nav" >
                        <!-- <a href="" id="logout-btn" class="button">LOGOUT</a> -->
                        <a href="#/profile" id="home-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_home.png"></img></a>
                        <a href="#/profile" id="search-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_search.png"></img></a>
                        <a href="#/profile" id="edit-btn" class="editBtn"> <img class="vector" src = "../css/img_app/vector_edit_pink.png"></a>
                        <a href="#/profile" id="profile-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_profile.png"></a>
                    </div>
                </nav>
                <nav id="navbar-feed-laptop">
                    <div id="side-nav">
                        
                        <!-- <a href="" id="logout-btn" class="button">LOGOUT</a> -->
                        <a href="#" id="edit-btn-white" class="editBtn"><img class="vector" src = "../css/img_app/vector_edit_white.png"></img></a>
                        <a href="#/profile" id="profile-btn-white" class="redirect"><img class="vector" src= "../css/img_app/vector_profile_white.png"> </img></a>
                    </div>
                </nav>

                <header id="header-logo">
                  <div id="chevron-logo">
                    <img class="chevron-img" src="../css/img_app/chevronLS.png"</img>
                  </div>
                  <div id="logoLS">
                    <h1>Laboratoria Students</h1>
                  </div>
                </header>          
                    <div id="filter-found">
                        <div id="search-bar">
                            <input type="text" placeholder="Search here">                        
                        </div>
                    </div>

                      <section id="feed-section">
                        <div id="filter-icons">
                            <div id="search-help">
                                <a><img class="search-help" src = "../css/img_app/help.png""></a>
                                <p>Ayuda técnica</p>
                            </div>
                            <div id="search-memes">
                                <a><img class="search-memes" src = "../css/img_app/memes.png""></a>
                                <p>Publica y ríete</p>
                            </div>
                            <div id="search-ghpage">
                                <a><img class="search-ghpage" src = "../css/img_app/GHpage.png""></a>
                                <p>Proyecto Github</p>
                            </div>
                            <div id="search-resources">
                                <a><img class="search-resources" src = "../css/img_app/resources.png""></a>
                                <p>Información útil</p>
                            </div>
                            <div id="search-team">
                                <a><img class="search-team" src = "../css/img_app/team.png""></a>            
                                <p>Encuentra compañera</p>
                            </div>  
                        </div>
                </section>   
                <section id="feed-section-laptop">
                        <div id="filter-icons">
                            <div id="search-help">
                                <a><img class="search-help" src = "../css/img_app/help.png""></a>
                                <p>Ayuda técnica</p>
                            </div>
                            <div id="search-memes">
                                <a><img class="search-memes" src = "../css/img_app/memes.png""></a>
                                <p>Publica y ríete</p>
                            </div>
                            <div id="search-ghpage">
                                <a><img class="search-ghpage" src = "../css/img_app/GHpage.png""></a>
                                <p>Proyecto Github</p>
                            </div>
                            <div id="search-resources">
                                <a><img class="search-resources" src = "../css/img_app/resources.png""></a>
                                <p>Información útil</p>
                            </div>
                            <div id="search-team">
                                <a><img class="search-team" src = "../css/img_app/team.png""></a>            
                                <p>Encuentra compañera</p>
                            </div>  
                        </div>
                </section>                       
                        </div>
                    </div>
                    
                    <div class="modal-container">
                    <nav class="modal modal-close-post">
                      <p class="close">X</p>
                      <button id="postBtn">Post</button>
                    </nav>
                      <div class="contentModal">
                        <div class="userInfo">
                        <img id="profilePic" class="profilePic" src="../css/img_app/perfil.jpeg"></img>              
                        <p>Luisa Ortiz<p>
                        </div>
                        <div class="textModal">
                          <div class="input-field">
                            <textarea id="writingZone" type="text" cols="30" rows="10" placeholder="Add something you'd like to share"></textarea>                                                  
                          </div>
                        </div>
                        <div class="tool-bar">
                          <img id="text-icon" class="textIcon" src="../css/img_app/vector_text.png"></img>
                          <img id="link-icon" class="linkIcon"src="../css/img_app/vector_link.png"></img>
                          <img id="addImg-icon" class="imgIcon" src="../css/img_app/vector_image.png"></img>
                        </div>  
                        </div>
                    </div>

                    </div>
                    <section id="all-posts">    
                    </section> 
                </section>               
            `;

  const feedElement = document.createElement('section');
  feedElement.innerHTML = feedView;

  const addPost= () =>{
  const openCreatePost = document.getElementsByClassName('.editBtn');
  const modalContainer = document.getElementsByClassName ('.modal-container');
  const closeCreatePost = document.getElementsByClassName('.close');

  openCreatePost.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });

  closeCreatePost.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
  }
  return addPost

  /* const openCreatePost = () =>{ 

    let modalC = document.querySelectorAll(".editBtn");
    let modal = document.querySelectorAll(".close");

    document.getElementById('btnRegister').addEventListener('click', function (e) {
        console.log("open");

         e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });

}
   */
  



  return feedElement;
};
