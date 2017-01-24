import { Component, OnInit, Input, ViewChild, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  @ContentChild('caption') caption: ElementRef;
  @ViewChild('input') input: ElementRef;
  @Input() name: string;

  constructor() {
    setTimeout(() => {
      this.caption.nativeElement.innerHTML = "Overridden Caption";
      this.input.nativeElement.value = "Overridden Text";
    }, 3000);

  }

  ngOnInit() {
  }



}
