import { Component, signal, computed, effect } from "@angular/core";

/**
 * SignalsDemoComponent demonstrates Angular 18's signal-based reactivity system.
 *
 * Key concepts demonstrated:
 * - signal() for creating reactive state
 * - computed() for derived state
 * - effect() for side effects with console logging
 * - Signals with primitive values (counter)
 * - Signals with objects (user data)
 * - set() method for replacing signal values
 * - update() method for modifying signal values
 *
 * **Validates: Requirements 11.1, 11.2, 11.3, 11.4, 11.6**
 */
@Component({
  selector: "app-signals-demo",
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Angular 18 Signals</h2>
      <p class="intro">
        Signals are Angular 18's new reactive primitive for managing state. They
        provide fine-grained reactivity and automatic change detection.
      </p>

      <!-- Basic Signal Example -->
      <section class="demo-section">
        <h3>Basic Signal - Counter</h3>
        <p class="description">
          The signal() function creates reactive state. When the signal value
          changes, the UI automatically updates without manual change detection.
        </p>

        <div class="counter-display">
          <span class="counter-value">{{ count() }}</span>
        </div>

        <div class="button-group">
          <button (click)="increment()" class="btn">Increment</button>
          <button (click)="decrement()" class="btn">Decrement</button>
          <button (click)="reset()" class="btn btn-secondary">Reset</button>
        </div>

        <div class="code-example">
          <strong>Code:</strong>
          <pre>
count = signal(0);
increment() &#123; this.count.update(n => n + 1); &#125;
decrement() &#123; this.count.update(n => n - 1); &#125;</pre
          >
        </div>
      </section>

      <!-- Computed Signals -->
      <section class="demo-section">
        <h3>Computed Signals - Derived State</h3>
        <p class="description">
          The computed() function creates derived state that automatically
          recalculates when its dependencies change. Computed signals are
          read-only.
        </p>

        <div class="computed-display">
          <div class="computed-item">
            <span class="label">Double Count:</span>
            <span class="value">{{ doubleCount() }}</span>
          </div>
          <div class="computed-item">
            <span class="label">Is Even:</span>
            <span
              class="value"
              [class.true]="isEven()"
              [class.false]="!isEven()"
            >
              {{ isEven() ? "✓ Yes" : "✗ No" }}
            </span>
          </div>
          <div class="computed-item">
            <span class="label">Status:</span>
            <span class="value status">{{ countStatus() }}</span>
          </div>
        </div>

        <div class="code-example">
          <strong>Code:</strong>
          <pre>
doubleCount = computed(() => this.count() * 2);
isEven = computed(() => this.count() % 2 === 0);
countStatus = computed(() => &#123;
  const c = this.count();
  if (c === 0) return 'Zero';
  if (c > 0) return 'Positive';
  return 'Negative';
&#125;);</pre
          >
        </div>
      </section>

      <!-- Effect Example -->
      <section class="demo-section">
        <h3>Effect - Side Effects</h3>
        <p class="description">
          The effect() function runs side effects when signals change. Open your
          browser console (F12) to see effect logs when you change the counter.
        </p>

        <div class="effect-info">
          <div class="info-box">
            <strong>📝 Console Logging Active</strong>
            <p>
              An effect is watching the count signal and logging changes to the
              console. Try incrementing or decrementing to see the logs!
            </p>
          </div>
        </div>

        <div class="code-example">
          <strong>Code:</strong>
          <pre>
constructor() &#123;
  effect(() => &#123;
    console.log('Count changed to:', this.count());
    console.log('Is even:', this.isEven());
  &#125;);
&#125;</pre
          >
        </div>
      </section>

      <!-- Signal with Objects -->
      <section class="demo-section">
        <h3>Signals with Objects</h3>
        <p class="description">
          Signals can hold complex objects. Use set() to replace the entire
          value, or update() to modify it based on the current value.
        </p>

        <div class="user-display">
          <div class="user-card">
            <div class="user-info">
              <strong>Name:</strong> {{ user().name }}
            </div>
            <div class="user-info"><strong>Age:</strong> {{ user().age }}</div>
            <div class="user-info">
              <strong>Email:</strong> {{ user().email }}
            </div>
          </div>
        </div>

        <div class="button-group">
          <button (click)="updateUserAge()" class="btn">
            Increment Age (update)
          </button>
          <button (click)="changeUser()" class="btn">Change User (set)</button>
        </div>

        <div class="code-example">
          <strong>Code:</strong>
          <pre>
user = signal(&#123; name: 'Alice', age: 25, email: 'alice&#64;example.com' &#125;);

// Using update() - modifies based on current value
updateUserAge() &#123;
  this.user.update(u => (&#123; ...u, age: u.age + 1 &#125;));
&#125;

// Using set() - replaces entire value
changeUser() &#123;
  this.user.set(&#123; name: 'Bob', age: 30, email: 'bob&#64;example.com' &#125;);
&#125;</pre
          >
        </div>
      </section>

      <!-- Comparison Section -->
      <section class="demo-section comparison">
        <h3>Signals vs Traditional Observables</h3>
        <div class="comparison-grid">
          <div class="comparison-item">
            <h4>Signals</h4>
            <ul>
              <li>✓ Synchronous by default</li>
              <li>✓ Always have a current value</li>
              <li>✓ Automatic dependency tracking</li>
              <li>✓ Fine-grained reactivity</li>
              <li>✓ No subscription management needed</li>
              <li>✓ Simpler mental model</li>
            </ul>
          </div>
          <div class="comparison-item">
            <h4>Observables (RxJS)</h4>
            <ul>
              <li>✓ Asynchronous by design</li>
              <li>✓ Powerful operators (map, filter, etc.)</li>
              <li>✓ Handle streams of events</li>
              <li>✓ Great for HTTP requests</li>
              <li>✓ Composable with operators</li>
              <li>⚠ Requires subscription management</li>
            </ul>
          </div>
        </div>
        <p class="note">
          <strong>Note:</strong> Signals and Observables complement each other.
          Use signals for local component state and computed values. Use
          observables for async operations like HTTP requests and event streams.
        </p>
      </section>

      <!-- Key Benefits -->
      <section class="demo-section summary">
        <h3>Key Benefits of Signals</h3>
        <ul>
          <li>
            ✓ Automatic change detection - no need for manual markForCheck()
          </li>
          <li>✓ Better performance - only updates what changed</li>
          <li>✓ Simpler code - no subscription management</li>
          <li>✓ Type-safe - full TypeScript support</li>
          <li>✓ Composable - build complex state from simple signals</li>
          <li>✓ Easier to debug - synchronous and predictable</li>
        </ul>
      </section>
    </div>
  `,
  styles: [
    `
      h2 {
        color: #dd0031;
        margin-bottom: 10px;
      }

      .intro {
        font-size: 1.1em;
        color: #555;
        margin-bottom: 30px;
      }

      .demo-section {
        background: #f9f9f9;
        padding: 20px;
        margin-bottom: 25px;
        border-radius: 8px;
        border-left: 4px solid #dd0031;
      }

      .demo-section h3 {
        color: #dd0031;
        margin-top: 0;
        margin-bottom: 10px;
      }

      .description {
        color: #666;
        font-style: italic;
        margin-bottom: 20px;
        line-height: 1.6;
      }

      /* Counter Display */
      .counter-display {
        text-align: center;
        margin: 20px 0;
      }

      .counter-value {
        display: inline-block;
        font-size: 4em;
        font-weight: bold;
        color: #dd0031;
        background: white;
        padding: 20px 50px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        min-width: 150px;
      }

      /* Buttons */
      .button-group {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        flex-wrap: wrap;
      }

      .btn {
        background: #dd0031;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition:
          background 0.3s,
          transform 0.1s;
      }

      .btn:hover {
        background: #c50028;
        transform: translateY(-1px);
      }

      .btn:active {
        transform: translateY(0);
      }

      .btn-secondary {
        background: #666;
      }

      .btn-secondary:hover {
        background: #555;
      }

      /* Computed Display */
      .computed-display {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .computed-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid #eee;
      }

      .computed-item:last-child {
        border-bottom: none;
      }

      .computed-item .label {
        font-weight: 500;
        color: #333;
      }

      .computed-item .value {
        font-size: 1.2em;
        font-weight: bold;
        color: #dd0031;
      }

      .computed-item .value.true {
        color: #4caf50;
      }

      .computed-item .value.false {
        color: #f44336;
      }

      .computed-item .value.status {
        color: #2196f3;
      }

      /* Effect Info */
      .effect-info {
        margin: 20px 0;
      }

      .info-box {
        background: #e3f2fd;
        border: 2px solid #2196f3;
        border-radius: 8px;
        padding: 20px;
      }

      .info-box strong {
        color: #1976d2;
        display: block;
        margin-bottom: 10px;
        font-size: 1.1em;
      }

      .info-box p {
        color: #555;
        margin: 0;
        line-height: 1.6;
      }

      /* User Display */
      .user-display {
        margin: 20px 0;
      }

      .user-card {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .user-info {
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        display: flex;
        gap: 10px;
      }

      .user-info:last-child {
        border-bottom: none;
      }

      .user-info strong {
        color: #666;
        min-width: 80px;
      }

      /* Code Examples */
      .code-example {
        background: #263238;
        color: #aed581;
        padding: 15px;
        border-radius: 4px;
        margin-top: 20px;
        font-family: "Courier New", monospace;
      }

      .code-example strong {
        color: #81d4fa;
        display: block;
        margin-bottom: 10px;
      }

      .code-example pre {
        margin: 0;
        color: #aed581;
        font-size: 0.9em;
        line-height: 1.6;
        overflow-x: auto;
      }

      /* Comparison Section */
      .comparison {
        border-left-color: #2196f3;
      }

      .comparison h3 {
        color: #2196f3;
      }

      .comparison-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 20px 0;
      }

      .comparison-item {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .comparison-item h4 {
        color: #333;
        margin-top: 0;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 2px solid #dd0031;
      }

      .comparison-item ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .comparison-item li {
        padding: 8px 0;
        color: #555;
        line-height: 1.5;
      }

      .note {
        background: #fff3e0;
        border-left: 4px solid #ff9800;
        padding: 15px;
        margin-top: 20px;
        border-radius: 4px;
        color: #555;
        line-height: 1.6;
      }

      .note strong {
        color: #e65100;
      }

      /* Summary Section */
      .summary {
        border-left-color: #4caf50;
      }

      .summary h3 {
        color: #4caf50;
      }

      .summary ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .summary li {
        padding: 10px 0;
        color: #333;
        font-size: 1.05em;
        line-height: 1.5;
      }
    `,
  ],
})
export class SignalsDemoComponent {
  // Basic signal - counter example (Requirement 11.1)
  count = signal(0);

  // Computed signals - derived state (Requirement 11.2)
  doubleCount = computed(() => this.count() * 2);
  isEven = computed(() => this.count() % 2 === 0);
  countStatus = computed(() => {
    const c = this.count();
    if (c === 0) return "Zero";
    if (c > 0) return "Positive";
    return "Negative";
  });

  // Signal with object (Requirement 11.4)
  user = signal({
    name: "Alice Johnson",
    age: 25,
    email: "alice@example.com",
  });

  constructor() {
    // Effect for side effects with console logging (Requirement 11.3)
    effect(() => {
      console.log("🔔 Signal Effect: Count changed to:", this.count());
      console.log("   - Double count:", this.doubleCount());
      console.log("   - Is even:", this.isEven());
      console.log("   - Status:", this.countStatus());
    });

    // Effect watching user signal
    effect(() => {
      console.log("👤 Signal Effect: User changed:", this.user());
    });
  }

  // Counter methods using update() (Requirement 11.6)
  increment(): void {
    this.count.update((n) => n + 1);
  }

  decrement(): void {
    this.count.update((n) => n - 1);
  }

  reset(): void {
    this.count.set(0); // Using set() method (Requirement 11.6)
  }

  // User methods demonstrating set() and update() (Requirement 11.6)
  updateUserAge(): void {
    // update() - modifies based on current value
    this.user.update((u) => ({ ...u, age: u.age + 1 }));
  }

  changeUser(): void {
    // set() - replaces entire value
    const users = [
      { name: "Bob Smith", age: 30, email: "bob@example.com" },
      { name: "Carol White", age: 28, email: "carol@example.com" },
      { name: "David Brown", age: 35, email: "david@example.com" },
    ];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    this.user.set(randomUser);
  }
}
