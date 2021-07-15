import { writable, Writable } from "svelte/store";

export interface Words {
  id: string;
  original: string;
  meaning: string;
}

export interface WordsItems {
  verbs: Words[];
  vocabularies: Words[];
  grammars: Words[];
  expressions: Words[];
}

const DEFAULT_ITEMS: WordsItems = {
  verbs: [],
  vocabularies: [],
  grammars: [],
  expressions: [],
};

export const wordsItems: Writable<WordsItems> =
  writable<WordsItems>(DEFAULT_ITEMS);
