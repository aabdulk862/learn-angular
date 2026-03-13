import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * ChildComponent demonstrates Input and Output decorators for parent-child communication.
 * 
 * Input: Receives data from parent component
 * Output: Emits events to parent component using EventEmitter
 * 
 * Validates: Requirements 2.5
 */
@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <div style="border: 2px solid #4CAF50; padding: 15px; margin: 10px 0; border-radius: 5px;">
      <h4>Child Component</h4>
      <p><strong>Message from parent:</strong> {{ message }}</p>
      <button 
        (click)="sendToParent()" 
        style="padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Send Message to Parent
      </button>
    </div>
  `,
  styles: [`
    button:hover {
      background-color: #45a049;
    }
  `]
})
export class ChildComponent {
  // Input: Receives data from parent component
  @Input() message: string = '';
  
  // Output: EventEmitter to send data to parent component
  @Output() notify = new EventEmitter<string>();
  
  /**
   * Emits an event to the parent component when button is clicked
   */
  sendToParent(): void {
    this.notify.emit('Hello from child component!');
  }
}
