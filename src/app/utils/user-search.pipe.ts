import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'userFilter'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    args = args.toLocaleLowerCase();
    return value.filter((val:any) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args)) || (val.phone.toLocaleLowerCase().includes(args)) || (val.email.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }
}