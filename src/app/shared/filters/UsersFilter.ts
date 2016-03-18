import {Pipe, PipeTransform} from 'angular2/core';

import {User} from '../models/User';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilter implements PipeTransform {
  transform(value: User[], args?: any[]): any {
    return value.filter(item => item.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }
}
