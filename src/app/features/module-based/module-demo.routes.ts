import { Routes } from '@angular/router';
import { ModuleDemoComponent } from './module-demo.component';

/**
 * Routes for the module-based demo
 * This demonstrates how to integrate a traditional NgModule component
 * into a standalone routing configuration
 */
export const MODULE_DEMO_ROUTES: Routes = [
  {
    path: '',
    component: ModuleDemoComponent
  }
];
