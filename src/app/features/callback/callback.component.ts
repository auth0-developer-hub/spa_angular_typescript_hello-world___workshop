import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { SharedModule } from "@app/shared";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  imports: [
    SharedModule,
    AsyncPipe,
    NgIf
  ],
  standalone: true
})
export default class CallbackComponent {
  error$ = this.auth.error$;

  constructor(private auth: AuthService) {
  }
}
