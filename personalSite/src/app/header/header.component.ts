import { Component, OnInit, Input } from '@angular/core';
import { AnimationsComponent } from '../animations/animations.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name;
  userName: string;
  showName = false;
  animations: AnimationsComponent;
  constructor() { }

  ngOnInit() {}

}
