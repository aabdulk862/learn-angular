import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * UnlessDirective - Custom structural directive
 * 
 * Demonstrates:
 * - TemplateRef for accessing the template content
 * - ViewContainerRef for manipulating the view
 * - Opposite logic of *ngIf (shows content when condition is false)
 * 
 * Usage: <p *appUnless="condition">Content shown when condition is false</p>
 * 
 * **Validates: Requirements 5.4, 5.5**
 */
@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  /**
   * Setter for the appUnless input
   * Implements opposite logic of *ngIf:
   * - Shows content when condition is FALSE
   * - Hides content when condition is TRUE
   */
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      // Condition is false, create the view
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      // Condition is true, clear the view
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
