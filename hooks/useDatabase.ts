import { Database } from "expo-sqlite";
import { connectDatabase } from "../db";
import Favorites from "../db/models/Favorites";

export const db = connectDatabase();

type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R
  ? (...args: P) => R
  : never;

type FavoriteWithDB = {
  [Prop in keyof typeof Favorites]: OmitFirstArg<typeof Favorites[Prop]>;
};

export function useDatabase(): [Database, FavoriteWithDB] {
  const operations: FavoriteWithDB = {
    add: (animal) => Favorites.add(db, animal),
    all: (onResult) => Favorites.all(db, onResult),
    createTable: () => Favorites.createTable(db),
    has: (id, onResult) => Favorites.has(db, id, onResult),
    remove: (id) => Favorites.remove(db, id),
  };
  return [db, operations];
}
