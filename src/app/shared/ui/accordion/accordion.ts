import { Component, input, output } from '@angular/core';
import { IAccordion } from './accordion.config';

@Component({
  imports: [],
  selector: 'app-accordion',
  styleUrl: './accordion.scss',
  templateUrl: './accordion.html',
})
export class Accordion {
  public data = input.required<IAccordion>();

  public toggleEvent = output();

  public onToggle($event: any) {
    this.toggleEvent.emit($event);
  }
}
