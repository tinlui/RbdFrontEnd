export interface DocumentacionDTO{
  id:number,
    no_doc :number,
    documento: string,
    no_aplica:boolean,
    original:boolean,
    copia:boolean,
    revisado:boolean,
    docDigital:number,
    observacion:string,
    grupo:string,
    responsable:string
}