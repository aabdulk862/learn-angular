import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'bindings',
    loadComponent: () => import('./features/bindings/bindings-demo.component').then(m => m.BindingsDemoComponent)
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./features/control-flow/control-flow-demo.component').then(m => m.ControlFlowDemoComponent)
  },
  {
    path: 'directives',
    loadComponent: () => import('./features/directives/directives-demo.component').then(m => m.DirectivesDemoComponent)
  },
  {
    path: 'components',
    loadComponent: () => import('./features/components/components-demo.component').then(m => m.ComponentsDemoComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services-demo.component').then(m => m.ServicesDemoComponent)
  },
  {
    path: 'forms/reactive',
    loadComponent: () => import('./features/forms/reactive-form.component').then(m => m.ReactiveFormComponent)
  },
  {
    path: 'forms/template',
    loadComponent: () => import('./features/forms/template-form.component').then(m => m.TemplateFormComponent)
  },
  {
    path: 'http',
    loadComponent: () => import('./features/http/http-demo.component').then(m => m.HttpDemoComponent)
  },
  {
    path: 'signals',
    loadComponent: () => import('./features/signals/signals-demo.component').then(m => m.SignalsDemoComponent)
  },
  {
    path: 'module-based',
    loadChildren: () => import('./features/module-based/module-demo.module').then(m => m.ModuleDemoModule)
  }
];
