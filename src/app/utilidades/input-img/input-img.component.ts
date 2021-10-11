import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {

  pdfBase64: string;

  @Output()
  archivoSeleccionado: EventEmitter<File>=new EventEmitter<File>();

  constructor() {}

  ngOnInit(): void {}
  change(event) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => (this.pdfBase64 = value));
      this.archivoSeleccionado.emit(file);
    }
  }
}
