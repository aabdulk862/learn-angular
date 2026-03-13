import { Component } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "../../shared/directives/highlight.directive";
import { UnlessDirective } from "../../shared/directives/unless.directive";

/**
 * DirectivesDemoComponent
 *
 * Demonstrates Angular directives:
 * - Built-in attribute directives: ngClass, ngStyle, ngModel
 * - Custom attribute directive: HighlightDirective
 * - Custom structural directive: UnlessDirective
 *
 * **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**
 */
@Component({
  selector: "app-directives-demo",
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, HighlightDirective, UnlessDirective],
  template: `
    <div class="demo-container">
      <h2>Directives Demo</h2>

      <!-- Built-in Attribute Directives -->
      <section style="margin: 20px 0;">
        <h3>ngClass - Dynamic Class Binding</h3>
        <p>
          Demonstrates applying CSS classes conditionally based on component
          state.
        </p>

        <button (click)="toggleActive()">Toggle Active State</button>
        <button (click)="toggleError()" style="margin-left: 10px;">
          Toggle Error State
        </button>

        <!-- ngClass with object syntax -->
        <div
          [ngClass]="{
            active: isActive,
            error: hasError,
            highlight: isActive && !hasError,
          }"
          style="margin-top: 10px; padding: 15px; border: 2px solid #ccc; border-radius: 5px;"
        >
          <p>This box changes classes dynamically:</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>✓ Active: {{ isActive }}</li>
            <li>✓ Error: {{ hasError }}</li>
            <li>✓ Highlight: {{ isActive && !hasError }}</li>
          </ul>
        </div>
      </section>

      <section style="margin: 20px 0;">
        <h3>ngStyle - Dynamic Style Binding</h3>
        <p>
          Demonstrates applying inline styles dynamically based on component
          properties.
        </p>

        <div style="margin-bottom: 10px;">
          <label
            >Text Color:
            <input type="color" [(ngModel)]="textColor" />
          </label>
          <label style="margin-left: 15px;"
            >Font Size:
            <input type="range" min="12" max="32" [(ngModel)]="fontSize" />
            {{ fontSize }}px
          </label>
        </div>

        <!-- ngStyle with object syntax -->
        <div
          [ngStyle]="{
            color: textColor,
            'font-size': fontSize + 'px',
            'background-color': backgroundColor,
            padding: '15px',
            'border-radius': '5px',
            border: '2px solid ' + textColor,
          }"
        >
          This text has dynamic styling! Change the color and font size above.
        </div>
      </section>

      <section style="margin: 20px 0;">
        <h3>ngModel - Two-Way Data Binding</h3>
        <p>
          Demonstrates two-way binding between form inputs and component
          properties.
        </p>

        <div style="margin-bottom: 15px;">
          <label
            >Your Name:
            <input
              type="text"
              [(ngModel)]="userName"
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div style="margin-bottom: 15px;">
          <label
            >Your Message:
            <textarea
              [(ngModel)]="userMessage"
              rows="3"
              style="width: 100%; max-width: 400px;"
              placeholder="Enter a message"
            ></textarea>
          </label>
        </div>

        <div
          style="padding: 15px; background-color: #f0f0f0; border-radius: 5px;"
        >
          <h4>Live Preview:</h4>
          <p><strong>Name:</strong> {{ userName || "(not entered)" }}</p>
          <p><strong>Message:</strong> {{ userMessage || "(not entered)" }}</p>
        </div>
      </section>

      <!-- Custom Attribute Directive -->
      <section style="margin: 20px 0;">
        <h3>Custom Highlight Directive (Attribute Directive)</h3>
        <p>
          Demonstrates a custom attribute directive that highlights elements on
          hover.
        </p>
        <p>Hover over the text below to see the highlight effect:</p>

        <p
          appHighlight
          [highlightColor]="'yellow'"
          style="padding: 10px; border: 1px solid #ccc; margin: 5px 0;"
        >
          Hover over me to see yellow highlight!
        </p>
        <p
          appHighlight
          [highlightColor]="'lightblue'"
          style="padding: 10px; border: 1px solid #ccc; margin: 5px 0;"
        >
          Hover over me to see blue highlight!
        </p>
        <p
          appHighlight
          style="padding: 10px; border: 1px solid #ccc; margin: 5px 0;"
        >
          Hover over me to see default yellow highlight!
        </p>
      </section>

      <!-- Custom Structural Directive -->
      <section style="margin: 20px 0;">
        <h3>Custom Unless Directive (Structural Directive)</h3>
        <p>
          Demonstrates a custom structural directive that works opposite to
          *ngIf.
        </p>
        <p>
          This directive shows content when the condition is FALSE (opposite of
          *ngIf):
        </p>

        <button (click)="toggleCondition()">
          Toggle Condition (Currently: {{ condition }})
        </button>

        <div style="margin-top: 10px;">
          <p
            *appUnless="condition"
            style="padding: 10px; background-color: #e8f5e9; border: 1px solid #4caf50;"
          >
            ✓ This content is visible because condition is FALSE
          </p>
          <p
            *appUnless="!condition"
            style="padding: 10px; background-color: #ffebee; border: 1px solid #f44336;"
          >
            ✗ This content is visible because condition is TRUE
          </p>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      section {
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 5px;
      }

      button {
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }

      /* Dynamic classes for ngClass demo */
      .active {
        background-color: #d4edda;
        border-color: #28a745 !important;
      }

      .error {
        background-color: #f8d7da;
        border-color: #dc3545 !important;
      }

      .highlight {
        box-shadow: 0 0 10px rgba(40, 167, 69, 0.5);
      }

      label {
        display: inline-block;
        margin-bottom: 5px;
      }

      input[type="text"],
      input[type="color"],
      input[type="range"] {
        margin-left: 5px;
        padding: 5px;
      }
    `,
  ],
})
export class DirectivesDemoComponent {
  // For UnlessDirective demo
  condition = false;

  // For ngClass demo
  isActive = false;
  hasError = false;

  // For ngStyle demo
  textColor = "#333333";
  fontSize = 16;
  backgroundColor = "#f0f0f0";

  // For ngModel demo
  userName = "";
  userMessage = "";

  toggleCondition() {
    this.condition = !this.condition;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }
}
