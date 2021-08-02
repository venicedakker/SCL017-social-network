export default () => {
  const user = firebase.auth().currentUser;
  const feedView = `
  <nav id="navbar-feed">
    <div id="side-nav" >
        <a href="#/feed" id="home-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_home.png"></img></a>
        <a href="#/profile" id="search-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_search.png"></img></a>
        <a href="#/profile" id="profile-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_profile.png"></a>
    </div>
  </nav>
  
  <nav id="navbar-feed-laptop">
    <div id="side-nav">
        <a href="#/profile"  class="editBtn"><img class="vector" src = "../css/img_app/vector_edit_pink.png"></img></a>
        <a href="#/profile" id="profile-btn-white" class="redirect"> Perfil </img></a>
    </div>
  </nav>
  
  <section id="feed-section">
    <div>
      <div id="header-logo">
        <div id="chevron-logo">
          <img class="chevron-img" src="../css/img_app/chevronLS.png"</img>
        </div>
      
         <div id="logoLS">
          <h1>Laboratoria Students</h1>
        </div>
      </div>          
      <div id="filter-found">
        <div id="search-bar">
            <input type="text" placeholder="Search here">                        
        </div>
      </div>
    </div>
  
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
        <div id="filter-found">
          <div id="search-bar">
              <input id="finder" type="text" placeholder="Search here">                        
          </div>
        </div>
        <div id="filter-icons">
            <div id="search-help">
                <a><img class="search-help" src = "../css/img_app/help.png""></a>
                <p class="title-icon">Ayuda técnica</p>
            </div>
            <div id="search-memes">
                <a><img class="search-memes" src = "../css/img_app/memes.png""></a>
                <p class="title-icon">Publica y ríete</p>
            </div>
            <div id="search-ghpage">
                <a><img class="search-ghpage" src = "../css/img_app/GHpage.png""></a>
                <p class="title-icon">Proyecto Github</p>
            </div>
            <div id="search-resources">
                <a><img class="search-resources" src = "../css/img_app/resources.png""></a>
                <p class="title-icon">Información útil</p>
            </div>
            <div id="search-team">
                <a><img class="search-team" src = "../css/img_app/team.png""></a>            
                <p class="title-icon">Encuentra compañera</p>
            </div>  
        </div>
  </section>

  <section id="all-posts">
    <form id="post-form1">
      <div class="form-group">
        <textarea id="text-area-post1" rows="3" class="form-control" placeholder="Crear Publicación"></textarea>
      </div>
      <button class="btn-posting" id="btn-post-form1">
        PUBLICAR
      </button>
    </form>
    <div id = "post-container">  </div>
  </section>        
  
  <div class="modal-container" id="modal_container">
    <div class="modal">
      
        <form id = "post-form">
          <nav class="modal-close">
            <button id="close"> X </button>
            <button  id="btn-post-form">Post</button>
          </nav>
          <div class="contentModal">
            <div class="userInfo">
              <img id="profilePic" class="profilePic" src="../css/img_app/perfil.jpeg"></img>              
              <p>Luisa Ortiz<p>
            </div>
            <div class="textModal">
              <div class="input-field">
                <textarea id="text-post" rows="3" class="form-control" placeholder="Crear Publicación"></textarea>
            </div>
          </div>
        </form>
        
        <div class="tool-bar">
          <img id="text-icon" class="textIcon" src="../css/img_app/vector_text.png"></img>
          <img id="link-icon" class="linkIcon"src="../css/img_app/vector_link.png"></img>
          <img id="addImg-icon" class="imgIcon" src="../css/img_app/vector_image.png"></img>
        </div>  
      </div>
    </div>
  </div>            
            `;

  const post = document.createElement('section');
  post.id = 'post-section';
  post.innerHTML = feedView;

  //-----------------------------------------------------------------
  // Postear con firebase

  const db = firebase.firestore();
  const savePost = (text) => db.collection('post').doc().set({ text });
  const onGetPost = (callback) => db.collection('post').onSnapshot(callback);
  const getPost = (id) => db.collection('post').doc(id).get();
  const deletePost = (id) => db.collection('post').doc(id).delete();
  const UpdatePost = (id, UpdatePost) =>
    db.collection('post').doc(id).update(UpdatePost);

  document.addEventListener('DOMContentLoaded', async (e) => {
    const postForm = post.querySelector('#post-form');

    postForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = postForm['text-post'];
      if (!editStatus) {
        await savePost(text.value);
      } else {
        await UpdatePost(id, {
          text: text.value,
        });
        editStatus = false;
        id = '';
        postForm['btn-post-form'].innerText = 'PUBLICAR';
      }
      postForm.reset();
      text.focus();
      // console.log(text);
    });

    const postContainer = post.querySelector('#post-container');
    let editStatus = false;
    let id = '';

    onGetPost((querySnapshot) => {
      // console.log('HRE', postContainer.innerHTML.length);
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        // console.log(post);
        post.id = doc.id;
        postContainer.innerHTML += `
            <div class="each-post">
              <div clas="each-infoUser">
                
              </div>
              <p class = "each-text">
                ${post.text}
              </p>  
              <div class="interaction-bar">
                <img class="like-btn" src="../css/img_app/vector_like.png"></img>
                <img class="btn-edit secondary" src= "../css/img_app/edit.png" data-id="${post.id}"></img>
                <img class="btn-delete primary" src= "../css/img_app/trash.png"data-id="${post.id}"></img>
              </div>
            </div>`;

        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            e.preventDefault();
            await deletePost(e.target.dataset.id);
          });
        });
        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const doc = await getPost(e.target.dataset.id);
            // console.log(doc.data());
            const post = doc.data();
            editStatus = true;
            id = doc.id;
            postForm['text-post'].value = post.text;
            postForm['btn-post-form'].innerText = 'Update';
          });
        });
      });
    });
  });

  //----------------------------------------------------------------
  // modal de la meri

  const closeModal = post.querySelector('#close');
  const modalContainer = post.querySelector('#modal_container');
  const openModal = post.querySelector('#text-area-post1');
  const postModal = post.querySelector('#btn-post-form');
  
  openModal.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });
  closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
  postModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });

  return post;
};
