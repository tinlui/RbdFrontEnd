import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { DocumentacionDTO } from 'src/app/DTO/DocumentacionDTO';
import { ListadoArchivosComponent } from 'src/app/utilidades/listado-archivos/listado-archivos.component';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { DocumentosService } from '../documentos.service';

@Component({
  selector: 'app-indice-documentos',
  templateUrl: './indice-documentos.component.html',
  styleUrls: ['./indice-documentos.component.css']
})

export class IndiceDocumentosComponent implements OnInit {
 
columnas=[
  
  'no_doc',
  'documento',
  'no_aplica',
  'original',
  'copia',
  'docDigital',
  'revisado',
  'observacion',
  'responsable',
  'Acciones',
]
//datos del contrato
@Input()
descripcion:any

documentoNoSeleccionados:MultipleSelectorModel;
  constructor(private listadoArchivos: MatBottomSheet, private activatedRoute: ActivatedRoute, private documentosService: DocumentosService) { }

  Planeacion:DocumentacionDTO[]=[];
  Planeacion1:DocumentacionDTO[]=[];
  Adjudicacion:DocumentacionDTO[]=[];
Adjudicacion1:DocumentacionDTO[]=[];
  Ejecucion:DocumentacionDTO[]=[];
Ejecucion1:DocumentacionDTO[]=[];




  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    
      this.descripcion=params
      this.documentosService.listadoContrato(params.contrato)
      .subscribe( 
        (respuesta:HttpResponse<any>)=>{
        
          for (let index = 0; index < respuesta.body.length; index++) {
            const element = respuesta.body[index].grupo;
           
            if(element==="1"){
             respuesta.body[index]
             this.Planeacion1.push(respuesta.body[index])
            }
            if(element==="2"){
              respuesta.body[index]
              this.Adjudicacion1.push(respuesta.body[index])
            }
            if(element==="3"){
              respuesta.body[index]
              this.Ejecucion1.push(respuesta.body[index])
              
            }
          }
        this.Planeacion=this.Planeacion1;
        this.Adjudicacion=this.Adjudicacion1;
        this.Ejecucion=this.Ejecucion1;
      })
      this.documentosService.listadoNa(params.contrato).subscribe(
        (respuesta:HttpResponse<any>)=>{
          this.documentoNoSeleccionados=respuesta.body
        }
      )
    });

    
  }
  abrirListado(id:number){
    this.listadoArchivos.open(ListadoArchivosComponent,{
      data:id
    });
  }
 
}


// openDialog(contrato: string) {
//   const Modal = this.dialog.open(ModalContratoComponent, {
//     width: '450px',
//     data: contrato,
//   });
//   Modal.afterClosed().subscribe((res) => {
//     console.log({ res });
//   });
// }