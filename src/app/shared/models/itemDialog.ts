import { Item } from './item.model';
import { Loja } from './loja.model';
export interface ItemDialogData {
    item: Item,
    loja: Loja;
    categoria: any;
    resposta: true;
  }