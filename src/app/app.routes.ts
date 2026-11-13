import { Route, Routes } from '@angular/router';

/**
 * One entry per showcased component. The sidebar is generated from this list,
 * so adding a component here is all that's needed to make it navigable.
 */
export const componentRoutes = [
  {
    path: 'counter',
    title: 'Counter',
    loadComponent: () =>
      import('./shared/ui/counter/counter').then((m) => m.Counter),
  },
  {
    path: 'accordions',
    title: 'Accordions',
    loadComponent: () =>
      import('./examples/accordion-example/accordion-example').then(
        (m) => m.AccordionExample,
      ),
  },
  {
    path: 'start-rating',
    title: 'Star Ratings',
    loadComponent: () =>
      import('./examples/index').then((m) => m.StarRatingExample),
  },
  {
    path: 'tabs',
    title: 'Tabs',
    loadComponent: () => import('./examples/index').then((m) => m.TabsExample),
  },
  {
    path: 'accordions',
    title: 'Accordions',
    loadComponent: () =>
      import('./examples/accordion-example/accordion-example').then((m) => m.AccordionExample),
  },
  {
    path: 'accordions',
    title: 'Accordions',
    loadComponent: () =>
      import('./examples/accordion-example/accordion-example').then((m) => m.AccordionExample),
  },
  {
    path: 'start-rating',
    title: 'Star Ratings',
    loadComponent: () => import('./examples/index').then((m) => m.StarRatingExample),
  },
] satisfies (Route & { path: string; title: string })[];

export const routes: Routes = [
  { path: '', redirectTo: componentRoutes[0].path, pathMatch: 'full' },
  ...componentRoutes,
  { path: '**', redirectTo: '' },
];
