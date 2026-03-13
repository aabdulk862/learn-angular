import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

/**
 * LifecycleComponent demonstrates Angular lifecycle hooks.
 * 
 * Lifecycle hooks demonstrated:
 * - ngOnInit: Called once after component initialization
 * - ngOnChanges: Called when Input properties change
 * - ngOnDestroy: Called just before component is destroyed
 * 
 * Check the browser console to see lifecycle hook logs.
 * 
 * Validates: Requirements 2.4
 */
@Component({
  selector: 'app-lifecycle',
  standalone: true,
  template: `
    <div style="border: 2px solid #2196F3; padding: 15px; margin: 10px 0; border-radius: 5px;">
      <h4>Lifecycle Component</h4>
      <p><strong>Current data:</strong> {{ data }}</p>
      <p style="color: #666; font-size: 14px;">
        <em>Open browser console (F12) to see lifecycle hook logs</em>
      </p>
      <div style="background-color: #f0f0f0; padding: 10px; border-radius: 4px; margin-top: 10px;">
        <strong>Lifecycle hooks called:</strong>
        <ul style="margin: 5px 0;">
          <li>ngOnInit: {{ initCalled ? '✓' : '✗' }}</li>
          <li>ngOnChanges: {{ changesCalled ? '✓' : '✗' }} ({{ changesCount }} times)</li>
          <li>ngOnDestroy: Will be called when component is removed</li>
        </ul>
      </div>
    </div>
  `
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  // Input property to trigger ngOnChanges
  @Input() data: string = '';
  
  // Track which lifecycle hooks have been called
  initCalled = false;
  changesCalled = false;
  changesCount = 0;
  
  /**
   * ngOnInit: Called once after the component is initialized
   * Use this for initialization logic, API calls, etc.
   */
  ngOnInit(): void {
    console.log('🔵 ngOnInit: Component initialized');
    this.initCalled = true;
  }
  
  /**
   * ngOnChanges: Called whenever Input properties change
   * Receives a SimpleChanges object with previous and current values
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('🟡 ngOnChanges: Input properties changed', changes);
    this.changesCalled = true;
    this.changesCount++;
    
    if (changes['data']) {
      console.log('  - data changed from:', changes['data'].previousValue, 'to:', changes['data'].currentValue);
    }
  }
  
  /**
   * ngOnDestroy: Called just before the component is destroyed
   * Use this for cleanup: unsubscribe from observables, detach event handlers, etc.
   */
  ngOnDestroy(): void {
    console.log('🔴 ngOnDestroy: Component is being destroyed');
  }
}
