import app from "~/plugins/firebase/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

function stateChanged() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user)
    })
  })
}

export default stateChanged