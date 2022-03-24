import { Usuario } from 'src/app/shared/models/usuario.model';
import { Loja } from './loja.model';
export interface LojaDialogData {
    loja: Loja,
    usuario: Usuario;
  }