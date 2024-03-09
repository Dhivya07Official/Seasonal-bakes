import { createUser, getUser } from "pages/api/users";
import { firebase, auth, db } from "../config/firebase";

export default function googleAuth() {
  auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(function (result) {
      // db.collection("Users")
      //   .doc(result.user.uid)
      //   .get()
      getUser(result.user.uid)
        .then((res) => {
          if (res.data == null) {
            console.log("Document data:", res.data);
            // db.collection("Users").doc(result.user.uid).set({
            //   email: result.additionalUserInfo.profile.email,
            //   name: result.additionalUserInfo.profile.given_name,
            //   surname: result.additionalUserInfo.profile.family_name,
            //   addresses: [],
            //   cart: {},
            //   favorites: [],
            //   orders: [],
            //   phoneNumber: "",
            //   photoUrl: null,
            // });
            createUser(
              //   {
              //   email: result.additionalUserInfo.profile.email,
              //   name: result.additionalUserInfo.profile.given_name,
              //   surname: result.additionalUserInfo.profile.family_name,
              //   addresses: [],
              //   cart: {},
              //   favorites: [],
              //   orders: [],
              //   phoneNumber: "",
              //   photoUrl: null,
              //   b2cId: result.user.uid,
              //   isActive:true
              // }
              {
                "name": result.additionalUserInfo.profile.given_name,
                "surname": result.additionalUserInfo.profile.family_name,
                "email": result.additionalUserInfo.profile.email,
                "addresses": [],
                "cart": {},
                "favorites": [],
                "orders": [],
                "phoneNumber": "",
                "photoUrl": null,
                "b2cId": result.user.uid,
                "isActive": true
              }
            );
          }
        });
    })
    .catch(function (error) {
      console.log(error);
    });
}
