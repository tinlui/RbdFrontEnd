import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { documentoCreacionDTO, documentoDTO } from '../documento';


@Component({
  selector: 'app-formulario-documentos',
  templateUrl: './formulario-documentos.component.html',
  styleUrls: ['./formulario-documentos.component.css']
})
export class FormularioDocumentosComponent implements OnInit {

  @Input()
  contrato: any;
  
  @Input()
  modelo: documentoDTO;

  @Output()
  submit: EventEmitter<documentoCreacionDTO>=new EventEmitter<documentoCreacionDTO>();

  form: FormGroup;

  PdfCambiado=false;

nombreDocumento:string='Ningun Archivo Seleccionado';

 
  constructor(private formBuilder: FormBuilder,private activatedRoute: ActivatedRoute) { 
    this.form = this.formBuilder.group({
      NoAplica: false,
      Original: false,
      Copia: false,
      DocumentoDigital: '',
      Revisado: false,
      Observaciones: '',
    });
  
   
  }

  ngOnInit(): void {
    
    if(this.modelo!==undefined){
  
      this.form.patchValue(this.modelo);
    }
    
    this.activatedRoute.params.subscribe((params) => {
      
      this.contrato = params;
    });
  }
  onSubmit(){
    if(!this.PdfCambiado){
      this.form.patchValue({'DocumentoDigital':null})
    }
this.submit.emit(this.form.value);
  }
  archivoSeleccionado(file){
    this.form.get('DocumentoDigital').setValue(file);
    this.nombreDocumento=file.name;
    this.PdfCambiado=true;
  }
}
