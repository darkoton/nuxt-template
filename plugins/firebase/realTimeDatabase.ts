import app from "~/plugins/firebase/firebase"
import { getDatabase, ref, onValue, set } from "firebase/database";

const db = getDatabase(app);

function onDatabase(key: string): void {

  const starCountRef = ref(db, key);

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

function writeUserData(userUid: string, name: string) {
  set(ref(db, 'users/' + userUid + '/info'), {
    name
  });
}

export { onDatabase, writeUserData }