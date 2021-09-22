import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-archivos',
  templateUrl: './listado-archivos.component.html',
  styleUrls: ['./listado-archivos.component.css']
})
export class ListadoArchivosComponent implements OnInit {

  constructor() { }
links=[
  '1',
  '2',
  '3'
]
  ngOnInit(): void {
  }
  showInfo(link:any){

  }
}
