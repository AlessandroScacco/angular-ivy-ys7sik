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
