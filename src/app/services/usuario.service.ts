import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection } from '@capacitor-community/sqlite';
import { Usuario } from '../models/usuario.model'; // Asegúrate de que la ruta sea correcta
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private db!: SQLiteDBConnection;
  private sqlite: SQLiteConnection;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB() {
    const db = await this.sqlite.createConnection('myecommerce', false, 'no-encryption', 1, false);
    this.db = db;
    await db.open();
  }

  async agregar(usuario: Usuario): Promise<void> {
    const query = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
    const values = [usuario.nombre, usuario.email];
    await this.db.run(query, values);
  }

  async listar(): Promise<Usuario[]> {
    const result = await this.db.query('SELECT * FROM usuarios');
    return result.values as Usuario[];
  }
}
