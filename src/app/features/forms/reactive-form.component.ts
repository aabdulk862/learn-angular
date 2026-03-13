import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { JsonPipe } from '@angular/common';

/**
 * Custom validator function for age range validation.
 * Demonstrates how to create custom validators for reactive forms.
 * 
 * @param control - The form control to validate
 * @returns ValidationErrors object if invalid, null if valid
 */
function ageRangeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && (value < 18 || value > 100)) {
    return { ageRange: { min: 18, max: 100, actual: value } };
  }
  return null;
}

/**
 * ReactiveFormComponent demonstrates reactive forms in Angular.
 * 
 * Reactive forms features demonstrated:
 * - FormGroup and FormControl for form structure
 * - Built-in validators (required, email, min, minLength, maxLength, pattern)
 * - Custom validator implementation (ageRangeValidator)
 * - Validation error handling and display
 * - Form state tracking (valid, touched, dirty)
 * - Dynamic form value display
 * 
 * Reactive forms provide more control and are better suited for
 * complex forms with dynamic validation requirements.
 * 
 * **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5, 8.6**
 */
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <div class="reactive-form-container">
      <h2>Reactive Form</h2>
      <p>Demonstrates Angular's reactive forms with FormGroup, FormControls, validators, and error handling.</p>
      
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name">Name:</label>
          <input 
            id="name"
            type="text" 
            formControlName="name"
            placeholder="Enter your name">
          @if (userForm.get('name')?.invalid && userForm.get('name')?.touched) {
            <div class="error">
              @if (userForm.get('name')?.hasError('required')) {
                <span>Name is required</span>
              }
              @if (userForm.get('name')?.hasError('minlength')) {
                <span>Name must be at least 3 characters</span>
              }
            </div>
          }
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            id="email"
            type="email" 
            formControlName="email"
            placeholder="Enter your email">
          @if (userForm.get('email')?.invalid && userForm.get('email')?.touched) {
            <div class="error">
              @if (userForm.get('email')?.hasError('required')) {
                <span>Email is required</span>
              }
              @if (userForm.get('email')?.hasError('email')) {
                <span>Invalid email format</span>
              }
            </div>
          }
        </div>

        <!-- Age Field -->
        <div class="form-group">
          <label for="age">Age:</label>
          <input 
            id="age"
            type="number" 
            formControlName="age"
            placeholder="Enter your age">
          @if (userForm.get('age')?.invalid && userForm.get('age')?.touched) {
            <div class="error">
              @if (userForm.get('age')?.hasError('required')) {
                <span>Age is required</span>
              }
              @if (userForm.get('age')?.hasError('min')) {
                <span>Age must be at least 18</span>
              }
              @if (userForm.get('age')?.hasError('ageRange')) {
                <span>Age must be between 18 and 100</span>
              }
            </div>
          }
        </div>

        <!-- Phone Field -->
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input 
            id="phone"
            type="tel" 
            formControlName="phone"
            placeholder="Enter your phone number">
          @if (userForm.get('phone')?.invalid && userForm.get('phone')?.touched) {
            <div class="error">
              @if (userForm.get('phone')?.hasError('required')) {
                <span>Phone is required</span>
              }
              @if (userForm.get('phone')?.hasError('pattern')) {
                <span>Phone must be 10 digits</span>
              }
            </div>
          }
        </div>

        <!-- Address Field -->
        <div class="form-group">
          <label for="address">Address:</label>
          <textarea 
            id="address"
            formControlName="address"
            placeholder="Enter your address"
            rows="3"></textarea>
          @if (userForm.get('address')?.invalid && userForm.get('address')?.touched) {
            <div class="error">
              @if (userForm.get('address')?.hasError('required')) {
                <span>Address is required</span>
              }
              @if (userForm.get('address')?.hasError('maxlength')) {
                <span>Address must not exceed 200 characters</span>
              }
            </div>
          }
        </div>

        <!-- Submit Button -->
        <button type="submit" [disabled]="userForm.invalid">Submit</button>
        <button type="button" (click)="resetForm()">Reset</button>
      </form>

      <!-- Form Status Display -->
      <div class="form-status">
        <h3>Form Status:</h3>
        <p><strong>Valid:</strong> {{ userForm.valid }}</p>
        <p><strong>Touched:</strong> {{ userForm.touched }}</p>
        <p><strong>Dirty:</strong> {{ userForm.dirty }}</p>
        
        <h3>Form Value:</h3>
        <pre>{{ userForm.value | json }}</pre>
      </div>

      <!-- Submitted Data Display -->
      @if (submittedData) {
        <div class="submitted-data">
          <h3>Submitted Data:</h3>
          <pre>{{ submittedData | json }}</pre>
        </div>
      }

      <!-- Validator Information -->
      <div class="validator-info">
        <h3>Validators Used:</h3>
        <ul>
          <li><strong>Name:</strong> required, minLength(3)</li>
          <li><strong>Email:</strong> required, email</li>
          <li><strong>Age:</strong> required, min(18), custom ageRange validator (18-100)</li>
          <li><strong>Phone:</strong> required, pattern (10 digits)</li>
          <li><strong>Address:</strong> required, maxLength(200)</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .reactive-form-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    form {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }

    input, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }

    input:focus, textarea:focus {
      outline: none;
      border-color: #4CAF50;
    }

    input.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {
      border-color: #f44336;
    }

    .error {
      color: #f44336;
      font-size: 12px;
      margin-top: 5px;
    }

    button {
      padding: 10px 20px;
      margin-right: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    button[type="submit"] {
      background-color: #4CAF50;
      color: white;
    }

    button[type="submit"]:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    button[type="button"] {
      background-color: #2196F3;
      color: white;
    }

    .form-status, .submitted-data, .validator-info {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .form-status h3, .submitted-data h3, .validator-info h3 {
      margin-top: 0;
      color: #333;
    }

    pre {
      background: #fff;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }

    .validator-info ul {
      margin: 10px 0;
      padding-left: 20px;
    }

    .validator-info li {
      margin-bottom: 5px;
    }
  `]
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  submittedData: any = null;

  ngOnInit(): void {
    // Initialize FormGroup with FormControls and validators
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        ageRangeValidator  // Custom validator
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)  // Pattern validator for 10 digits
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(200)
      ])
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.submittedData = this.userForm.value;
      console.log('Form submitted:', this.submittedData);
    }
  }

  resetForm(): void {
    this.userForm.reset();
    this.submittedData = null;
  }
}
