import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sair-formulario',
  templateUrl: './dialog-sair-formulario.component.html',
  styleUrl: './dialog-sair-formulario.component.scss'
})
export class DialogSairFormularioComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSairFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public nomeObjeto: string,
  ) {}

  sair(): void {
    //Retorna true caso tenha deletado o objeto.
    this.dialogRef.close(true);
  }
}
