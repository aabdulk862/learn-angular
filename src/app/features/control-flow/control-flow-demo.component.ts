import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

/**
 * ControlFlowDemoComponent demonstrates Angular 18's new built-in control flow syntax.
 *
 * New control flow features demonstrated:
 * - @if, @else, @else if - Conditional rendering (replaces *ngIf)
 * - @for with track - List rendering with required tracking (replaces *ngFor)
 * - @empty - Empty state handling for @for loops
 * - @switch, @case, @default - Switch-case rendering (replaces *ngSwitch)
 *
 * Each section includes side-by-side comparisons with legacy syntax
 * to help understand the migration path from structural directives.
 *
 * **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 12.1**
 */
@Component({
  selector: "app-control-flow-demo",
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="demo-container">
      <h2>Angular 18 Control Flow</h2>
      <p class="intro">
        Angular 18 introduces new built-in control flow syntax that replaces
        structural directives.
      </p>

      <!-- @if example -->
      <section class="demo-section">
        <h3>&#64;if Syntax</h3>
        <p class="description">
          The &#64;if block conditionally displays content. It replaces *ngIf.
        </p>

        <button (click)="toggleShow()">Toggle Content</button>
        <button (click)="cycleStatus()">Cycle Status</button>

        <!-- Legacy syntax: *ngIf="showContent" -->
        @if (showContent) {
          <div class="content-box success">
            <p>✓ Content is visible!</p>
          </div>
        } @else {
          <div class="content-box warning">
            <p>✗ Content is hidden!</p>
          </div>
        }

        <div class="example-block">
          <h4>&#64;if with &#64;else if</h4>
          <!-- Legacy syntax: *ngIf="status === 'success'" -->
          @if (status === "success") {
            <p class="status success">Status: Success ✓</p>
          } @else if (status === "warning") {
            <p class="status warning">Status: Warning ⚠</p>
          } @else if (status === "error") {
            <p class="status error">Status: Error ✗</p>
          } @else {
            <p class="status info">Status: Unknown</p>
          }
        </div>

        <div class="code-comment">
          <strong>Legacy equivalent:</strong>
          <pre>
&lt;div *ngIf="showContent; else elseBlock"&gt;
  Content is visible!
&lt;/div&gt;
&lt;ng-template #elseBlock&gt;
  Content is hidden!
&lt;/ng-template&gt;</pre
          >
        </div>
      </section>

      <!-- @for example -->
      <section class="demo-section">
        <h3>&#64;for Syntax</h3>
        <p class="description">
          The &#64;for block iterates over collections with required track
          expressions for performance.
        </p>

        <button (click)="addItem()">Add Item</button>
        <button (click)="removeItem()">Remove Last Item</button>

        <!-- Legacy syntax: *ngFor="let item of items; trackBy: trackById" -->
        <div class="items-list">
          @for (item of items; track item.id) {
            <div class="item-card">
              <strong>{{ item.name }}</strong>
              <span class="item-id">ID: {{ item.id }}</span>
              <p>{{ item.description }}</p>
            </div>
          } @empty {
            <div class="empty-state">
              <p>No items to display. Click "Add Item" to get started!</p>
            </div>
          }
        </div>

        <div class="example-block">
          <h4>&#64;for with index and other variables</h4>
          @for (
            item of items;
            track item.id;
            let idx = $index;
            let isFirst = $first;
            let isLast = $last
          ) {
            <div class="item-row">
              <span class="badge">{{ idx + 1 }}</span>
              <span>{{ item.name }}</span>
              @if (isFirst) {
                <span class="tag">First</span>
              }
              @if (isLast) {
                <span class="tag">Last</span>
              }
            </div>
          }
        </div>

        <div class="code-comment">
          <strong>Legacy equivalent:</strong>
          <pre>
&lt;div *ngFor="let item of items; trackBy: trackById"&gt;
  item.name
&lt;/div&gt;
&lt;ng-container *ngIf="items.length === 0"&gt;
  No items to display
&lt;/ng-container&gt;</pre
          >
        </div>
      </section>

      <!-- @switch example -->
      <section class="demo-section">
        <h3>&#64;switch Syntax</h3>
        <p class="description">
          The &#64;switch block displays content based on matching cases. It
          replaces *ngSwitch.
        </p>

        <div class="select-group">
          <label for="viewMode">Select View Mode:</label>
          <select id="viewMode" [(ngModel)]="selectedViewMode">
            <option value="grid">Grid View</option>
            <option value="list">List View</option>
            <option value="table">Table View</option>
            <option value="card">Card View</option>
          </select>
        </div>

        <!-- Legacy syntax: [ngSwitch]="selectedViewMode" -->
        <div class="view-container">
          @switch (selectedViewMode) {
            @case ("grid") {
              <div class="view-mode grid-view">
                <div class="grid-item">📊 Grid</div>
                <div class="grid-item">📊 Grid</div>
                <div class="grid-item">📊 Grid</div>
                <div class="grid-item">📊 Grid</div>
              </div>
            }
            @case ("list") {
              <div class="view-mode list-view">
                <div class="list-item">📋 List Item 1</div>
                <div class="list-item">📋 List Item 2</div>
                <div class="list-item">📋 List Item 3</div>
              </div>
            }
            @case ("table") {
              <div class="view-mode table-view">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                  </tr>
                  <tr>
                    <td>Item 1</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Item 2</td>
                    <td>200</td>
                  </tr>
                </table>
              </div>
            }
            @default {
              <div class="view-mode card-view">
                <div class="card">🃏 Card View</div>
              </div>
            }
          }
        </div>

        <div class="code-comment">
          <strong>Legacy equivalent:</strong>
          <pre>
&lt;div [ngSwitch]="selectedViewMode"&gt;
  &lt;div *ngSwitchCase="'grid'"&gt;Grid View&lt;/div&gt;
  &lt;div *ngSwitchCase="'list'"&gt;List View&lt;/div&gt;
  &lt;div *ngSwitchDefault&gt;Card View&lt;/div&gt;
&lt;/div&gt;</pre
          >
        </div>
      </section>

      <section class="demo-section summary">
        <h3>Key Benefits of New Control Flow</h3>
        <ul>
          <li>
            ✓ Built-in syntax - no imports needed (except FormsModule for
            [(ngModel)])
          </li>
          <li>✓ Better type checking and IDE support</li>
          <li>✓ More readable and intuitive syntax</li>
          <li>
            ✓ Required track expressions prevent common performance issues
          </li>
          <li>
            ✓ &#64;empty block for &#64;for provides cleaner empty state
            handling
          </li>
        </ul>
      </section>
    </div>
  `,
  styles: [
    `
      .intro {
        font-size: 1.1em;
        color: #555;
        margin-bottom: 30px;
      }

      .demo-section {
        margin-bottom: 40px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 8px;
        border-left: 4px solid #1976d2;
      }

      .demo-section h3 {
        color: #1976d2;
        margin-top: 0;
      }

      .description {
        color: #666;
        font-style: italic;
        margin-bottom: 15px;
      }

      button {
        padding: 10px 20px;
        margin: 10px 10px 10px 0;
        background: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }

      button:hover {
        background: #1565c0;
      }

      .content-box {
        padding: 15px;
        margin: 15px 0;
        border-radius: 4px;
        font-weight: 500;
      }

      .content-box.success {
        background: #e8f5e9;
        border: 2px solid #4caf50;
        color: #2e7d32;
      }

      .content-box.warning {
        background: #fff3e0;
        border: 2px solid #ff9800;
        color: #e65100;
      }

      .status {
        padding: 10px 15px;
        border-radius: 4px;
        font-weight: 500;
        margin: 10px 0;
      }

      .status.success {
        background: #e8f5e9;
        color: #2e7d32;
      }

      .status.warning {
        background: #fff3e0;
        color: #e65100;
      }

      .status.error {
        background: #ffebee;
        color: #c62828;
      }

      .status.info {
        background: #e3f2fd;
        color: #1565c0;
      }

      .example-block {
        margin: 20px 0;
        padding: 15px;
        background: white;
        border-radius: 4px;
        border: 1px solid #ddd;
      }

      .example-block h4 {
        margin-top: 0;
        color: #333;
      }

      .items-list {
        margin: 15px 0;
      }

      .item-card {
        background: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 4px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .item-card strong {
        color: #1976d2;
        font-size: 1.1em;
      }

      .item-id {
        float: right;
        color: #999;
        font-size: 0.9em;
      }

      .item-card p {
        margin: 5px 0 0 0;
        color: #666;
      }

      .empty-state {
        padding: 40px;
        text-align: center;
        background: white;
        border: 2px dashed #ddd;
        border-radius: 4px;
        color: #999;
      }

      .item-row {
        padding: 8px;
        margin: 5px 0;
        background: white;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .badge {
        background: #1976d2;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.9em;
        font-weight: bold;
      }

      .tag {
        background: #4caf50;
        color: white;
        padding: 2px 8px;
        border-radius: 3px;
        font-size: 0.85em;
        margin-left: auto;
      }

      .select-group {
        margin: 15px 0;
      }

      .select-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
        color: #333;
      }

      select {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        min-width: 200px;
      }

      .view-container {
        margin: 20px 0;
        min-height: 200px;
      }

      .view-mode {
        padding: 20px;
        background: white;
        border-radius: 4px;
        border: 1px solid #ddd;
      }

      .grid-view {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }

      .grid-item {
        padding: 30px;
        background: #e3f2fd;
        border-radius: 4px;
        text-align: center;
        font-size: 1.2em;
      }

      .list-view {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .list-item {
        padding: 15px;
        background: #f5f5f5;
        border-left: 4px solid #1976d2;
      }

      .table-view table {
        width: 100%;
        border-collapse: collapse;
      }

      .table-view th,
      .table-view td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }

      .table-view th {
        background: #1976d2;
        color: white;
      }

      .card-view {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card {
        padding: 40px 60px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 8px;
        font-size: 1.5em;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .code-comment {
        margin-top: 20px;
        padding: 15px;
        background: #263238;
        color: #aed581;
        border-radius: 4px;
        font-family: "Courier New", monospace;
      }

      .code-comment strong {
        color: #81d4fa;
        display: block;
        margin-bottom: 10px;
      }

      .code-comment pre {
        margin: 0;
        color: #aed581;
        font-size: 0.9em;
        line-height: 1.5;
      }

      .summary {
        border-left-color: #4caf50;
      }

      .summary h3 {
        color: #4caf50;
      }

      .summary ul {
        list-style: none;
        padding: 0;
      }

      .summary li {
        padding: 8px 0;
        color: #333;
        font-size: 1.05em;
      }
    `,
  ],
})
export class ControlFlowDemoComponent {
  // @if demo state
  showContent = true;
  status: "success" | "warning" | "error" | "unknown" = "success";

  // @for demo state
  items = [
    {
      id: 1,
      name: "Angular Components",
      description: "Building blocks of Angular applications",
    },
    {
      id: 2,
      name: "Services & DI",
      description: "Dependency injection and shared logic",
    },
    { id: 3, name: "Routing", description: "Navigation between views" },
  ];
  private nextId = 4;

  // @switch demo state
  selectedViewMode: "grid" | "list" | "table" | "card" = "grid";

  toggleShow(): void {
    this.showContent = !this.showContent;
  }

  cycleStatus(): void {
    const statuses: Array<"success" | "warning" | "error" | "unknown"> = [
      "success",
      "warning",
      "error",
      "unknown",
    ];
    const currentIndex = statuses.indexOf(this.status);
    this.status = statuses[(currentIndex + 1) % statuses.length];
  }

  addItem(): void {
    const topics = [
      { name: "Signals", description: "Reactive state management" },
      { name: "HTTP Client", description: "Making API requests" },
      { name: "Forms", description: "Template-driven and reactive forms" },
      { name: "Directives", description: "Custom behavior for elements" },
      { name: "Pipes", description: "Transform data in templates" },
      { name: "Animations", description: "Add motion to your app" },
    ];

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    this.items.push({
      id: this.nextId++,
      name: randomTopic.name,
      description: randomTopic.description,
    });
  }

  removeItem(): void {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }
}
