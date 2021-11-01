import { Component,  Inject,  OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-contrato',
  templateUrl: './modal-contrato.component.html',
  styleUrls: ['./modal-contrato.component.css']
})
export class ModalContratoComponent implements OnInit {
  
  Documentacion!: string;
  constructor(public dialog: MatDialogRef<ModalContratoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.Documentacion = this.data;
   
  }
  
  closeDialog(tipo :number) { this.dialog.close({ event: 'close', data: tipo }); }
  closeModal(){
    this.dialog.close({data:'Se cancelo la transaccion'});
  }
}
