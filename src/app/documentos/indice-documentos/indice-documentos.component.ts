import { Component, OnInit } from '@angular/core';

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
  constructor() { }
documentacion=[
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
 }
];
  ngOnInit(): void {
  }

}
