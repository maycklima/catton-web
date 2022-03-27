import { Loja } from './../../../shared/models/loja.model';
import { LojaService } from 'src/app/shared/services/loja.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { LojaDialogData } from 'src/app/shared/models/lojaDialogData';

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
    public dialogRef: MatDialogRef<MatDialogComponent>,
    private lojaService: LojaService
    ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      id: [],
      nome: ['Loja Mayck'],
      descricao: ['Loja Mayck Memo'],
      telefone: [6234512329],
      celular: [62996801751],
      whatsapp: [62996801751],
      whatsappLink: ['Link WhatsApp'],
      instagramLink: ['Link Instagram'],
      email: ['lojamayck@gmail.com'],
      dhInclusao: [],
      dhExclusao:[],
      dhUltimaAlteracao:[],
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

    if(!this.isEdicao){
      this.lojaService.cadastrarLoja( this.lojaFormulario).subscribe(resultado => {
        if(resultado){
          this.onNoClick();
        }
      });
    }else{
      this.lojaService.atualizarLoja(this.lojaFormulario).subscribe(resultado => {
        console.log(resultado)
        if(resultado){
          this.onNoClick();
        }
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
