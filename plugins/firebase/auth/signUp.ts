import app from "~/plugins/firebase/firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function createUser(email: string, password: string): void {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default createUser