import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  focus: Boolean = false;
  @ViewChild('inp') inp:ElementRef;

  constructor() { }
  
  setFocus(){
    this.inp.nativeElement.focus();
  }
  ngOnInit() {
  }

}
