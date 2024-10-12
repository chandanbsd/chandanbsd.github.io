import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'ClientApp';
  public theme = 'nord';

  public switchTheme() {
    this.theme = (this.theme == 'nord') ? 'sunset' : 'nord';
    console.log(this.theme)
    document.getElementsByTagName("html")[0]?.setAttribute('data-theme', this.theme);
  }
}
