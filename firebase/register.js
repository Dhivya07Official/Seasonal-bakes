import { auth, db } from "../config/firebase";
import { createUser } from "../pages/api/users";
function emailRegister({ email, password }) {
  return auth.createUserWithEmailAndPassword(email, password);
}

function registerDatabase({ id, email, name, surname }) {
  return createUser(
  //   {
  //   name,
  //   surname,
  //   email,
  //   addresses: [],
  //   cart: {},
  //   favorites: [],
  //   orders: [],
  //   phoneNumber: "",
  //   photoUrl: null,
  //   isActive: true,
  //   b2cId: "",
  // }
  {
    "name": name,
    "surname": surname,
    "email": email,
    "addresses": [],
    "cart": {},
    "favorites": [],
    "orders": [],
    "phoneNumber": "",
    "photoUrl": null,
    "b2cId": id,
    "isActive": true
  }
  );
  // return db.collection("Users").doc(id).set();
}

export { emailRegister, registerDatabase };
