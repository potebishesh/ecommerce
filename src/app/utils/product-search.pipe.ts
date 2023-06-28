import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'productFilter'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    args = args.toLocaleLowerCase();
    return value.filter((val:any) => {
      let rVal = (val.productName.toLocaleLowerCase().includes(args)) || (val.category.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }
}