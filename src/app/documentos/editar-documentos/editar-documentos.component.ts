import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { documentoCreacionDTO, documentoDTO } from '../documento';

@Component({
  selector: 'app-editar-documentos',
  templateUrl: './editar-documentos.component.html',
  styleUrls: ['./editar-documentos.component.css']
})
export class EditarDocumentosComponent implements OnInit {

  @Input()
  contrato: any;

  modelo: documentoDTO = {
    NoAplica:true,
  Original:false,
  Copia:false,
  DocumentoDigital:[]=['st','af'],
  Revisado:true,
  Observaciones:''
  };
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }



  ngOnInit(): void {
    this.modelo
    this.activatedRoute.params.subscribe((params) => {
      
      this.contrato = params;
    });
  }
  guardarCambios(documento:documentoCreacionDTO){
    console.log(documento)
    this.router.navigate(['/documentos', this.contrato.contrato]);
  }
}
