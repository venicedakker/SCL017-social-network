/* import firebaseFunctions from "./js/firebase-functions.js"; */

export default () => {
  const feedView = `
                <nav id="navbar-feed">
                    <div id="side-nav" >
                        <!-- <a href="" id="logout-btn" class="button">LOGOUT</a> -->
                        <a href="#/profile" id="home-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_home.png""></img></a>
                        <a href="#/profile" id="search-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_search.png""></img></a>
                        <a href="#/profile" id="edit-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_edit_pink.png""></a>
                        <a href="#/profile" id="profile-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_profile.png""></a>
                    </div>
                </nav>
                <nav id="navbar-feed-laptop">
                    <div id="side-nav">
                        <!-- <a href="" id="logout-btn" class="button">LOGOUT</a> -->
                        <a href="#/profile" id="home-btn" class="redirect">HOME</a>
                        <a href="#/profile" id="profile-btn" class="redirect">Profile</a>
                    </div>
                </nav>
                
                <section id="feed-section">
                    <div id="filter-found">
                        <div id="search-bar">
                            <input type="text" placeholder="Search here">
                        </div>
                        <div id="search-links">
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
                    </div>
                    <form id="post-area">
                        <textarea id="new-post"cols="30" rows="10"></textarea>
                        <button type="submit" id="submit-post">Post</button>
                    </form>
                    <section id="all-posts">
                        <h1> THIS IS THE FEEEEEED</h1>    
                    </section>
                
                </section>
                
                
            `;

  const feedElement = document.createElement('section');
  feedElement.innerHTML = feedView;

  // const logoutButton = feedElement.querySelector("#logout-btn");
  // logoutButton.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     firebaseFunctions.logoutAccout();
  // });

  return feedElement;
};
