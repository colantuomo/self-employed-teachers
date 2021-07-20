import { db, firebase } from "../../init-firebase";
import type { Student } from "./interfaces";

const COLLECTION = "students";

async function all(teacherId: string) {
  const { docs } = await db
    .collection(COLLECTION)
    .where("teacherId", "==", teacherId)
    .get();
  return docs.map((students) => students.data());
}

async function add(student: Student) {
  const { serverTimestamp } = firebase.firestore.FieldValue;
  student.createdAt = serverTimestamp();
  return await db.collection(COLLECTION).add(student);
}

export { all, add };
