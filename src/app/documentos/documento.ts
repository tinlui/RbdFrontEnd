export interface documentoCreacionDTO{
    NoAplica: boolean,
    Original: boolean,
    Copia: boolean,
    DocumentoDigital: File,
    Revisado: boolean,
    Observaciones: string,
}

export interface documentoDTO{
    NoAplica: boolean,
    Original: boolean,
    Copia: boolean,
    DocumentoDigital:string [],
    Revisado: boolean,
    Observaciones: string,
}