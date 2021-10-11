import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { documentoCreacionDTO } from '../documento';


@Component({
  selector: 'app-crear-documentos',
  templateUrl: './crear-documentos.component.html',
  styleUrls: ['./crear-documentos.component.css'],
})
export class CrearDocumentosComponent implements OnInit {
  
  @Input()
  contrato: any;

  constructor(private router:Router , private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      
      this.contrato = params;
    });
  }

  guardarCambios(documento:documentoCreacionDTO) {
    //...guardar
console.log(documento)
    this.router.navigate(['/documentos', this.contrato.contrato]);
  }


}
