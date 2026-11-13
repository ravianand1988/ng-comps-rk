import { Component, signal } from '@angular/core';
import { ITabItem, Tabs } from '../../shared/ui';

const TABS: Readonly<ITabItem[]> = Object.freeze([
  {
    key: 'angular',
    title: 'Angular',
  },
  {
    key: 'react',
    title: 'React',
  },
  {
    key: 'vue',
    title: 'Vue.js',
  },
  {
    key: 'flutter',
    title: 'Flutter',
    disabled: true,
  },
]);

@Component({
  imports: [Tabs],
  selector: 'app-tabs-example',
  styleUrl: './tabs-example.scss',
  templateUrl: './tabs-example.html',
})
export class TabsExample {
  public tabs = [...TABS];

  public activeTab = signal<string>('react');
}
