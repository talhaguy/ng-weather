import { Pipe, PipeTransform } from '@angular/core';

/*
 * This pipe is usefule in the case where you want to explicitly check for
 * the existence of a value and not just check for truthy (b/c a numeric
 * value of 0 is falsey).
 */
@Pipe({
  name: 'isUndefined',
})
export class IsUndefinedPipe implements PipeTransform {
  transform(value: any) {
    return typeof value === 'undefined';
  }
}
