import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'portRemove',
    standalone: false
})
export class PortRemovePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.split(':')[0];
  }

}
