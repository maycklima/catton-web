import { CategoriaService } from './../../../shared/services/categoria.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ItemDialogData } from 'src/app/shared/models/itemDialog';
import { ItemService } from 'src/app/shared/services/item.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-incluir-editar',
  templateUrl: './item-incluir-editar.component.html',
  styleUrls: ['./item-incluir-editar.component.css']
})
export class ItemIncluirEditarComponent implements OnInit {

  
  formulario!: FormGroup;
  itemFormulario: any;
  listaCategorias: any;
  categoriaDefault: any;
  isEdicao: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemDialogData,
    private _formBuilder: FormBuilder,
    private itemService: ItemService,
    private _snackBar: MatSnackBar,
    private categoriaService: CategoriaService) 
    { }

    ngOnInit(): void {
      this.inicializarFormulario();
      this.buscarCategorias();
      console.log(this.data);
    }

    compareFunction(o1: any, o2: any) {
      return o1.name == o2.name && o1.id == o2.id;
    }

  
    inicializarFormulario(){
      this.formulario = this._formBuilder.group({
        id:         [],
        descricao:  [null, Validators.required],
        valor:      [null, Validators.required],
        quantidade: [null, Validators.required],
        categoria:  [null, Validators.required],
        dhInclusao: [],
        dhExclusao: [],
        dhUltimaAlteracao:[],
        loja:       []
      });

      if(this.data.item != null){
        this.preencherFormulario();
        this.isEdicao = true;
      }
    }

    buscarCategorias(){
      this.categoriaService.listarCategorias().subscribe(result => {
        this.listaCategorias = result;
      });
    }

    preencherFormulario(){
      this.formulario.patchValue(this.data.item);
      this.categoriaDefault = this.data.item.categoria.descricao;
      console.log('this.categoriaDefault')
      console.log(this.formulario)
    }
    
  
    submit(){  
      console.log("Cadastrando item...")
      this.itemFormulario = this.formulario.getRawValue();
      this.itemFormulario.loja = this.data.loja;

      console.log("Data.")
      console.log(this.data)
  
      console.log("Formulário.")
      console.log(this.formulario.getRawValue())

      console.log("Enviadno.")
      console.log( this.itemFormulario)
      if(this.formulario.valid){
        if(!this.isEdicao){
            this.itemService.cadastrarItem(this.itemFormulario).subscribe(resultado => {
              console.log(resultado)
              if(resultado){
              this._snackBar.open("Item cadastrado com sucesso!", "Fechar", {
                duration: 2000,
                verticalPosition: 'bottom',
                panelClass: 'notify-successful'
            });
                this.onNoClick();
              }
            });
          }else{
            this.itemService.atualizarItem(this.itemFormulario).subscribe(resultado => {
              console.log(resultado)
              if(resultado){
                this._snackBar.open("Item atualizado com sucesso!", "Fechar", {
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
