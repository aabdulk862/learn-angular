import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

/**
 * BindingsDemoComponent demonstrates all four types of data binding in Angular.
 *
 * Data binding types demonstrated:
 * 1. Interpolation {{ }} - Display component data in the template
 * 2. Property Binding [property] - Set element properties dynamically
 * 3. Event Binding (event) - Listen to user events
 * 4. Two-way Binding [(ngModel)] - Sync data between component and template
 *
 * Each section includes working examples with visual feedback to help
 * understand how data flows between the component and template.
 *
 * **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 12.1, 12.4**
 */
@Component({
  selector: "app-bindings-demo",
  standalone: true,
  imports: [FormsModule],
  styles: [
    `
      .demo-section {
        margin: 20px 0;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
      }

      .demo-section h3 {
        color: #333;
        margin-top: 0;
      }

      .example {
        margin: 15px 0;
        padding: 10px;
        background-color: white;
        border-left: 4px solid #4caf50;
      }

      .output {
        margin-top: 10px;
        padding: 10px;
        background-color: #e8f5e9;
        border-radius: 4px;
        font-weight: bold;
      }

      input,
      button {
        padding: 8px 12px;
        margin: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        background-color: #4caf50;
        color: white;
        cursor: pointer;
      }

      button:hover:not(:disabled) {
        background-color: #45a049;
      }

      button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
      }

      img {
        max-width: 200px;
        border-radius: 8px;
        margin: 10px 0;
      }

      .explanation {
        font-style: italic;
        color: #666;
        margin-top: 5px;
      }
    `,
  ],
  template: `
    <div class="demo-container">
      <h2>Data Binding Examples</h2>
      <p>
        This demo showcases the four types of data binding in Angular:
        Interpolation, Property Binding, Event Binding, and Two-way Binding.
      </p>

      <!-- Interpolation Section -->
      <section class="demo-section">
        <h3>1. Interpolation {{ "{{" }} {{ '}}' }}</h3>
        <p class="explanation">
          Interpolation displays component data in the template using double
          curly braces.
        </p>

        <div class="example">
          <p><strong>Message:</strong> {{ message }}</p>
          <p><strong>Current Time:</strong> {{ currentTime }}</p>
          <p><strong>Calculation:</strong> 5 + 3 = {{ 5 + 3 }}</p>
          <p><strong>Method Call:</strong> {{ getGreeting() }}</p>
        </div>
      </section>

      <!-- Property Binding Section -->
      <section class="demo-section">
        <h3>2. Property Binding [property]</h3>
        <p class="explanation">
          Property binding sets element properties and attributes dynamically
          using square brackets.
        </p>

        <div class="example">
          <p><strong>Image with dynamic src and alt:</strong></p>
          <img [src]="imageUrl" [alt]="imageAlt" />

          <p><strong>Button with dynamic disabled state:</strong></p>
          <button [disabled]="isButtonDisabled">
            {{ isButtonDisabled ? "Disabled Button" : "Enabled Button" }}
          </button>
          <button (click)="toggleButtonState()">Toggle Button State</button>

          <p><strong>Dynamic ID attribute:</strong></p>
          <div
            [id]="dynamicId"
            [class.highlight]="isHighlighted"
            style="padding: 10px; border: 2px solid #4CAF50;"
          >
            Element with ID: {{ dynamicId }}
          </div>
          <button (click)="toggleHighlight()">Toggle Highlight</button>
        </div>
      </section>

      <!-- Event Binding Section -->
      <section class="demo-section">
        <h3>3. Event Binding (event)</h3>
        <p class="explanation">
          Event binding listens to user events like clicks, inputs, and key
          presses using parentheses.
        </p>

        <div class="example">
          <p><strong>Click Event:</strong></p>
          <button (click)="handleClick()">Click Me!</button>
          <div class="output">Click count: {{ clickCount }}</div>

          <p><strong>Input Event:</strong></p>
          <input
            type="text"
            placeholder="Type something..."
            (input)="handleInput($event)"
          />
          <div class="output">You typed: {{ inputValue }}</div>

          <p><strong>Mouse Events:</strong></p>
          <div
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            style="padding: 20px; background-color: {{
              mouseOverColor
            }}; border: 2px solid #333; border-radius: 4px;"
          >
            Hover over me!
          </div>
        </div>
      </section>

      <!-- Two-way Binding Section -->
      <section class="demo-section">
        <h3>4. Two-way Binding [(ngModel)]</h3>
        <p class="explanation">
          Two-way binding combines property and event binding to sync data
          between component and template using [(ngModel)].
        </p>

        <div class="example">
          <p><strong>Name Input:</strong></p>
          <input
            type="text"
            [(ngModel)]="userName"
            placeholder="Enter your name"
          />
          <div class="output">Hello, {{ userName || "Guest" }}!</div>

          <p><strong>Color Picker:</strong></p>
          <input type="color" [(ngModel)]="selectedColor" />
          <div
            class="output"
            [style.background-color]="selectedColor"
            [style.color]="getContrastColor()"
          >
            Selected color: {{ selectedColor }}
          </div>

          <p><strong>Range Slider:</strong></p>
          <input type="range" min="0" max="100" [(ngModel)]="sliderValue" />
          <div class="output">Value: {{ sliderValue }}</div>

          <p><strong>Checkbox:</strong></p>
          <label>
            <input type="checkbox" [(ngModel)]="isChecked" />
            {{ isChecked ? "Checked" : "Unchecked" }}
          </label>
        </div>
      </section>

      <!-- Combined Example -->
      <section class="demo-section">
        <h3>5. All Bindings Combined</h3>
        <p class="explanation">
          A practical example using all four binding types together.
        </p>

        <div class="example">
          <input
            type="text"
            [(ngModel)]="taskInput"
            placeholder="Enter a task"
            (keyup.enter)="addTask()"
          />
          <button (click)="addTask()" [disabled]="!taskInput.trim()">
            Add Task
          </button>

          <div class="output">
            <p>
              <strong>Tasks ({{ tasks.length }}):</strong>
            </p>
            @if (tasks.length === 0) {
              <p>No tasks yet. Add one above!</p>
            } @else {
              <ul>
                @for (task of tasks; track task) {
                  <li>{{ task }}</li>
                }
              </ul>
            }
          </div>
        </div>
      </section>
    </div>
  `,
})
export class BindingsDemoComponent {
  // Interpolation properties
  message = "Welcome to Angular Data Binding!";
  currentTime = new Date().toLocaleTimeString();

  // Property binding properties
  imageUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
  imageAlt = "Angular Logo";
  isButtonDisabled = false;
  dynamicId = "dynamic-element-123";
  isHighlighted = false;

  // Event binding properties
  clickCount = 0;
  inputValue = "";
  mouseOverColor = "#f0f0f0";

  // Two-way binding properties
  userName = "";
  selectedColor = "#4CAF50";
  sliderValue = 50;
  isChecked = false;

  // Combined example properties
  taskInput = "";
  tasks: string[] = [];

  constructor() {
    // Update time every second to show dynamic interpolation
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  // Interpolation method
  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning!";
    if (hour < 18) return "Good afternoon!";
    return "Good evening!";
  }

  // Property binding methods
  toggleButtonState(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }

  // Event binding methods
  handleClick(): void {
    this.clickCount++;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  onMouseEnter(): void {
    this.mouseOverColor = "#4CAF50";
  }

  onMouseLeave(): void {
    this.mouseOverColor = "#f0f0f0";
  }

  // Two-way binding helper
  getContrastColor(): string {
    // Simple contrast calculation for text color
    const hex = this.selectedColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#ffffff";
  }

  // Combined example method
  addTask(): void {
    if (this.taskInput.trim()) {
      this.tasks.push(this.taskInput.trim());
      this.taskInput = "";
    }
  }
}
