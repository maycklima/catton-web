import { ItemService } from 'src/app/services/item.service';
import { LojaService } from './../../../services/loja.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja-detalhe',
  templateUrl: './loja-detalhe.component.html',
  styleUrls: ['./loja-detalhe.component.css']
})
export class LojaDetalheComponent implements OnInit {

  constructor(
    private lojaService: LojaService,
    private itemService: ItemService) 
    { }

  loja:any;
  itens:any;
  ELEMENT_DATA: any[] = [];
  dataSource: any[] = [];
  
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

}
