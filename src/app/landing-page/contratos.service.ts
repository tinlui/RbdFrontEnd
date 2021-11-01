import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContratosDTO } from '../DTO/contratos';
import { ObrasDTO } from '../DTO/ObrasDTO';

@Injectable({
  providedIn: 'root',
})
export class ContratosService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL+'/contratos';

  public obtenerTodos(valores:any): Observable<any> {
    const params = new HttpParams({fromObject:valores});
  
   return this.http.get<ContratosDTO[]>(`${this.apiURL}`,{params,observe:'response'});
  }

  public obtenerTodosObras(
   val:any
  ): Observable<any> {
    const params = new HttpParams({fromObject:val});
  
    return this.http.get<ObrasDTO[]>(this.apiURL + '/listadoObras', {
      observe: 'response',
      params,
    });
  }

  public PostGet(val:any):Observable<any>{
    const params = new HttpParams({fromObject:val});
  
    return this.http.get<ObrasDTO[]>(`${this.apiURL}/PostGet`,{params,observe:'response'})
  }
}
