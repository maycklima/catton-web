import { ItemService } from 'src/app/shared/services/item.service';
import { LojaService } from '../../../shared/services/loja.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ItemIncluirEditarComponent } from '../../item/item-incluir-editar/item-incluir-editar.component';

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
    public dialog: MatDialog) 
    { }

  loja:any;
  itens:any;
  ELEMENT_DATA: any[] = [];
  dataSource: any[] = [];
  animal:any;
  
  displayedColumns: string[] = ['descricao', 'quantidade', 'valor', 'acoes'];
    
  

  ngOnInit(): void {
    this.buscarLoja();
  }

  buscarLoja(){
    this.loja = this.lojaService.dadosRotaLoja;
    console.log(this.loja);
   
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
}