import app from "~/plugins/firebase/firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "firebase/database";
import { writeUserData } from "~/plugins/firebase/realTimeDatabase";

const auth = getAuth(app);

async function createUser({ email, password, name }) {
  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    const uid = user.uid
    const data = { name, uid, photoURL: user.photoURL }
    writeUserData(data)
    return user

  } catch (e) {
    throw e
  }
}

export default createUser