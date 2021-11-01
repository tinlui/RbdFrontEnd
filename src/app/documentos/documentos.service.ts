import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContratosDTO } from '../DTO/contratos';
import { DocumentacionDTO } from '../DTO/DocumentacionDTO';
import { MultipleSelectorModel } from '../utilidades/selector-multiple/MultipleSelectorModel';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  constructor(private http:HttpClient) { }
  private apiURL = environment.apiURL+'/documentacion';


  public Get(contrato:string):Observable<ContratosDTO[]>{
    return this.http.get<ContratosDTO[]>(`${this.apiURL}/${contrato}`)
  }

  public listadoContrato(contrato:string):Observable<any>{
    let params = new HttpParams();
    params=params.append('contrato',contrato)
    return this.http.get<DocumentacionDTO[]>(this.apiURL+'/listadoContrato',{
      observe:'response',
      params
    });
  }

  public listadoNa(contrato:string):Observable<any>{
    let params = new HttpParams;
    params=params.append('contrato',contrato)
    return this.http.get<MultipleSelectorModel[]>(this.apiURL+'/noAplica',{
      observe:'response',
      params
    });
  }

  public archivosAdjuntos(id:number):Observable<any>{
    let params= new HttpParams;
    params=params.append('id',id)
    return this.http.get<DocumentacionDTO[]>(this.apiURL+'/archivosAdjuntos',{
      observe:'response',
      params
    })
  }
}
