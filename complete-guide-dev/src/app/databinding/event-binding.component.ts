import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Output() clickedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.clickedEvent.emit("Neuer Text");
  }

}
