import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input()opened=false;
  @Output() menuToggle:EventEmitter<boolean>=new EventEmitter();
  ngOnInit(): void {
  }
  toggle(){
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened);
  }
 

}
