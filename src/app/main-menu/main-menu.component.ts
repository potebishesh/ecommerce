import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

declare const window:any;

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = '../../assets/js/sidebareffect.js'; // Replace with your script URL
    //this.renderer.appendChild(document.body, script);
  }

 
}



