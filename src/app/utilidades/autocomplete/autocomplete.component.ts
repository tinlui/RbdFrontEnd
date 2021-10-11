import { HttpResponse } from '@angular/common/http';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ObrasDTO } from 'src/app/DTO/ObrasDTO';
import { ContratosService } from 'src/app/landing-page/contratos.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private contratosService: ContratosService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  control: FormControl = new FormControl();

  Contratos: ObrasDTO;
  filteredOptions: Observable<any>;
  ngOnInit(): void {
    this.cargarContratos(this.control.value);

    this.control.valueChanges.subscribe((valores) => {
      this.cargarContratos(valores);
      this.escribirParametrosURL();
    });
  }

  private escribirParametrosURL() {
    var queryStrings = [];
    var valor = this.control.value;
    if (valor) {
      queryStrings.push(`obra=${valor}`);
    }
    this.location.replaceState('principal', queryStrings.join('&'));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.change.emit(event.option.value);
  }

  cargarContratos(valores: any) {
    var objeto: any = {};
    objeto.obra = valores;
    this.contratosService.PostGet(objeto).subscribe(
      (respuesta: HttpResponse<ObrasDTO>) => {
        this.Contratos = respuesta.body;
      },
      (error) => console.error(error)
    );
  }
}
