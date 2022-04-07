import { LojaService } from 'src/app/shared/services/loja.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { LojaIncluirEditarComponent } from '../loja-incluir-modal/loja-incluir-modal.component';
import { MatDialogComponent } from 'src/app/shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lojas',
  templateUrl: './area-lojas.component.html',
  styleUrls: ['./area-lojas.component.css']
})
export class AreaLojasComponent implements OnInit {

  constructor(
     private router: Router,
     private lojaService: LojaService,
     private _snackBar: MatSnackBar,
     public dialog: MatDialog
    ) { }
  
  usuario: any | null = '';
  lojas:any;

  ngOnInit(): void {
    this.inicializar(); 
  }

  inicializar(){
    this.usuario = this.lojaService.dadosRotaUsuario;
    this.buscarLojas(this.usuario);
  }

  buscarLojas(usuario: Usuario){
    if(usuario != null){
      this.lojaService.buscarLojaPorUsuario(usuario).subscribe(lojas => {
        this.lojas = lojas;
        console.log(this.lojas);      
      });
    }else{
      this.router.navigate(['login']);
    }
  }

  detalharLoja(loja:any){
    console.log(loja)
    this.lojaService.dadosRotaLoja = loja;
    this.router.navigate(['loja-detalhe']);
  }

  visualizarLoja(lojaUrl: string): void {
    const url = this.router.serializeUrl(this.router.createUrlTree(['loja', lojaUrl]));  
    window.open(url, '_blank');
  }

  editarLoja(loja: any): void {
    this.lojaService.dadosRotaLoja = loja;
    this.router.navigate(['loja-editar']);
  }

  openEditDialog(loja: any): void {
    const dialogRef = this.dialog.open(LojaIncluirEditarComponent, {
      width: '700px',
      height: '600px',
      data: {loja: loja, usuario: this.usuario,  resposta: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
        this.inicializar();
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
      this.removerItemPorId(id);      
    }
    });
  }

  removerItemPorId(idLoja: number){
    this.lojaService.removerLojaPorId(idLoja).subscribe(resposta => {
        this._snackBar.open("Loja removida", "Fechar", {
          duration: 2000,
          verticalPosition: 'bottom',
          panelClass: 'notify-successfull'
      });
        this.inicializar();
    });
  }
}
