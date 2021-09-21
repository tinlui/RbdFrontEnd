
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [],
})
export class LandingPageComponent implements OnInit {
  columnasAMostrar = [
    'NUM_OBRA',
    'NOMBRE_FICHA',
    'INVERSION_ORIGINAL',
    'TECHO_FIN',
    'year',
    'NOM_MUNICIPIO',
    'REGION',
    'OFICIO_AUTORIZACION',
    'CLASIFICACION_PROYECTO',
    'EJECUTOR',
    'NOMBRE_PROGRAMA',
  ];
  contratosAMostrar = [
    'Numero_Contrato',
    'Contratista',
    'Fecha',
    'Oficio_Aprobacion',
    'Aprobado',
    'Origen',
    'Obra',
    'Estado',
  ];
  constructor() {
  
  }
  Obras = [
    {
      NUM_OBRA: '2100399',
      NOMBRE_FICHA: 'PAVIMENTACION ASFALTICA EN DIVERSAS CALLES ETAPA 1',
      INVERSION_ORIGINAL: 6233599.31,
      TECHO_FIN: 6233599.31,
      year: 2021,
      NOM_MUNICIPIO: 'ABASOLO',
      REGION: 'CENTRO-DESIERTO',
      OFICIO_AUTORIZACION: 'PEI-21-0886',
      CLASIFICACION_PROYECTO: 'HIDRO FEFMPH-2021',
      EJECUTOR: 6,
      NOMBRE_PROGRAMA: '',
    },
    {
      NUM_OBRA: 'ME0001-18',
      NOMBRE_FICHA: 'CONSTRUCCION DE CENTRO DE DESARROLLO COMUNITARIO',
      INVERSION_ORIGINAL: 3573857.62,
      TECHO_FIN: 3464051.5,
      year: 2018,
      NOM_MUNICIPIO: 'ACUÑA',
      REGION: 'NORTE',
      OFICIO_AUTORIZACION: 'PEI-18-1680',
      CLASIFICACION_PROYECTO: 'RAMO 15-HABITAT 2018',
      EJECUTOR: 7,
      NOMBRE_PROGRAMA: '',
    },
    {
      NUM_OBRA: '1801471',
      NOMBRE_FICHA:
        'CONSTRUCCION DE DRENAJE SANITARIO CALLES PROLONGACION CENTINELA PROLONGACION EJIDO SAUCEDA PROLONGACION ALDAMA ALDAMA TEPIC 5 DE MAYO GRAL FARIAS VICT',
      INVERSION_ORIGINAL: 7000000.0,
      TECHO_FIN: 6988054.86,
      year: 2018,
      NOM_MUNICIPIO: 'NAVA',
      REGION: 'NORTE',
      OFICIO_AUTORIZACION: 'PEI-18-2068',
      CLASIFICACION_PROYECTO: 'FEFMPH-2018(HIDROCARB)',
      EJECUTOR: 7,
      NOMBRE_PROGRAMA: '',
    },
  ];
  Contratos = [
    {
      Numero_Contrato: 'SIDUM2021042-00',
      Contratista: 'CONSTRUCTORA Y SERVICIOS WILLARS SA DE CV',
      Fecha: '2021-06-10',
      Oficio_Aprobacion: 'PEI-0749/21',
      Aprobado: '6183730.53',
      Origen: '2100399',
      Obra: '-FEDERAL',
      Estado: '',
    },
    {
      Numero_Contrato: 'SIDUM2018127-00',
      Contratista: 'MULTIOBRAS INTEGRADAS DE SALTILLO SA DE CV',
      Fecha: '2018-11-26',
      Oficio_Aprobacion: 'PEI-2752/18',
      Aprobado: '6988054.86',
      Origen: '1801471',
      Obra: '-FEDERAL',
      Estado: '',
    },
    {
      Numero_Contrato: 'SIDUM2020019-00',
      Contratista: 'GRUPO INMOBILIARIO REAL DEL BOSQUE SA DE CV',
      Fecha: '2020-03-23',
      Oficio_Aprobacion: 'PEI-1102/20',
      Aprobado: '28756458.48',
      Origen: '2000111',
      Obra: '-FEDERAL',
      Estado: '',
    },
  ];

  
  ngOnInit(): void {}
  

  contratoBusqueda = this.Contratos;
  obraBusqueda=this.Obras;
  existe:boolean=true;

  cargarContratos(Origen: string) {
    this.Contratos = this.contratoBusqueda;

    this.Contratos = this.Contratos.filter(
      (buscar) => buscar.Origen.indexOf(Origen) !== -1
    );
  }
  contratoCambio(contrato: string) {
  
    this.Obras=this.obraBusqueda;
    this.Obras=this.Obras.filter(
      (n)=>n.NUM_OBRA.indexOf(contrato)!==-1)
  
  }

  contenidoCambio(contenido:string){
    this.Obras=this.obraBusqueda;
    this.Obras=this.Obras.filter(
      (n)=>n.NOMBRE_FICHA.indexOf(contenido)!==-1)
  
  }
  limpiar() {
    this.Contratos = this.contratoBusqueda;
    this.Obras=this.obraBusqueda;
    this.existe=true;
  }
}
