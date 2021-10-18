// ----- Añadir lista de fields en un documento de la colección posts -----
export const addDocPost = (newPost, userID, userName, photo, date, file, likes) => firebase.firestore().collection('posts').add({
  newPost, userID, userName, photo, date, file, likes,
});
// ----- Agregar/actualizar field en un documento de la colección posts -----
export const updateDocPost = (docID, newField) => firebase.firestore().collection('posts').doc(docID).update(newField);

// ----- Función para almacenar información sobre posts de forma descendente ----
export const listPostAll = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
  const post = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc);
    post.push({ id: doc.id, ...doc.data() });
  });
  callback(post);
  // console.log('Posts: ', post.join(', '));
});

// storage
export const uploadFile = (path, file) => firebase.storage().ref(path).put(file);
