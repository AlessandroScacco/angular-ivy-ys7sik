import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserApiService } from "../../services/api/user-api.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private userApiService: UserApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idByUrl: string = this.route.snapshot.params["id"];
    if (idByUrl) {
      this.userByidService(idByUrl);
    }
  }

  private userByidService(id: string): void {
    this.userApiService.getUserById(id).subscribe((user: User) => {
      this.user = user;
    });
  }
}
