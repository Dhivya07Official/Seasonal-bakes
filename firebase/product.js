import { firebase, auth, db } from "../config/firebase";
import { addToCartUser,removeToCartUser } from "../pages/api/users";
import { createOrders } from "../pages/api/orders";
function addFavorite(id) {
  const currentUser = auth.currentUser.uid;

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: firebase.firestore.FieldValue.arrayUnion(id),
    });
}

function removeFavorite(id) {
  const currentUser = auth.currentUser.uid;

  return db
    .collection("Users")
    .doc(currentUser)
    .update({
      favorites: firebase.firestore.FieldValue.arrayRemove(id),
    });
}

async function addToCart(newCart) {
  const data = {
    productId: newCart.productId,
    quantity: newCart.quantity,
    b2cId: auth.currentUser.uid
  }
  console.log(data)
  await addToCartUser(data)
}
async function removeToCart(id) {
  await removeToCartUser( auth.currentUser.uid,id)
}
async function createOrdersById() {
  await createOrders( auth.currentUser.uid)
}

export { addFavorite, removeFavorite, addToCart,removeToCart,createOrdersById };
