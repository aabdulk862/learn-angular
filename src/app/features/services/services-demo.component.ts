import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataService } from "../../core/services/data.service";
import { UserService } from "../../core/services/user.service";
import { User } from "../../core/models/user.model";

/**
 * ServicesDemoComponent demonstrates dependency injection patterns in Angular 18.
 *
 * Key concepts demonstrated:
 * - Constructor injection (DataService) - traditional DI pattern
 * - inject() function (UserService) - Angular 18 functional DI pattern
 * - Service method calls and state management
 * - Sharing state between components via services
 *
 * Validates: Requirements 6.3, 6.4, 6.5
 */
@Component({
  selector: "app-services-demo",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="demo-container">
      <h2>Services & Dependency Injection</h2>
      <p class="intro">
        This demo shows two ways to inject services in Angular 18
      </p>

      <!-- DataService Demo - Constructor Injection -->
      <section class="demo-section">
        <h3>DataService - Constructor Injection</h3>
        <p class="explanation">
          DataService is injected via constructor (traditional pattern). It uses
          signals for reactive state management.
        </p>

        <div class="controls">
          <input
            [(ngModel)]="newItem"
            placeholder="Enter new item"
            (keyup.enter)="addItem()"
          />
          <button (click)="addItem()">Add Item</button>
          <button (click)="clearData()">Clear All</button>
        </div>

        <div class="data-display">
          <h4>Shared Data ({{ sharedData.length }} items):</h4>
          @if (sharedData.length === 0) {
            <p class="empty">No items yet. Add some above!</p>
          } @else {
            <ul>
              @for (item of sharedData; track $index) {
                <li>{{ $index + 1 }}. {{ item }}</li>
              }
            </ul>
          }
        </div>
      </section>

      <!-- UserService Demo - inject() Function -->
      <section class="demo-section">
        <h3>UserService - inject() Function</h3>
        <p class="explanation">
          UserService is injected using the inject() function (Angular 18
          pattern). It demonstrates HTTP requests and observable handling.
        </p>

        <div class="controls">
          <button (click)="loadUsers()" [disabled]="loading">
            {{ loading ? "Loading..." : "Load Users from API" }}
          </button>
          <button (click)="loadSingleUser()" [disabled]="loading">
            Load User #1
          </button>
        </div>

        @if (error) {
          <div class="error"><strong>Error:</strong> {{ error }}</div>
        }

        @if (users.length > 0) {
          <div class="data-display">
            <h4>Users from JSONPlaceholder API:</h4>
            <ul>
              @for (user of users; track user.id) {
                <li>
                  <strong>{{ user.name }}</strong> - {{ user.email }}
                </li>
              }
            </ul>
          </div>
        }

        @if (singleUser) {
          <div class="data-display">
            <h4>Single User Details:</h4>
            <div class="user-card">
              <p><strong>ID:</strong> {{ singleUser.id }}</p>
              <p><strong>Name:</strong> {{ singleUser.name }}</p>
              <p><strong>Email:</strong> {{ singleUser.email }}</p>
            </div>
          </div>
        }
      </section>

      <!-- State Sharing Demo -->
      <section class="demo-section">
        <h3>Service State Sharing</h3>
        <p class="explanation">
          The DataService maintains shared state across the application. Any
          component can access and modify this data, demonstrating how services
          enable communication between components.
        </p>
        <div class="info-box">
          <p>
            💡 Try navigating to other components and back - the data persists!
          </p>
          <p>
            💡 The DataService uses signals, so updates are automatically
            reactive.
          </p>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .intro {
        color: #666;
        font-size: 1.1em;
        margin-bottom: 30px;
      }

      .demo-section {
        background: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 30px;
      }

      .demo-section h3 {
        margin-top: 0;
        color: #333;
        border-bottom: 2px solid #4caf50;
        padding-bottom: 10px;
      }

      .explanation {
        background: #fff;
        padding: 12px;
        border-left: 4px solid #2196f3;
        margin: 15px 0;
        font-size: 0.95em;
        color: #555;
      }

      .controls {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        flex-wrap: wrap;
      }

      .controls input {
        flex: 1;
        min-width: 200px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1em;
      }

      .controls button {
        padding: 10px 20px;
        background: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
        transition: background 0.3s;
      }

      .controls button:hover:not(:disabled) {
        background: #45a049;
      }

      .controls button:disabled {
        background: #ccc;
        cursor: not-allowed;
      }

      .data-display {
        background: white;
        padding: 15px;
        border-radius: 4px;
        margin-top: 15px;
      }

      .data-display h4 {
        margin-top: 0;
        color: #333;
      }

      .data-display ul {
        list-style: none;
        padding: 0;
      }

      .data-display li {
        padding: 8px;
        margin: 5px 0;
        background: #f5f5f5;
        border-left: 3px solid #4caf50;
        border-radius: 3px;
      }

      .empty {
        color: #999;
        font-style: italic;
        text-align: center;
        padding: 20px;
      }

      .error {
        background: #ffebee;
        color: #c62828;
        padding: 12px;
        border-radius: 4px;
        margin: 15px 0;
        border-left: 4px solid #c62828;
      }

      .user-card {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 4px;
      }

      .user-card p {
        margin: 8px 0;
      }

      .info-box {
        background: #e3f2fd;
        border: 1px solid #2196f3;
        border-radius: 4px;
        padding: 15px;
        margin-top: 15px;
      }

      .info-box p {
        margin: 8px 0;
        color: #1565c0;
      }
    `,
  ],
})
export class ServicesDemoComponent {
  // Constructor injection - traditional DI pattern (Requirement 6.3)
  constructor(private dataService: DataService) {
    console.log("ServicesDemoComponent: DataService injected via constructor");
  }

  // inject() function - Angular 18 functional DI pattern (Requirement 6.4)
  private userService = inject(UserService);

  // Component state
  newItem = "";
  users: User[] = [];
  singleUser: User | null = null;
  loading = false;
  error = "";

  /**
   * Gets shared data from DataService.
   * This demonstrates how services share state across components (Requirement 6.5)
   */
  get sharedData(): string[] {
    return this.dataService.getData();
  }

  /**
   * Adds a new item to the shared data via DataService.
   * Demonstrates service method calls and state updates.
   */
  addItem(): void {
    if (this.newItem.trim()) {
      this.dataService.addData(this.newItem.trim());
      console.log("Added item to DataService:", this.newItem);
      this.newItem = "";
    }
  }

  /**
   * Clears all data from DataService.
   * Demonstrates service method calls.
   */
  clearData(): void {
    this.dataService.clearData();
    console.log("Cleared all data from DataService");
  }

  /**
   * Loads users from the API using UserService.
   * Demonstrates HTTP service method calls and observable handling.
   */
  loadUsers(): void {
    this.loading = true;
    this.error = "";
    this.singleUser = null;

    console.log("Loading users from UserService...");

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users.slice(0, 5); // Show first 5 users
        this.loading = false;
        console.log("Loaded users:", this.users.length);
      },
      error: (err) => {
        this.error = "Failed to load users. Please try again.";
        this.loading = false;
        console.error("Error loading users:", err);
      },
    });
  }

  /**
   * Loads a single user by ID using UserService.
   * Demonstrates parameterized service method calls.
   */
  loadSingleUser(): void {
    this.loading = true;
    this.error = "";
    this.users = [];

    console.log("Loading single user from UserService...");

    this.userService.getUserById(1).subscribe({
      next: (user) => {
        this.singleUser = user;
        this.loading = false;
        console.log("Loaded user:", user);
      },
      error: (err) => {
        this.error = "Failed to load user. Please try again.";
        this.loading = false;
        console.error("Error loading user:", err);
      },
    });
  }
}
