import { Component, inject } from "@angular/core";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserService } from "../../core/services/user.service";
import { User } from "../../core/models/user.model";

/**
 * HttpDemoComponent demonstrates HTTP client usage and observable patterns.
 *
 * Key concepts demonstrated:
 * - HTTP GET and POST requests
 * - Observable subscription with async pipe
 * - Error handling with catchError operator
 * - Data transformation with map operator
 * - Automatic subscription management
 */
@Component({
  selector: "app-http-demo",
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <div class="demo-container">
      <h2>HTTP Client & Observables</h2>
      <p class="description">
        This demo shows how to make HTTP requests and handle responses using
        Angular's HttpClient. We're using the JSONPlaceholder API for demo data.
      </p>

      <!-- GET Request Section -->
      <section class="demo-section">
        <h3>GET Request - Fetch Users</h3>
        <p>
          Click the button to load users from the API. The async pipe
          automatically subscribes and unsubscribes.
        </p>
        <button (click)="loadUsers()" class="btn">Load Users</button>

        @if (users$ | async; as users) {
          <div class="results">
            <h4>Users ({{ users.length }}):</h4>
            <ul>
              @for (user of users; track user.id) {
                <li>
                  <strong>{{ user.name }}</strong> - {{ user.email }}
                </li>
              }
            </ul>
          </div>
        }
      </section>

      <!-- POST Request Section -->
      <section class="demo-section">
        <h3>POST Request - Create User</h3>
        <p>
          Click to create a new user. The API will return the created user with
          an ID.
        </p>
        <button (click)="createUser()" class="btn">Create User</button>

        @if (createdUser$ | async; as user) {
          <div class="results">
            <h4>Created User:</h4>
            <pre>{{ user | json }}</pre>
          </div>
        }
      </section>

      <!-- Data Transformation Section -->
      <section class="demo-section">
        <h3>Observable Operators - Data Transformation</h3>
        <p>
          Using the map operator to transform user data (extracting just names).
        </p>
        <button (click)="loadUserNames()" class="btn">
          Load User Names Only
        </button>

        @if (userNames$ | async; as names) {
          <div class="results">
            <h4>User Names:</h4>
            <ul>
              @for (name of names; track name) {
                <li>{{ name }}</li>
              }
            </ul>
          </div>
        }
      </section>

      <!-- Error Handling Section -->
      <section class="demo-section">
        <h3>Error Handling</h3>
        <p>
          Demonstrating error handling with catchError operator. This triggers
          an invalid request.
        </p>
        <button (click)="loadWithError()" class="btn btn-danger">
          Trigger Error
        </button>

        @if (errorMessage) {
          <div class="error-message">
            <strong>Error:</strong> {{ errorMessage }}
          </div>
        }

        @if (errorUsers$ | async; as users) {
          <div class="results">
            <p>Fallback: Showing empty array after error</p>
            <pre>{{ users | json }}</pre>
          </div>
        }
      </section>

      <!-- Console Logging Info -->
      <section class="demo-section info">
        <h3>📝 Console Logging</h3>
        <p>
          Open your browser's developer console (F12) to see HTTP response logs.
          Each request logs the response data for learning purposes.
        </p>
      </section>
    </div>
  `,
  styles: [
    `
      h2 {
        color: #dd0031;
        margin-bottom: 10px;
      }

      .description {
        color: #666;
        margin-bottom: 30px;
      }

      .demo-section {
        background: #f5f5f5;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        border-left: 4px solid #dd0031;
      }

      .demo-section.info {
        background: #e3f2fd;
        border-left-color: #2196f3;
      }

      h3 {
        color: #333;
        margin-top: 0;
        margin-bottom: 10px;
      }

      h4 {
        color: #555;
        margin-top: 15px;
        margin-bottom: 10px;
      }

      .btn {
        background: #dd0031;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        margin: 10px 0;
        transition: background 0.3s;
      }

      .btn:hover {
        background: #c50028;
      }

      .btn-danger {
        background: #f44336;
      }

      .btn-danger:hover {
        background: #d32f2f;
      }

      .results {
        background: white;
        padding: 15px;
        margin-top: 15px;
        border-radius: 4px;
        border: 1px solid #ddd;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 10px 0;
      }

      li {
        padding: 8px;
        border-bottom: 1px solid #eee;
      }

      li:last-child {
        border-bottom: none;
      }

      pre {
        background: #f5f5f5;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
        font-size: 12px;
      }

      .error-message {
        background: #ffebee;
        color: #c62828;
        padding: 15px;
        margin-top: 15px;
        border-radius: 4px;
        border-left: 4px solid #f44336;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    `,
  ],
})
export class HttpDemoComponent {
  // Inject UserService using inject() function
  private userService = inject(UserService);

  // Observable streams for async pipe
  users$: Observable<User[]> | null = null;
  createdUser$: Observable<User> | null = null;
  userNames$: Observable<string[]> | null = null;
  errorUsers$: Observable<User[]> | null = null;

  // Error message for display
  errorMessage: string = "";

  /**
   * Load users from API using GET request
   * Demonstrates: GET request, async pipe, console logging
   */
  loadUsers(): void {
    console.log("🔄 Loading users from API...");

    this.users$ = this.userService.getUsers().pipe(
      map((users) => {
        console.log("✅ Users loaded successfully:", users);
        return users;
      }),
    );
  }

  /**
   * Create a new user using POST request
   * Demonstrates: POST request, request body, response handling
   */
  createUser(): void {
    const newUser: User = {
      id: 0, // API will assign ID
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
    };

    console.log("🔄 Creating new user:", newUser);

    this.createdUser$ = this.userService.createUser(newUser).pipe(
      map((user) => {
        console.log("✅ User created successfully:", user);
        return user;
      }),
    );
  }

  /**
   * Load user names only using map operator
   * Demonstrates: Data transformation with map operator
   */
  loadUserNames(): void {
    console.log("🔄 Loading user names with map operator...");

    this.userNames$ = this.userService.getUsers().pipe(
      map((users) => {
        // Transform array of users to array of names
        const names = users.map((user) => user.name);
        console.log("✅ Transformed to names:", names);
        return names;
      }),
    );
  }

  /**
   * Trigger an error to demonstrate error handling
   * Demonstrates: catchError operator, error handling, fallback values
   */
  loadWithError(): void {
    console.log("🔄 Triggering error with invalid request...");
    this.errorMessage = "";

    // Make request to invalid endpoint to trigger error
    this.errorUsers$ = this.userService.getUserById(99999).pipe(
      map((user) => [user]), // Wrap single user in array
      catchError((error) => {
        // Handle error and provide fallback
        console.error("❌ HTTP Error occurred:", error);
        this.errorMessage = `Failed to load user: ${error.status} ${error.statusText}`;

        // Return empty array as fallback
        return of([]);
      }),
    );
  }
}
