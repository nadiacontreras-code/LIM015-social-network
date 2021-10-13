export const savePost = (name, post) => {
  firebase.firestore().collection('posts').doc().set({
    name,
    post,
    likePost: 0,
    array: [],
  });
};
