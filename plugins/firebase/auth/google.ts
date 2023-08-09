import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "~/plugins/firebase/firebase"
import { writeUserData } from "~/plugins/firebase/realTimeDatabase";


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

async function signInGoogle() {
  try {

    const result = await signInWithPopup(auth, provider)
    const user = result.user;
    writeUserData(user.uid, user.displayName)
    return user

  } catch (e) {
    throw e
  }
}

export default signInGoogle