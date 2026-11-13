import {
  Component,
  computed,
  ElementRef,
  input,
  model,
  viewChildren,
} from '@angular/core';
import { ITabItem } from './tabs.config';

@Component({
  imports: [],
  selector: 'app-tabs',
  host: { role: 'tablist', '(keydown)': 'onKeydown($event)' },
  styleUrl: './tabs.scss',
  templateUrl: './tabs.html',
})
export class Tabs {
  public tabs = input.required<readonly ITabItem[]>();
  readonly activeKey = model<string>();

  protected select(tab: ITabItem) {
    if (!tab.disabled) this.activeKey.set(tab.key);
  }

  private readonly tabButtons =
    viewChildren<ElementRef<HTMLButtonElement>>('tabButton');

  // Tab that gets tabindex="0": the active one, or the first enabled tab if none is active,
  // so keyboard users can always Tab into the tablist.
  protected readonly focusableKey = computed(
    () => this.activeKey() ?? this.tabs().find((tab) => !tab.disabled)?.key,
  );

  protected onKeydown(event: KeyboardEvent) {
    const enabled = this.tabs().filter((tab) => !tab.disabled);
    if (!enabled.length) return;

    const current = enabled.findIndex((tab) => tab.key === this.activeKey());
    let next: number;

    switch (event.key) {
      case 'ArrowRight':
        next = (current + 1) % enabled.length;
        break;
      case 'ArrowLeft':
        next = (current - 1 + enabled.length) % enabled.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = enabled.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const tab = enabled[next];
    this.select(tab);
    this.tabButtons()[this.tabs().indexOf(tab)]?.nativeElement.focus();
  }
}
