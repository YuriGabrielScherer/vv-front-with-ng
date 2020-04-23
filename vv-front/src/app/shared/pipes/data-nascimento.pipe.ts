import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataNascimento'
})

export class DataNascimentoPipe implements PipeTransform {
  transform(value: string): string {
    // Transformar para o formato dd-mm-yyyy, ja que o front trabalha assim
    const ano = value.slice(0, 4);
    const mes = value.slice(5, 7);
    const dia = value.slice(8, 10);
    const dataN = `${dia}/${mes}/${ano}`;
    return dataN;
  }
}
