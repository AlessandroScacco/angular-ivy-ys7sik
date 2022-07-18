import { Component } from "@angular/core";
import { TranslateUtilService } from "./services/translate-util/translate-util.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(translateService: TranslateUtilService) {
    translateService.initializeTranslate();
  }

  ngOnInit(): void {}
}
