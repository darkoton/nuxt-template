import app from "~/plugins/firebase/firebase"
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

function signOutModule() {
  return signOut(auth)
}

export default signOutModule