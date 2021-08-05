/* eslint-disable */ 
import firebaseFunctions from '../firebase-functions.js';

export default () => {
  const user = firebaseFunctions.userInfo();

  const feedView = `
  <nav id="navbar-feed">
    <div id="side-nav" >
        <a href="#/feed" id="home-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_home.png"></img></a>
        <a href="#/profile" id="search-btn" class="redirect"><img class="vector" src = "../css/img_app/vector_search.png"></img></a>
        <a href="#/profile" id="profile-btn" class="redirect"> <img class="vector" src = "../css/img_app/vector_profile.png"></a>
    </div>
  </nav>
  
  <nav id="navbar-feed-laptop">
    <div id="logo-nav">
      <h1 class="logo-laptop"> 
        <span class="chevron left"></span> 
          LS
        <span class="chevron right"></span> 
      </h1>
    </div>
    <div id="side-nav">
        <a href="#/profile"  class="editBtn"><img class="vector" src = "../css/img_app/vector_edit_pink.png"></img></a>
        <a href="#/profile" id="profile-btn-white" class="redirect"> <img class="vector" src = "../css/img_app/vector_profile.png"></a>
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
          <div id="personalInfo">
            <div id="userInfo">
              <a><img id="profilePic" class="profilePic" src="../css/img_app/perfil.jpeg"></img> </a>
              <p>
               ${user.displayName}
              </p>
                           
            </div>
            <div class="textModal">
              <div class="input-field">
                <textarea id="text-post" rows="3" class="form-control" placeholder="¿Qué quieres compartir?"></textarea>
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

  // Función de fecha en post

  const getDate = () => {
    const hoy = new Date();
    const fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
    const hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    const fechaYHora = fecha + ' ' + hora;
    return fechaYHora;
  };

  const post = document.createElement('section');
  post.id = 'post-section';
  post.innerHTML = feedView;

  //-----------------------------------------------------------------
  // Postear con firebase

  const db = firebase.firestore();

  const savePost = (text, date, likes) =>
    db.collection('post').doc().set({ text, date, likes });
  const onGetPost = (callback) =>
    db.collection('post').orderBy('date', 'desc').onSnapshot(callback);
  const getPost = (id) => db.collection('post').doc(id).get();
  const deletePost = (id) => db.collection('post').doc(id).delete();
  const UpdatePost = (id, UpdatePost) =>  db.collection('post').doc(id).update(UpdatePost);

  document.addEventListener('DOMContentLoaded', async (e) => {
    const postForm = post.querySelector('#post-form');

    postForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = postForm['text-post'];
      if (!editStatus) {
        if (text.value != '') {
          await savePost(text.value, getDate(), 0);
        } else {
          alert('Debes escribir algo para postear');
        }
      } else {
        await UpdatePost(id, { text: text.value });
        editStatus = false;
        id = '';
        /* postForm['btn-post-form'].innerText = 'PUBLICAR'; */
      }
      postForm.reset();
      /* text.focus(); */
      // console.log(text);
    });

    const postContainer = post.querySelector('#post-container');
    let editStatus = false;
    let id = '';

    onGetPost((querySnapshot) => {
      // console.log('HRE', postContainer.innerHTML.length);
      /* feedupdate(() => { */
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        // console.log(post);
        post.id = doc.id;
        postContainer.innerHTML += `
            <div class="each-post">
              <div clas="each-infoUser">

              <p id="infoUser"><br> ${user.displayName} dice: </p>

              </div>
              <p class = "each-date">
                ${post.date}
              </p>
              <p class = "each-text">
                ${post.text}
              </p>  
              <div class="interaction-bar">
                <div>
                  <img class="btn-like" id="btn-like" src="../css/img_app/vector_like.png" data-id="${post.id}"></img>
                  <p class="number-likes" id="counter-likes"> ${post.likes}</p>
                </div>
                <a><img class="btn-edit" id="edit-post" src= "../css/img_app/edit.png" data-id="${post.id}"></img></a>
                <a><img class="btn-delete" src= "../css/img_app/trash.png"data-id="${post.id}"></img></a>
              </div>
            </div>
            `;
        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            e.preventDefault();
            await deletePost(e.target.dataset.id);
          });
        });

        const modalContainer = document.querySelector('#modal_container');
        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            modalContainer.classList.add('show');

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

        const likeBtn = document.querySelectorAll('.btn-like');

        likeBtn.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            e.preventDefault();
            const doc = await getPost(e.target.dataset.id);
            id = doc.id;
            const docLike = db.collection('post').doc(id);
            // likes = await UpdatePost(doc.data().id , {likes: doc.data().likes + 1})
            let transaction = db
              .runTransaction((t) => {
                return t.get(docLike).then((doc) => {
                  // Add one person to the city population
                  let newLikes = doc.data().likes + 1;
                  t.update(docLike, { likes: newLikes });
                });
              })
              .then(() => {
                console.log('Transaction success!');
              })
              .catch((err) => {
                console.log('Transaction failure:', err);
              });
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
