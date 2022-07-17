import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Pipe({
  name: "userFind",
})
export class UserFindPipe implements PipeTransform {
  transform(id: number, users: Array<User>): User {
    return users.find((currentUser) => id === currentUser.id);
  }
}


@Pipe({
  name: "userInitialName",
})
export class UserInitialNamePipe implements PipeTransform {
  transform(name: string): string {
    const splitNameSurname: Array<string> = name.split(' ');
    let initialiNameReturn: string = '';
    if(splitNameSurname.length>0) {
      initialiNameReturn = splitNameSurname[0][0];
    }
    if(splitNameSurname.length>1) {
      initialiNameReturn += splitNameSurname[1][0];
    }    
    return initialiNameReturn;
  }
}
