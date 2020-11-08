import { Component, OnInit } from '@angular/core';
import { menuList } from './menu-list';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sideMenu = menuList;
  collapse = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

}
