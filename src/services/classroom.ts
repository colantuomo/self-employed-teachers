import { compareAsc, compareDesc } from "date-fns";
import { db } from "../firebase";
import type { Classroom } from "./interfaces";

const COLLECTION = "classes";

function orderByDate(a, b) {
  const dateA = a["date"].toDate() as Date;
  const dateB = b["date"].toDate() as Date;
  return compareAsc(dateA, dateB);
}

function orderByMonth(item: Classroom, month: Date) {
  const date = item["date"].toDate() as Date;
  const currentItemDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const selectedDate = `${month.getFullYear()}-${month.getMonth()}-${month.getDate()}`;
  return currentItemDate === selectedDate;
}

async function byId(id: string): Promise<Classroom> {
  const { ref } = await db.collection(COLLECTION).doc(id).get();
  return (await ref.get()).data() as Classroom;
}

async function byDate(id: string, date: Date): Promise<Classroom[]> {
  const { docs } = await db
    .collection(COLLECTION)
    .where("teacherId", "==", id)
    .get();
  const mappedDocs = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const filteredDocs = mappedDocs.filter((item) =>
    orderByMonth(item as Classroom, date)
  ) as Classroom[];
  return filteredDocs.sort(orderByDate);
}

async function all(id: string): Promise<Classroom[]> {
  const { docs } = await db
    .collection(COLLECTION)
    .where("teacherId", "==", id)
    .get();
  return docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .sort(orderByDate) as Classroom[];
}

async function add(classroom: any) {
  return await db.collection(COLLECTION).add(classroom);
}

async function remove(id: string) {
  return await db.collection(COLLECTION).doc(id).delete();
}

export { byId, all, add, remove, byDate };
