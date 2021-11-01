import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { DocumentosService } from 'src/app/documentos/documentos.service';

@Component({
  selector: 'app-listado-archivos',
  templateUrl: './listado-archivos.component.html',
  styleUrls: ['./listado-archivos.component.css'],
})
export class ListadoArchivosComponent implements OnInit {
  constructor(
    private documentosService: DocumentosService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: number,
    private http:HttpClient
  ) {}

  require:any;
 //  FileSaver=require('file-saver');
  links = [];
  archivo;
  nombre;

  ngOnInit(): void {
    this.documentosService
      .archivosAdjuntos(this.data)
      .subscribe((respuesta: HttpResponse<any>) => {
        respuesta.body;

        this.links = respuesta.body;
        this.links.map(val=>{
    
        this.archivo=  val.documento.split('/')[5];
        })
      });
 
}

   
}
