import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-deletar',
  templateUrl: './dialog-deletar.component.html',
  styleUrl: './dialog-deletar.component.scss'
})
export class DialogDeletarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeletarComponent>,
    @Inject(MAT_DIALOG_DATA) public nomeObjeto: string,
  ) {}

  deletar(): void {
    //Retorna true caso tenha deletado o objeto.
    this.dialogRef.close(true);
  }
}
