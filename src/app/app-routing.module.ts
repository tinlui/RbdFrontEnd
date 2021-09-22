import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component'
import { IndiceDocumentosComponent } from "./documentos/indice-documentos/indice-documentos.component";
import { CrearDocumentosComponent } from "./documentos/crear-documentos/crear-documentos.component";
import{ EditarDocumentosComponent} from "./documentos/editar-documentos/editar-documentos.component"
const routes: Routes = [
  {path:'',component:LandingPageComponent},

  {path:'documentos/:contrato',component:IndiceDocumentosComponent},
  {path:'documentos/crear',component:CrearDocumentosComponent},
  {path:'documentos/editar/:id',component:EditarDocumentosComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
