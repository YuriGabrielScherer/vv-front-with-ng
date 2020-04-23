import { TipoOrdenacao } from './TipoOrdenacao.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginacaoResolverService {
  constructor() { }

  paginacaoResolver(tipoOrdenacao: TipoOrdenacao, nrPagina: number, registrosPorPagina?: number, campoOrdenacao?: string) {
    const paginacao = {
      pagina: nrPagina,
      numeroRegistrosPagina: registrosPorPagina ? registrosPorPagina : 10,
      listaOrdenacao: [{
        campo: campoOrdenacao ? campoOrdenacao : 'id',
        ordenacao: tipoOrdenacao
      }]
    };
    return paginacao;
  }

}
