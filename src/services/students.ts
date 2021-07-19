import { db } from "../../init-firebase";

const COLLECTION = "students";

async function allStudents() {
  const { docs } = await db.collection(COLLECTION).get();
  return docs.map((students) => students.data());
}

export { allStudents };
