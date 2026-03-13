import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "./child.component";
import { LifecycleComponent } from "./lifecycle.component";

/**
 * ComponentsDemoComponent demonstrates component communication patterns in Angular 18.
 *
 * Features demonstrated:
 * - Parent-child communication using Input and Output decorators
 * - Component lifecycle hooks (ngOnInit, ngOnChanges, ngOnDestroy)
 * - Dynamic component rendering with control flow
 *
 * Validates: Requirements 2.3, 2.5, 2.4
 */
@Component({
  selector: "app-components-demo",
  standalone: true,
  imports: [FormsModule, ChildComponent, LifecycleComponent],
  template: `
    <div class="demo-container">
      <h2>Component Communication & Lifecycle</h2>
      <p style="color: #666; margin-bottom: 30px;">
        This demo shows how components communicate with each other and respond
        to lifecycle events.
      </p>

      <!-- Parent-Child Communication Section -->
      <section style="margin-bottom: 40px;">
        <h3 style="color: #4CAF50;">
          Parent-Child Communication (&#64;Input / &#64;Output)
        </h3>
        <p style="color: #666; font-size: 14px;">
          The parent component passes data to the child via &#64;Input, and
          receives events from the child via &#64;Output.
        </p>

        <div
          style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;"
        >
          <h4>Parent Component</h4>
          <div style="margin: 10px 0;">
            <label style="display: block; margin-bottom: 5px;">
              <strong>Message to send to child:</strong>
            </label>
            <input
              type="text"
              [(ngModel)]="parentMessage"
              placeholder="Type a message for the child"
              style="padding: 8px; width: 300px; border: 1px solid #ddd; border-radius: 4px;"
            />
          </div>
          <p>
            <strong>Message received from child:</strong>
            <span style="color: #4CAF50;">{{
              childMessage || "(waiting for child to send message)"
            }}</span>
          </p>
        </div>

        <!-- Child Component with &#64;Input and &#64;Output -->
        <app-child
          [message]="parentMessage"
          (notify)="handleChildEvent($event)"
        >
        </app-child>
      </section>

      <!-- Lifecycle Hooks Section -->
      <section>
        <h3 style="color: #2196F3;">Component Lifecycle Hooks</h3>
        <p style="color: #666; font-size: 14px;">
          Angular components have lifecycle hooks that let you tap into key
          moments in a component's existence.
        </p>

        <div
          style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;"
        >
          <h4>Lifecycle Controls</h4>
          <div style="margin: 10px 0;">
            <button
              (click)="toggleLifecycle()"
              style="padding: 8px 16px; background-color: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;"
            >
              {{ showLifecycle ? "Hide" : "Show" }} Lifecycle Component
            </button>
            <span style="color: #666;"> (Toggle to trigger ngOnDestroy) </span>
          </div>

          @if (showLifecycle) {
            <div style="margin: 10px 0;">
              <label style="display: block; margin-bottom: 5px;">
                <strong>Change data to trigger ngOnChanges:</strong>
              </label>
              <input
                type="text"
                [(ngModel)]="lifecycleData"
                placeholder="Type to trigger ngOnChanges"
                style="padding: 8px; width: 300px; border: 1px solid #ddd; border-radius: 4px;"
              />
            </div>
          }
        </div>

        <!-- Lifecycle Component with lifecycle hooks -->
        @if (showLifecycle) {
          <app-lifecycle [data]="lifecycleData"></app-lifecycle>
        } @else {
          <div
            style="border: 2px dashed #ccc; padding: 15px; margin: 10px 0; border-radius: 5px; text-align: center; color: #999;"
          >
            Lifecycle component is hidden. Click "Show Lifecycle Component" to
            see it.
          </div>
        }
      </section>

      <!-- Explanation Section -->
      <section
        style="margin-top: 40px; padding: 20px; background-color: #fff3cd; border-radius: 5px;"
      >
        <h4>💡 Key Concepts</h4>
        <ul style="line-height: 1.8;">
          <li>
            <strong>&#64;Input:</strong> Allows parent components to pass data
            to child components
          </li>
          <li>
            <strong>&#64;Output:</strong> Allows child components to emit events
            to parent components
          </li>
          <li>
            <strong>ngOnInit:</strong> Called once after component
            initialization - ideal for setup logic
          </li>
          <li>
            <strong>ngOnChanges:</strong> Called when &#64;Input properties
            change - receives previous and current values
          </li>
          <li>
            <strong>ngOnDestroy:</strong> Called before component is destroyed -
            ideal for cleanup
          </li>
        </ul>
      </section>
    </div>
  `,
  styles: [
    `
      button:hover {
        opacity: 0.9;
      }

      input:focus {
        outline: none;
        border-color: #4caf50;
      }
    `,
  ],
})
export class ComponentsDemoComponent {
  // Parent-child communication properties
  parentMessage: string = "Hello from parent!";
  childMessage: string = "";

  // Lifecycle component properties
  showLifecycle: boolean = true;
  lifecycleData: string = "Initial data";

  /**
   * Handles events emitted from the child component
   */
  handleChildEvent(message: string): void {
    this.childMessage = message;
    console.log("Parent received message from child:", message);
  }

  /**
   * Toggles the visibility of the lifecycle component
   * This will trigger ngOnDestroy when hiding and ngOnInit when showing
   */
  toggleLifecycle(): void {
    this.showLifecycle = !this.showLifecycle;
  }
}
