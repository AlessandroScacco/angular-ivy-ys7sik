import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../interfaces/user.interface";
import { UserApiService } from "../../services/api/user-api.service";
import { LoggerService } from "../../services/logger/logger.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private loggerService: LoggerService,
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
    this.userApiService.getUserById(id).subscribe({
      next: (user: User) => {
        this.user = user;
      },
      error: (error) => {
        this.loggerService.warn("Error during retrieve UserById", error);
      },
    });
  }
}
