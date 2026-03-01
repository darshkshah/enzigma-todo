import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReplacePipe',
})
export class TextReplacePipe implements PipeTransform {

  transform(value: string, charToReplace:string, replacementChar: string = ' '): string {
    return value.split(charToReplace).join(replacementChar);
  }

}
