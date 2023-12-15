import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isLoggedIn:boolean = false;
isDarkMode:boolean = false;

toggleLogin(){
  this.isLoggedIn =!this.isLoggedIn;

}
toggleMode(){
  this.isDarkMode =!this.isDarkMode;
}
constructor(){}

}
