import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-autocomplete-contenido',
  templateUrl: './autocomplete-contenido.component.html',
  styleUrls: ['./autocomplete-contenido.component.css']
})
export class AutocompleteContenidoComponent implements OnInit {

@Output()
changeC:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  control:FormControl=new FormControl();
  
  Contenidos=[
    'PAVIMENTACION ASFALTICA EN DIVERSAS CALLES ETAPA 1',
    'CONSTRUCCION DE CENTRO DE DESARROLLO COMUNITARIO',
    'CONSTRUCCION DE DRENAJE SANITARIO CALLES PROLONGACION CENTINELA PROLONGACION EJIDO SAUCEDA PROLONGACION ALDAMA ALDAMA TEPIC 5 DE MAYO GRAL FARIAS VICT',
    'REHABILITACION DE UNIDAD DEPORTIVA PALAU',
    'PAVIMENTACION EN DIVERSAS CALLES DEL MUNICIPIO DE SALTILLO ETAPA (7)',
  'REHABILITACIÓN DE LA PLAZA PÚBLICA EN LA COLONIA PORTALES EN RAMOS ARIZPE'
  ]

  contenidoOriginal=this.Contenidos;

  ngOnInit(): void {

    
  this.control.valueChanges.subscribe((valor)=>{
    this.Contenidos=this.contenidoOriginal;
    this.Contenidos=this.Contenidos.filter(
      (cont)=>cont.indexOf(valor)!==-1
    );
  });

  }
  optionSelected(event: MatAutocompleteSelectedEvent){
    this.changeC.emit(event.option.value)
    this.control.patchValue('');
      }
}
