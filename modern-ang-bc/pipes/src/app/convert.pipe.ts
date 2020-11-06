import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(miles: number, targetUnits: string): unknown {
    if (!miles) {
      return '';
    }
    const miles2km = 1.60934;
    let factor: number;
    switch (targetUnits) {
      case 'km':
        factor = miles2km;
        break;
      case 'm':
        factor = miles2km * 1000;
        break;
      case 'cm':
        factor = miles2km * 1000 * 100;
        break;
      default:
        throw new Error('Target unit not supported');
    }
    return miles * factor;
  }

}
