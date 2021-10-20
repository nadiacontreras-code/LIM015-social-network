const db = firebase.firestore();
export const catchUserInfo = (captureName, captureLastName, captureEmail, captureUid) => {
  db.collection('UserPruebaNadia').add({
    name: captureName,
    lastName: captureLastName,
    email: captureEmail,
    uid: captureUid,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      console.log(docRef);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

/* **********Función para crear y guardar post en la base de datos********** */
export const createPost = (postText, photoPost, emailPost, uidPost) => {
  // const fieldValue = firebase.firestore.FieldValue;
  db.collection('postPruebaNadia').doc().set({
    post: postText,
    time: firebase.firestore.FieldValue.serverTimestamp(),
    photo: photoPost,
    email: emailPost,
    uid: uidPost,
    /* }).then(() => {
      console.log('publicacion exitosa');
    })
      .catch((error) => {
        console.error(`Error creando el post => ${error}`);
      }); */
  });
};
/* funcion para traer todos los post */
export const getEachPostUser = (id) => db.collection('postPruebaNadia')
  .where('uid', '==', id)
  .orderBy('time', 'desc');

// Metodo  (snapshot)
export const onSnapShot = () => {
  const getPostOnFirestore = db.collection('postPruebaNadia').onSnapshot();
  console.log(getPostOnFirestore);
  return getPostOnFirestore;
};
export const onSnapshot2 = () => {
  db.collection('postPruebaNadia')
    .onSnapshot((resultados) => {
      console.log(resultados.docs);
      const datos = resultados.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Todos los datos de la colección 'postPruebaNadia'", datos);
    });
};
onSnapshot2();

/* export const getUserInfo = () => {
  db.collection('pruebaNadia')
    .get()
    .then((docRef) => {
      docRef.forEach((doc) => {
        console.log(`${doc.id}=>${JSON.stringify(doc.data().name)}`);
      });
      console.log('Document written with ID: ', docRef.id);
      console.log(docRef);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}; */
// getUserInfo();
// catchUserInfo();
