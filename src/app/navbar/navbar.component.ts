import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  projectnav(){
    this.router.navigate(['/project']);
  }
  tasknav(){
    this.router.navigate(['/tasks']);
  }
  milestonenav(){
    this.router.navigate(['/milestone']);
  }
}
