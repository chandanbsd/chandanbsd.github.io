import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientApp';
  public theme = 'nord';

  public switchTheme() {
    this.theme = (this.theme == 'nord') ? 'sunset' : 'nord';
    console.log(this.theme)
    document.getElementsByTagName("html")[0]?.setAttribute('data-theme', this.theme);
  }
}
