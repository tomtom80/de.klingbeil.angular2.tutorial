import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(event: Event){
    console.log(event);
  }

}
