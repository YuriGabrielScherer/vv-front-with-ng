import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mascaraTelefone'
})

export class MascaraTelefonePipe implements PipeTransform{
    
    transform(telefone: string): string{
        // Inserindo a mascara do telefone
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        return telefone;
    }

}
