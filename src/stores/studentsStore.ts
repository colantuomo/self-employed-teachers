import { writable, Writable } from "svelte/store";
import type { Student } from "../services/interfaces";

export const studentsStore: Writable<Student[]> = writable<Student[]>();
