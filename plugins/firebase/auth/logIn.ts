import app from "~/plugins/firebase/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      return user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export default logIn