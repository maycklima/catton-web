import { LojaService } from 'src/app/services/loja.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lojas',
  templateUrl: './area-lojas.component.html',
  styleUrls: ['./area-lojas.component.css']
})
export class AreaLojasComponent implements OnInit {

  constructor(private router: Router, private lojaService: LojaService) { }
  
  usuario: any | null = '';
  lojas:any;

  ngOnInit(): void {
    this.inicializar(); 
  }

  inicializar(){
    this.usuario = this.lojaService.dadosRotaUsuario;
    this.buscarLojas(this.usuario);
  }

  buscarLojas(usuario:any){
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
}
