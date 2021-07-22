import { db, firebase } from "../firebase";
import { studentsStore } from "../stores/studentsStore";
import type { Student } from "./interfaces";

const COLLECTION = "students";

async function all(teacherId: string) {
  db.collection(COLLECTION)
    .where("teacherId", "==", teacherId)
    .onSnapshot(({ docs }) => {
      docs.map((students) => students.data());
      studentsStore.update(() =>
        docs.map(
          (student) => ({ ...student.data(), id: student.id } as Student)
        )
      );
    });
}

async function add(student: Student) {
  const { serverTimestamp } = firebase.firestore.FieldValue;
  student.createdAt = serverTimestamp();
  return await db.collection(COLLECTION).add(student);
}

async function remove(id: string) {
  return await db.collection(COLLECTION).doc(id).delete();
}

export { all, add, remove };
