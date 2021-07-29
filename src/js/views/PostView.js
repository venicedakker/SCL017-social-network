

export default () => {

  const PostView = `

<form id="post-form">
<div class="form-group">
  <textarea id="text-post" rows="3" class="form-control" placeholder="Crear Publicación"></textarea>
</div>
<button class="btn-btn-primary" id="btn-post-form">
  PUBLICAR
</button>
</form>

`
  const post = document.createElement('section');
  post.id = "post-section"

  post.innerHTML = PostView;
  return post;
}


const db = firebase.firestore();

const savePost = (text) => db.collection('post').doc().set({
  text
})


const onGetPost = (callback) => db.collection('post').onSnapshot(callback);

const getPost = (id) => db.collection('post').doc(id).get();

const deletePost = (id) => db.collection('post').doc(id).delete();

const UpdatePost = (id, UpdatePost) => db.collection('post').doc(id).update(UpdatePost);



document.addEventListener('DOMContentLoaded', async (e) => {
  
  
  const postForm = document.getElementById('post-form');
  const postSection = document.getElementById('post-section');


  const divPostContainer = document.createElement("div");
  divPostContainer.id = "post-container"

  postSection.appendChild(divPostContainer);

  postForm.addEventListener('submit', async (e) => {
      e.preventDefault()


      const text = postForm['text-post'];

      if (!editStatus) {
          await savePost(text.value)
      } else {
          await UpdatePost(id, {
              text: text.value
          })
          editStatus = false;
          id = '';
          postForm['btn-post-form'].innerText = 'PUBLICAR';
      }

      postForm.reset();
      text.focus();

      console.log(text)

  })

  const postContainer = document.getElementById('post-container');

  let editStatus = false;

  let id = '';
 

  onGetPost((querySnapshot) => {
      console.log("HRE", postContainer.innerHTML.length)

      postContainer.innerHTML = '';

      querySnapshot.forEach(doc => {

          const post = doc.data();
          console.log(post)

          post.id = doc.id;
          postContainer.innerHTML += `<div>
      ${post.text}
      <div>
        <button class="btn btn-primary btn-delete" data-id="${post.id}">Delete</button>
        <button class="btn btn-secondary btn-edit" data-id="${post.id}">edit</button>
      </div>
      </div>`

          const btnsDelete = document.querySelectorAll('.btn-delete');
          btnsDelete.forEach(btn => {
              btn.addEventListener('click', async (e) => {
                  e.preventDefault()

                  await deletePost(e.target.dataset.id);
              })

          });
          const btnsEdit = document.querySelectorAll('.btn-edit');
          btnsEdit.forEach(btn => {
              btn.addEventListener('click', async e => {
                  e.preventDefault()
                  const doc = await getPost(e.target.dataset.id);
                  console.log(doc.data())

                  const post = doc.data();

                  editStatus = true;
                  id = doc.id;

                  postForm['text-post'].value = post.text;
                  postForm['btn-post-form'].innerText = 'Update'

              })
          })


      })

  })


});


