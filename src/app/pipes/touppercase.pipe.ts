import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'customuupercase'
})

export class TouppercasePipe implements PipeTransform {
  transform(value: any) {
    return value.toUpperCase();
  }
}
