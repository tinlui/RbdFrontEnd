
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { ContratosDTO } from '../DTO/contratos';
import { ObrasDTO } from '../DTO/ObrasDTO';
import { ContratosService } from './contratos.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [],
})
export class LandingPageComponent implements OnInit {
  columnasAMostrar = [
    'nuM_OBRA',
    'nombrE_FICHA',
    'inversion_Original',
    'techO_FIN',
    
    'noM_MUNICIPIO',
    'region',
    'oficio_Autorizacion',
    'clasificacion_Proyecto',
    'ejecutor',
    'nombrE_PROGRAMA',
  ];
  contratosAMostrar = [
    'contrato',
    'razon_Social',
    'fecha_cont',
    'ofaprobaci',
    'montoaprob',
    'fuente',
    'nuM_OBRA',
    
  ];
  form: FormGroup;
formulario={
  obra:''
}
  constructor(
    private contratosService: ContratosService,
    private formBuilder: FormBuilder
  ) {}
  Obras :ObrasDTO;
  modelo: ContratosDTO;
  consultaContrato:ContratosDTO;
  cantidadTotalRegistros;
  cantidadRegistrosAMostrar = 10;
  paginaActual = 1;

  cantidadTotalRegistrosObras;
  cantidadRegistrosAMostrarObras = 10;
  paginaActualObras = 1;
  
  existe: boolean = true;

  ngOnInit(): void {
    this.form=this.formBuilder.group(this.formulario);
  
    this.cargarContratos(this.form.value);
    this.form.valueChanges.subscribe((valores)=>{
     
      this.cargarContratos(valores);
    })
  
    this.cargarRegistrosObras('');
  }

  cargarContratos(valores:any) {
   
    var objeto:any={}
    if(valores.obra!=''){
      objeto.obra=valores
    }else{
      objeto.obra='';
    }
  
    objeto.pagina=this.paginaActual;
   objeto.recordsPorPagina=this.cantidadRegistrosAMostrar;   
   
    this.contratosService
      .obtenerTodos(objeto)
      .subscribe(
        (respuesta: HttpResponse<ContratosDTO>) => {
          this.modelo = respuesta.body;
          this.cantidadTotalRegistros = respuesta.headers.get(
            'cantidadTotalRegistros'
          );
          
        },
        (error) => console.error(error)
      );
  }
cargarRegistrosObras(val:any){
  var objeto:any={}
    if(val.obra!=''){
      objeto.obra=val
    }else{
      objeto.obra='';
    }
    objeto.pagina=this.paginaActualObras;
    objeto.recordsPorPagina=this.cantidadRegistrosAMostrarObras;   
  this.contratosService
  .obtenerTodosObras(objeto)
  .subscribe(
    (respuesta:HttpResponse<ObrasDTO>)=>{
      this.Obras=respuesta.body;
      this.cantidadTotalRegistrosObras=respuesta.headers.get(
        'cantidadTotalRegistros'
      );
    },
    (error) => console.error(error)
  );
}


actualizarPaginacionObras(datos: PageEvent) {
    
  this.paginaActualObras = datos.pageIndex + 1;
  this.cantidadRegistrosAMostrarObras = datos.pageSize;
 // this.cargarRegistrosObras(this.paginaActualObras, this.cantidadRegistrosAMostrarObras);
}
  actualizarPaginacion(datos: PageEvent) {
    
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
 
  }

  contratoCambio(contrato:any) {
    
     this.cargarContratos(contrato);
     this.cargarRegistrosObras(contrato);
    // this.Obras = this.obraBusqueda;
    // this.Obras = this.Obras.filter((n) => n.NUM_OBRA.indexOf(contrato) !== -1);
  }

  contenidoCambio(contenido: string) {
    // this.Obras = this.obraBusqueda;
    // this.Obras = this.Obras.filter(
    //   (n) => n.NOMBRE_FICHA.indexOf(contenido) !== -1
    // );
  }

  limpiar() {
  this.cargarContratos('');
    this.cargarRegistrosObras('');
    this.existe = true;
  }
}
