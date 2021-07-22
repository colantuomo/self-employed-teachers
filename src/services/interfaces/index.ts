import type { firebase } from "../../firebase";
export interface Student {
  id?: string;
  name: string;
  email: string;
  hourValue: number;
  teacherId?: string;
  profilePicture?: string;
  createdAt?: firebase.firestore.FieldValue;
}

export interface Classroom {
  id?: string;
  classDate: firebase.firestore.FieldValue;
  printscreen: string;
  studentId: string;
  studentName: string;
  teacherId: string;
  templateId: string;
}
