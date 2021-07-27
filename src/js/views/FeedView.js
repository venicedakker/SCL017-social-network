/* import firebaseFunctions from './js/firebase-functions.js';  */

export default () => {
  const feedView = `
                <nav id="navbar-feed">
                    <div id="side-nav" >
                        <!-- <a href="" id="logout-btn" class="button">LOGOUT</a> -->
                        <a href="#/profile" id="home-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_home.png"></img></a>
                        <a href="#/profile" id="search-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_search.png"></img></a>
                        <a href="#/profile" id="edit-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_edit_pink.png"></a>
                        <a href="#/profile" id="profile-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_profile.png"></a>
                    </div>
                </nav>
                <nav id="navbar-feed-laptop">
                    <div id="side-nav">
                        
                        <!-- <a href="" id="logout-btn" class="button">LOGOUT</a> -->
                        <a href="#" id="edit-btn-white" class="redirect"><img class="vector" src = "../css/img_app/vector_edit_white.png"></img></a>
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
                            <div>
                                <a><img class="search-link" src = "../css/img_app/help.png""></a>
                                <p>Nombre Aquí</p>
                            </div>
                            <div>
                                <a><img class="search-link" src = "../css/img_app/memes.png""></a>
                                <p>Nombre Aquí</p>
                            </div>
                            <div>
                                <a><img class="search-link" src = "../css/img_app/GHpage.png""></a>
                                <p>Nombre Aquí</p>
                            </div>
                            <div>
                                <a><img class="search-link" src = "../css/img_app/resources.png""></a>
                                <p>Nombre Aquí</p>
                            </div>
                            <div>
                                <a><img class="search-link" src = "../css/img_app/team.png""></a>            
                                <p>Nombre Aquí</p>
                            </div>  
                        </div>
                </section>   
                        
                        </div>
                    </div>
                    <form id="post-area">
                        <textarea id="new-post"cols="30" rows="10"></textarea>
                        <button type="submit" id="submit-post">Post</button>
                    </form>
                    <section id="all-posts">    
                    </section> 
                </section>               
            `;

  const feedElement = document.createElement("section");
  feedElement.innerHTML = feedView;

  // const logoutButton = feedElement.querySelector('#logout-btn');
  // logoutButton.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     firebaseFunctions.logoutAccount();
  // });

  return feedElement;
};
