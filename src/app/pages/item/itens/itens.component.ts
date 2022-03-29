import { LojaService } from 'src/app/shared/services/loja.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  item: any;
  url: any;

  constructor(
    private router: Router,
    private routerActivated: ActivatedRoute,
    protected itemService: ItemService,
    private lojaService: LojaService) { }

  ngOnInit() {
    this.url = this.routerActivated.snapshot.paramMap.get('url');
    this.buscarLojaPorUrl(this.url);
    console.log(this.url);
  }

  buscarLojaPorUrl(url: string){
    this.lojaService.listarLojaPorUrl(url).subscribe(resposta => {
      console.log(resposta)
      if(resposta != null){
        console.log('loja encontrada');
        this.listarItensPorIdLoja(this.url);
      }else{
        console.log('loja n encontrada');
        this.router.navigate(['login']);
        console.log(resposta);
      }
  });
  }

  listarItensPorIdLoja(url: string){
    this.itemService.listarItensPorUrlLoja(url).subscribe(resposta => {
      console.log(resposta);
      this.item = resposta;
  });
  }

}
