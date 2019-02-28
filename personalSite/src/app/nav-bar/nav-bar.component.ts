import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() name;
  @Input() topOfPage;
  navbarOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }
  navigateTo() {
    this.router.navigate(['/about-me']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
