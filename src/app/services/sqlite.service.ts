import { Injectable } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteDBConnection,
  SQLiteConnection,
  capSQLiteSet
} from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB() {
    try {
      // Crear conexión se modifiica comentario para evitar error de consola
      const db = await this.sqlite.createConnection("myecommerce", false, "no-encryption", 1, false);

      this.db = db;
      await db.open();

      // Crear tablas
      const createScript = `
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE
        );
        CREATE TABLE IF NOT EXISTS productos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre TEXT NOT NULL,
          precio REAL NOT NULL,
          descripcion TEXT
        );
        CREATE TABLE IF NOT EXISTS ordenes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          usuario_id INTEGER,
          fecha TEXT NOT NULL,
          total REAL,
          FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        );
        CREATE TABLE IF NOT EXISTS orden_detalle (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          orden_id INTEGER,
          producto_id INTEGER,
          cantidad INTEGER,
          FOREIGN KEY (orden_id) REFERENCES ordenes(id),
          FOREIGN KEY (producto_id) REFERENCES productos(id)
        );
      `;

      await db.execute(createScript);
      console.log('Se creo la base de datos correctamente');
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }
}
