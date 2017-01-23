import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  text = "Ein neuer String";
  newNumber = 100;
  attacheClass = false;

  constructor() {
    setTimeout(() => {
      this.newNumber += 200;
      this.attacheClass = true;
    }, 3000);
  }

  ngOnInit() {
  }

onClick(event: Event){
    console.log(event);
  }
}
