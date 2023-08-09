import app from "~/plugins/firebase/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

async function logIn({ email, password }) {
  try {

    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    return user

  }
  catch (error) {
    throw error
  }
}

export default logIn