import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { AutocompleteComponent } from './utilidades/autocomplete/autocomplete.component';
import { AutocompleteContenidoComponent } from './utilidades/autocomplete-contenido/autocomplete-contenido.component';
import { IndiceDocumentosComponent } from './documentos/indice-documentos/indice-documentos.component';
import { FormularioDocumentosComponent } from './documentos/formulario-documentos/formulario-documentos.component';
import { CrearDocumentosComponent } from './documentos/crear-documentos/crear-documentos.component';
import { EditarDocumentosComponent } from './documentos/editar-documentos/editar-documentos.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoArchivosComponent } from './utilidades/listado-archivos/listado-archivos.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ListadoGenericoComponent,
    AutocompleteComponent,
    AutocompleteContenidoComponent,
    IndiceDocumentosComponent,
    FormularioDocumentosComponent,
    CrearDocumentosComponent,
    EditarDocumentosComponent,
    MenuComponent,
    ListadoArchivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
