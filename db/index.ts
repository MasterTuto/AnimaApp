import * as SQLite from "expo-sqlite";

export const connectDatabase = () => {
  const db = SQLite.openDatabase("animals.db");
  return db;
};
