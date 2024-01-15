import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEuroSymbol'
})
export class AddEuroSymbolPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value + ' €';
  }

}
