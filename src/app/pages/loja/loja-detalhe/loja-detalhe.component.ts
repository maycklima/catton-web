import { ItemService } from 'src/app/shared/services/item.service';
import { LojaService } from '../../../shared/services/loja.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ItemIncluirEditarComponent } from '../../item/item-incluir-editar/item-incluir-editar.component';
import { LojaIncluirEditarComponent } from '../loja-incluir-editar/loja-incluir-editar.component';
import { Loja } from 'src/app/shared/models/loja.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loja-detalhe',
  templateUrl: './loja-detalhe.component.html',
  styleUrls: ['./loja-detalhe.component.css']
})
export class LojaDetalheComponent implements OnInit {

  constructor(
    private lojaService: LojaService,
    private itemService: ItemService,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder ,
    public dialog: MatDialog) 
    { }

  loja!: Loja;
  itens:any;
  ELEMENT_DATA: any[] = [];
  dataSource: any[] = [];
  animal:any;
  formulario!: FormGroup;
  editando: boolean = false;
  lojaFormulario!: Loja;
  
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor', 'acoes'];
    
  

  ngOnInit(): void {
    this.inicializarFormulario();
    this.buscarLoja();
  }

  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      id: [],
      nome: [],
      descricao: [],
      telefone: [],
      celular: [],
      whatsapp: [],
      whatsappLink: [],
      instagramLink: [],
      email: [],
      dhInclusao: [],
      dhExclusao:[],
      dhUltimaAlteracao:[],
      usuarioProprietario:[]      
    });
  }

  preencherFormulario(loja: Loja){
    this.formulario.patchValue(loja);
    this.formulario.get('nome')?.disable();
    this.formulario.get('descricao')?.disable();
    this.formulario.get('telefone')?.disable();
    this.formulario.get('celular')?.disable();
    this.formulario.get('whatsapp')?.disable();
    this.formulario.get('whatsappLink')?.disable();
    this.formulario.get('instagramLink')?.disable();
    this.formulario.get('email')?.disable();
  }

  buscarLoja(){
    this.loja = this.lojaService.dadosRotaLoja;
    this.preencherFormulario(this.loja);
    this.listarItensPorIdLoja(this.loja.id);
  }

  listarItensPorIdLoja(idLoja:number){
    this.itemService.listarItensPorIdLoja(idLoja).subscribe(resposta => {
      console.log(resposta);
      this.itens = resposta;
      this.ELEMENT_DATA = this.itens;
      this.dataSource = this.ELEMENT_DATA;
      console.log('this.dataSource');
      console.log(this.dataSource);
  });
  }

  removerItemPorId(idItem: number){
    this.itemService.removerItemPorId(idItem).subscribe(resposta => {
        this._snackBar.open("Item removido", "Fechar");
        this.listarItensPorIdLoja(this.loja.id);
    });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: {titulo: 'Confirmação', mensagem: 'Deseja realmente excluir este item?', resposta: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.removerItemPorId(id);      }
    });
  }

  openEditDialog(item: any): void {
    const dialogRef = this.dialog.open(ItemIncluirEditarComponent, {
      width: '750px',
      data: {item: item, loja: this.loja,  resposta: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
        this.buscarLoja();
    });
  }

  desativarFormulario(): void {
    this.formulario.get('nome')?.disable();
    this.formulario.get('descricao')?.disable();
    this.formulario.get('telefone')?.disable();
    this.formulario.get('celular')?.disable();
    this.formulario.get('whatsapp')?.disable();
    this.formulario.get('whatsappLink')?.disable();
    this.formulario.get('instagramLink')?.disable();
    this.formulario.get('email')?.disable();
    this.editando = false;
  }

  ativarFormulario(): void {
    this.formulario.get('nome')?.enable();
    this.formulario.get('descricao')?.enable();
    this.formulario.get('telefone')?.enable();
    this.formulario.get('celular')?.enable();
    this.formulario.get('whatsapp')?.enable();
    this.formulario.get('whatsappLink')?.enable();
    this.formulario.get('instagramLink')?.enable();
    this.formulario.get('email')?.enable();
    this.editando = true;
  }

  submit(){
    console.log(this.loja)
    this.lojaFormulario = this.formulario.getRawValue();
      this.lojaService.atualizarLoja(this.lojaFormulario).subscribe(resultado => {
        console.log(resultado)
        if(resultado){
          this.desativarFormulario();
        }
      });
  }
}