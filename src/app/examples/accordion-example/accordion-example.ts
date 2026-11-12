import { Component, signal } from '@angular/core';
import { Accordion } from '../../shared/ui';
import { IAccordion } from '../../shared/ui/accordion/accordion.config';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
const LARGE_TEXT = new Array(50).fill(LOREM).join('');

const ACCORDION_ITEMS: IAccordion[] = [
  {
    title: 'Section 1',
    text: LARGE_TEXT,
  },
  {
    title: 'Section 2',
    text: LARGE_TEXT,
  },
];

@Component({
  imports: [Accordion],
  selector: 'app-accordion-example',
  styleUrl: './accordion-example.scss',
  templateUrl: './accordion-example.html',
})
export class AccordionExample {
  public accordionItems = signal<IAccordion[]>([...ACCORDION_ITEMS]);

  public onChange(val: any) {
    console.log('on toggle, ', val);
  }
}
