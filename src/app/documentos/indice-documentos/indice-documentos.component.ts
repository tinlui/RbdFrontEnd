import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { ListadoArchivosComponent } from 'src/app/utilidades/listado-archivos/listado-archivos.component';

@Component({
  selector: 'app-indice-documentos',
  templateUrl: './indice-documentos.component.html',
  styleUrls: ['./indice-documentos.component.css']
})
export class IndiceDocumentosComponent implements OnInit {
columnas=[
  'Numero',
  'Documento',
  'NoAplica',
  'Original',
  'Copia',
  'Doc_digital',
  'Revisado',
  'Observaciones',
  'Responsable',
  'Acciones'
]
  constructor(private listadoArchivos: MatBottomSheet, private activatedRoute: ActivatedRoute) { }
documentacion=[
  'SIDUM2021042-00',
 { Numero:1,
  Documento:'Expediente Tecnico',
  NoAplica:false,
  Original:true,
  Copia:false,
  Doc_digital:1,
  Revisado:false,
  Observaciones:'',
  Responsable:'Costos'
 },
 { Numero:2,
  Documento:'Oficio de Autorización emitido por la autoridad correspondiente',
  NoAplica:false,
  Original:true,
  Copia:false,
  Doc_digital:3,
  Revisado:true,
  Observaciones:'',
  Responsable:'Evaluación y Seguimiento'
 },
 { Numero:3,
  Documento:'Oficio de solicitud para modificaciones de metas, presupuestales, transferencias o cancelación',
  NoAplica:true,
  Original:false,
  Copia:false,
  Doc_digital:0,
  Revisado:false,
  Observaciones:'',
  Responsable:'Enlace Técnico'
 },
 { Numero:4,
  Documento:'Oficio de aprobación de modificación de metas',
  NoAplica:false,
  Original:false,
  Copia:false,
  Doc_digital:0,
  Revisado:false,
  Observaciones:'',
  Responsable:'Evaluación y Seguimiento'
 }
];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      console.log(params)
    })
  }
  abrirListado(){
    this.listadoArchivos.open(ListadoArchivosComponent);
  }
}
