import { Loja } from './../../../shared/models/loja.model';
import { LojaService } from 'src/app/shared/services/loja.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { LojaDialogData } from 'src/app/shared/models/lojaDialogData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loja-incluir-editar',
  templateUrl: './loja-incluir-editar.component.html',
  styleUrls: ['./loja-incluir-editar.component.css']
})
export class LojaIncluirEditarComponent implements OnInit {

  formulario!: FormGroup;
  lojaFormulario: any;
  isEdicao: boolean = false;
  
  constructor( 
    private _formBuilder: FormBuilder ,
    @Inject(MAT_DIALOG_DATA) public data: LojaDialogData,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<MatDialogComponent>,
    private lojaService: LojaService
    ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      id:                 [],
      nome:               [null, Validators.required],
      descricao:          [null, Validators.required],
      email:              [null, Validators.required],
      url:                [null, Validators.required],
      dhInclusao:         [],
      dhExclusao:         [],
      dhUltimaAlteracao:  [],
      usuarioProprietario:[]   
    });

    if(this.data.loja != null){
      this.preencherFormulario();
      this.isEdicao = true;
    }
  }

  preencherFormulario(){
    this.formulario.patchValue(this.data.loja);
  }

  cadastrarLoja(loja: Loja){
   

    
  }
  submit(){
    console.log("Fazendo login...")
    this.lojaFormulario = this.formulario.getRawValue();
    this.lojaFormulario.usuarioProprietario = this.data.usuario;

    console.log("Dados.")
    console.log(this.lojaFormulario)

    if(this.formulario.valid){
      if(!this.isEdicao){
        this.lojaService.cadastrarLoja( this.lojaFormulario).subscribe(resultado => {
          if(resultado){
            this._snackBar.open("Loja cadastrada com sucesso!", "Fechar", {
              duration: 2000,
              verticalPosition: 'bottom',
              panelClass: 'notify-successful'
          });
            this.onNoClick();
          }
        });
      }else{
        this.lojaService.atualizarLoja(this.lojaFormulario).subscribe(resultado => {
          console.log(resultado)
          if(resultado){
            this._snackBar.open("Loja atualizada com sucesso!", "Fechar", {
              duration: 2000,
              verticalPosition: 'bottom',
              panelClass: 'notify-successful'
          });
            this.onNoClick();
          }
        });
      }
    }else{
      this._snackBar.open("Preencha todos os campos corretamente!", "Fechar", {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: 'notify-warning'
    });
    }

   
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
