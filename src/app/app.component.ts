import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpened=false;

  setMenuState(state: boolean) {
    this.menuOpened = state;

  }

  closeMenu() {
    this.menuOpened=false;
  }
}


