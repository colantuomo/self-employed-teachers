import type firebase from "firebase";
import { writable, Writable } from "svelte/store";

export const userStore: Writable<firebase.User> = writable<firebase.User>();
