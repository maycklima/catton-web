import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  item: any;

  constructor(protected itemService: ItemService) { }

  ngOnInit() {
    this.listarItensPorIdLoja();
  }

  listarItensPorIdLoja(){
    this.itemService.listarItensPorIdLoja(1).subscribe(resposta => {
      console.log(resposta);
      this.item = resposta;
  });
  }

}
