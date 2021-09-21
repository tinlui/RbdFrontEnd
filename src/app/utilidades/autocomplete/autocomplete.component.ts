import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  @Output()
  change:EventEmitter<string>=new EventEmitter<string>();
 

  constructor() { }

  control:FormControl=new FormControl();
  
  Contratos = [
    '1800938',
   '1800936',
   '2100399',
    '1800921',
    '1801318',
    '1801202',
    '1801023',
    '1801204',
    '1801205',
    '1801471',
    '1801207',
    '1801208',
  ];
 
  
  contratosOriginal = this.Contratos;


  ngOnInit(): void {
   
    this.control.valueChanges.subscribe((valor) => {
      this.Contratos = this.contratosOriginal;
      this.Contratos = this.Contratos.filter(
        (cont) => cont.indexOf(valor) !== -1
      );
    });

    
  }
  optionSelected(event: MatAutocompleteSelectedEvent){
this.change.emit(event.option.value)
this.control.patchValue('');
  }
  
}
