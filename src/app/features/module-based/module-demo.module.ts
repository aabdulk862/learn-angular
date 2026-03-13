import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModuleDemoComponent } from './module-demo.component';
import { MODULE_DEMO_ROUTES } from './module-demo.routes';

/**
 * ModuleDemoModule - Traditional NgModule
 * 
 * This module demonstrates the traditional Angular module pattern.
 * It organizes related components, directives, and pipes together.
 * 
 * @NgModule decorator properties:
 * - declarations: Components, directives, and pipes that belong to this module
 * - imports: Other modules whose exported classes are needed by component templates
 * - exports: Components, directives, and pipes that should be available to other modules
 * - providers: Services that should be available at the module level (not used here)
 */
@NgModule({
  // Declare components that belong to this module
  declarations: [
    ModuleDemoComponent
  ],
  
  // Import other modules that this module depends on
  imports: [
    CommonModule,  // Provides common directives like ngIf, ngFor, etc.
    RouterModule.forChild(MODULE_DEMO_ROUTES)  // Configure routes for this module
  ],
  
  // Export components to make them available to other modules
  exports: [
    ModuleDemoComponent
  ]
})
export class ModuleDemoModule { }
