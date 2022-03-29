import { Database } from "expo-sqlite";

export default {
  createTable(db: Database) {
    db.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS Favorite (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                latin_name TEXT NOT NULL,
                animal_type TEXT NOT NULL,
                active_time TEXT NOT NULL,
                length_min TEXT NOT NULL,
                length_max TEXT NOT NULL,
                weight_min TEXT NOT NULL,
                weight_max TEXT NOT NULL,
                lifespan TEXT NOT NULL,
                habitat TEXT NOT NULL,
                diet TEXT NOT NULL,
                geo_range TEXT NOT NULL,
                image_link TEXT NOT NULL
            );`);
    });
  },
  add(db: Database, favorite: Animal) {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO Favorite (
              id, name, latin_name, animal_type, active_time, length_min, length_max, weight_min,
              weight_max, lifespan, habitat, diet, geo_range, image_link
            ) VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
            );`,
        [
          favorite.id,
          favorite.name,
          favorite.latin_name,
          favorite.animal_type,
          favorite.active_time,
          favorite.length_min,
          favorite.length_max,
          favorite.weight_min,
          favorite.weight_max,
          favorite.lifespan,
          favorite.habitat,
          favorite.diet,
          favorite.geo_range,
          favorite.image_link,
        ],
        undefined,
        undefined
      );
    });
  },
  has(db: Database, id: number, onResult?: (exists: boolean) => void) {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT id FROM Favorite WHERE id=?;`,
        [id],
        (_, { rows: { length } }) => onResult && onResult(!!length)
      );
    });
  },
  all(db: Database, onResult: (animals: Animal[]) => void) {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM Favorite;`,
        [],
        (_, { rows: { _array } }) => onResult(_array as Animal[]),
        (_1, _2) => {
          onResult([]);
          return false;
        }
      );
    });
  },
  remove(db: Database, id: number) {
    db.transaction((tx) =>
      tx.executeSql(`DELETE FROM Favorite WHERE id = ?`, [id])
    );
  },
};
