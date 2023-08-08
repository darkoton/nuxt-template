import app from "~/plugins/firebase/firebase"
import { getDatabase, ref, onValue } from "firebase/database";

function onDatabase(key: string): void {
  const db = getDatabase(app);

  const starCountRef = ref(db, key);

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

export default onDatabase