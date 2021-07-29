import { db, firebase } from "../firebase";
import type { Classroom } from "./interfaces";

const COLLECTION = "classes";

async function byId(id: string): Promise<Classroom> {
  const { ref } = await db.collection(COLLECTION).doc(id).get();
  return (await ref.get()).data() as Classroom;
}

async function all(id: string): Promise<Classroom[]> {
  const { docs } = await db
    .collection(COLLECTION)
    .where("teacherId", "==", id)
    .get();
  return docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Classroom[];
}

async function add(classroom: any) {
  return await db.collection(COLLECTION).add(classroom);
}

export { byId, all, add };
