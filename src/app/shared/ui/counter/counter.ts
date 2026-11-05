import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.scss',
  templateUrl: './counter.html',
})
export class Counter {
  public count = signal(0);

  public onDecrement() {
    this.count.update((prev) => prev - 1);
  }

  public onIncrement() {
    this.count.update((prev) => prev + 1);
    // this.count.set(this.count() + 1);
  }
}
