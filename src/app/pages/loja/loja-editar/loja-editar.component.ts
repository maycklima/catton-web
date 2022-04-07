import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Loja } from 'src/app/shared/models/loja.model';
import { FotoService } from 'src/app/shared/services/foto.service';
import { LojaService } from 'src/app/shared/services/loja.service';

@Component({
  selector: 'app-loja-editar',
  templateUrl: './loja-editar.component.html',
  styleUrls: ['./loja-editar.component.css']
})
export class LojaEditarComponent implements OnInit {

  constructor(
    private router: Router,
    private lojaService: LojaService,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder ,
    public dialog: MatDialog,
    private fotoService: FotoService) 
    { }

  loja!: Loja;
  itens:any;
  ELEMENT_DATA: any[] = [];
  dataSource: any[] = [];
  animal:any;
  formulario!: FormGroup;
  editando: boolean = false;
  lojaFormulario!: Loja;
  formData = new FormData();
    
  

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
      url: [],
      dhInclusao: [],
      dhExclusao:[],
      dhUltimaAlteracao:[],
      usuarioProprietario:[]      
    });
  }

  preencherFormulario(loja: Loja){
    this.formulario.patchValue(loja);   
  }

  buscarLoja(){
    this.loja = this.lojaService.dadosRotaLoja;
    this.preencherFormulario(this.loja);
  }

  cancelar(): void {
      this.lojaService.dadosRotaLoja = this.loja;
      this.router.navigate(['loja-detalhe']);
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
    this.formulario.get('url')?.enable();

    this.editando = true;
  }

  visualizarLoja(): void {
    const url = this.router.serializeUrl(this.router.createUrlTree(['loja', this.loja.url]));  
    window.open(url, '_blank');
  }


  inputFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      this.formData.append('foto', foto);
    }
  }

  submit(){
    console.log(this.loja)
    this.lojaFormulario = this.formulario.getRawValue();
      this.lojaService.atualizarLoja(this.lojaFormulario).subscribe(resultado => {
        console.log(resultado)
        if(resultado){
          this.loja = resultado;
          this.fotoService.enviarFoto(this.formData, this.loja.id).subscribe(result => {
          console.log(result)
      });

          this._snackBar.open("Loja atualizada com sucesso!", "Fechar", {
            duration: 2000,
            verticalPosition: 'bottom',
            panelClass: 'notify-successful'
        });
        this.cancelar();
        }
      });
  }
}
