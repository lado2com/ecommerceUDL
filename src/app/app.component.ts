import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SQLiteService } from '../services/sqlite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private sqliteService: SQLiteService) {
    this.inicializarBaseDeDatos();
  }

  async inicializarBaseDeDatos() {
    await this.sqliteService.initDB();
  }
}
