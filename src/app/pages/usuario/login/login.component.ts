import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LojaService } from 'src/app/services/loja.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class LoginComponent implements OnInit {
  
  formulario!: FormGroup;
  usuario: any;
  lojas:any;
  usuarioFormulario: any;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder, 
    private usuarioService: UsuarioService,
    private lojaService: LojaService,
    private _snackBar: MatSnackBar)
     {}

  ngOnInit() {
    this.formulario = this._formBuilder.group({
      usuario: [''],
    });
  }

  entrar(){
    console.log("Fazendo login...")
    this.usuarioFormulario = this.formulario.getRawValue();
      this.usuarioService.verificarLogin(this.usuarioFormulario).subscribe(usuario => {
        this.usuario = usuario;
        if(usuario){
          this.lojaService.dadosRotaLoja = usuario;
          this.router.navigate(['lojas']);
        }else{
          this._snackBar.open("Usuário não encontrado", "Fechar");
        }
      });
    }
}
