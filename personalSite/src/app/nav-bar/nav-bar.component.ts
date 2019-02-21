import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() name;
  @Input() topOfPage;
  navbarOpen = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
