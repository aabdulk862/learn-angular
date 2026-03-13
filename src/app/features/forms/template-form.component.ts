import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

/**
 * TemplateFormComponent demonstrates template-driven forms in Angular.
 *
 * Template-driven forms features demonstrated:
 * - ngModel for two-way data binding
 * - Template reference variables (#username="ngModel")
 * - Built-in validators (required, email, pattern, minlength)
 * - Validation error display with Angular 18 @if syntax
 * - Form state tracking (valid, touched, dirty)
 * - Form submission handling
 *
 * Template-driven forms are ideal for simple forms with straightforward
 * validation requirements. For complex forms, consider reactive forms.
 *
 * **Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5**
 */
@Component({
  selector: "app-template-form",
  standalone: true,
  imports: [FormsModule, JsonPipe],
  styles: [
    `
      .form-group {
        margin-bottom: 20px;
      }

      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      input,
      textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }

      input.ng-invalid.ng-touched {
        border-color: #dc3545;
      }

      input.ng-valid.ng-touched {
        border-color: #28a745;
      }

      .error {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 5px;
      }

      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }

      button:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
      }

      button:hover:not(:disabled) {
        background-color: #0056b3;
      }

      .submitted-data {
        margin-top: 30px;
        padding: 15px;
        background-color: #f8f9fa;
        border-radius: 4px;
      }

      pre {
        background-color: #e9ecef;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
      }
    `,
  ],
  template: `
    <div class="demo-container">
      <h2>Template-Driven Form</h2>
      <p>
        Demonstrates ngModel two-way binding, template reference variables, and
        template validation
      </p>

      <!-- Template-driven form with ngForm directive -->
      <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
        <!-- Username field with required validation -->
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            [(ngModel)]="user.username"
            required
            minlength="3"
            #username="ngModel"
          />

          <!-- Display validation errors using @if syntax -->
          @if (username.invalid && username.touched) {
            <div class="error">
              @if (username.errors?.["required"]) {
                <span>Username is required</span>
              }
              @if (username.errors?.["minlength"]) {
                <span>Username must be at least 3 characters</span>
              }
            </div>
          }
        </div>

        <!-- Email field with required and email validation -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            [(ngModel)]="user.email"
            required
            email
            #email="ngModel"
          />

          @if (email.invalid && email.touched) {
            <div class="error">
              @if (email.errors?.["required"]) {
                <span>Email is required</span>
              }
              @if (email.errors?.["email"]) {
                <span>Invalid email format</span>
              }
            </div>
          }
        </div>

        <!-- Phone field with pattern validation -->
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            [(ngModel)]="user.phone"
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            #phone="ngModel"
          />

          @if (phone.invalid && phone.touched) {
            <div class="error">
              @if (phone.errors?.["required"]) {
                <span>Phone is required</span>
              }
              @if (phone.errors?.["pattern"]) {
                <span>Phone must be in format: 123-456-7890</span>
              }
            </div>
          }
        </div>

        <!-- Comments field (textarea) -->
        <div class="form-group">
          <label for="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            [(ngModel)]="user.comments"
            rows="4"
            #comments="ngModel"
          >
          </textarea>
        </div>

        <!-- Submit button - disabled when form is invalid -->
        <button type="submit" [disabled]="userForm.invalid">Submit</button>
      </form>

      <!-- Display submitted values after form submission -->
      @if (submittedData) {
        <div class="submitted-data">
          <h3>Submitted Data:</h3>
          <pre>{{ submittedData | json }}</pre>
        </div>
      }

      <!-- Show current form state for learning purposes -->
      <div class="submitted-data">
        <h3>Current Form State:</h3>
        <p><strong>Valid:</strong> {{ userForm.valid }}</p>
        <p><strong>Touched:</strong> {{ userForm.touched }}</p>
        <p><strong>Dirty:</strong> {{ userForm.dirty }}</p>
        <pre>{{ user | json }}</pre>
      </div>
    </div>
  `,
})
export class TemplateFormComponent {
  // Model object for two-way binding with ngModel
  user = {
    username: "",
    email: "",
    phone: "",
    comments: "",
  };

  // Store submitted data to display after form submission
  submittedData: any = null;

  // Handle form submission
  onSubmit(form: any): void {
    if (form.valid) {
      // Create a copy of the submitted data
      this.submittedData = { ...this.user };
      console.log("Form submitted:", this.submittedData);

      // Optionally reset the form after submission
      // form.reset();
    }
  }
}
