import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EstudiantesFormComponent } from './estudiantes-form/estudiantes-form.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { EstudiantesTableComponent } from './estudiantes-table/estudiantes-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesFormComponent,
    EstudiantesTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'estudiantes-form/:id', component: EstudiantesFormComponent },
      { path: '**', component: EstudiantesTableComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
