# Requirements Document

## Introduction

This document defines the requirements for an Angular 18 learning project that demonstrates core Angular concepts and Angular 18-specific features through practical, hands-on examples. The project serves as an educational resource for developers learning Angular 18, showcasing both fundamental concepts and modern Angular patterns including standalone components, signal-based reactivity, and new control flow syntax.

## Glossary

- **Learning_Project**: The Angular 18 application that demonstrates core concepts
- **Component_Demo**: A component that demonstrates a specific Angular concept
- **Navigation_System**: The routing mechanism that allows users to navigate between demos
- **Data_Service**: A service that provides data to components via HTTP or mock data
- **Form_Module**: Components demonstrating reactive and template-driven forms
- **Signal_Store**: A signal-based state management implementation
- **Control_Flow_Demo**: Components demonstrating @if, @for, and @switch syntax
- **Binding_Demo**: Components demonstrating interpolation, property, event, and two-way binding
- **Directive_Demo**: Components demonstrating structural and attribute directives
- **HTTP_Module**: Components demonstrating HTTP client and observable patterns
- **Standalone_Component**: A component that does not require NgModule declaration
- **Module_Based_Component**: A component declared within an NgModule

## Requirements

### Requirement 1: Project Structure and Configuration

**User Story:** As a learner, I want a properly configured Angular 18 project, so that I can run and explore the examples immediately.

#### Acceptance Criteria

1. THE Learning_Project SHALL use Angular 18 with standalone components as the default architecture
2. THE Learning_Project SHALL include a package.json with all required dependencies for Angular 18
3. THE Learning_Project SHALL include TypeScript configuration optimized for Angular 18
4. THE Learning_Project SHALL include an angular.json configuration file
5. THE Learning_Project SHALL be structured in the current directory as the project root
6. THE Learning_Project SHALL exclude all testing files and configurations

### Requirement 2: Component Architecture Demonstration

**User Story:** As a learner, I want to see both standalone and module-based components, so that I understand both architectural approaches.

#### Acceptance Criteria

1. THE Learning_Project SHALL include at least three Standalone_Component examples
2. THE Learning_Project SHALL include at least one Module_Based_Component example with its NgModule
3. WHEN a Component_Demo is loaded, THE Learning_Project SHALL display the component with explanatory comments in the code
4. THE Learning_Project SHALL demonstrate component lifecycle hooks with console logging
5. THE Learning_Project SHALL demonstrate parent-child component communication using @Input and @Output

### Requirement 3: Template and Data Binding

**User Story:** As a learner, I want to see all types of data binding in action, so that I understand how data flows in Angular templates.

#### Acceptance Criteria

1. THE Binding_Demo SHALL demonstrate interpolation syntax with dynamic values
2. THE Binding_Demo SHALL demonstrate property binding to HTML attributes and DOM properties
3. THE Binding_Demo SHALL demonstrate event binding with user interactions
4. THE Binding_Demo SHALL demonstrate two-way binding using [(ngModel)]
5. THE Binding_Demo SHALL include visual feedback showing how each binding type works

### Requirement 4: Angular 18 Control Flow Syntax

**User Story:** As a learner, I want to see the new @if, @for, and @switch syntax, so that I understand Angular 18's built-in control flow.

#### Acceptance Criteria

1. THE Control_Flow_Demo SHALL demonstrate @if syntax for conditional rendering
2. THE Control_Flow_Demo SHALL demonstrate @else and @else if blocks
3. THE Control_Flow_Demo SHALL demonstrate @for syntax with track expressions
4. THE Control_Flow_Demo SHALL demonstrate @switch, @case, and @default syntax
5. THE Control_Flow_Demo SHALL include side-by-side comparisons with legacy *ngIf and *ngFor syntax in comments

### Requirement 5: Directives Demonstration

**User Story:** As a learner, I want to see structural and attribute directives, so that I understand how to extend HTML behavior.

#### Acceptance Criteria

1. THE Directive_Demo SHALL demonstrate at least two built-in structural directives
2. THE Directive_Demo SHALL demonstrate at least three built-in attribute directives (ngClass, ngStyle, ngModel)
3. THE Directive_Demo SHALL include one custom attribute directive implementation
4. THE Directive_Demo SHALL include one custom structural directive implementation
5. WHEN a custom directive is applied, THE Directive_Demo SHALL show visible changes to the DOM or styling

### Requirement 6: Services and Dependency Injection

**User Story:** As a learner, I want to see services with dependency injection, so that I understand how to share data and logic across components.

#### Acceptance Criteria

1. THE Learning_Project SHALL include at least two Data_Service implementations
2. THE Data_Service SHALL be injectable at root level using providedIn: 'root'
3. THE Learning_Project SHALL demonstrate constructor injection in components
4. THE Learning_Project SHALL demonstrate the inject() function for dependency injection
5. THE Data_Service SHALL demonstrate sharing state between multiple components

### Requirement 7: Routing and Navigation

**User Story:** As a learner, I want a navigation system between different demos, so that I can explore each concept independently.

#### Acceptance Criteria

1. THE Navigation_System SHALL use Angular Router with standalone components
2. THE Navigation_System SHALL include a main navigation menu with links to all demo sections
3. THE Navigation_System SHALL include at least eight distinct routes for different concept demos
4. THE Navigation_System SHALL demonstrate route parameters and query parameters
5. THE Navigation_System SHALL include a home/landing page explaining the project structure
6. WHEN a navigation link is clicked, THE Navigation_System SHALL navigate to the corresponding demo without page reload

### Requirement 8: Reactive Forms

**User Story:** As a learner, I want to see reactive forms in action, so that I understand form validation and reactive programming patterns.

#### Acceptance Criteria

1. THE Form_Module SHALL include a reactive form with at least five form controls
2. THE Form_Module SHALL demonstrate FormGroup and FormControl usage
3. THE Form_Module SHALL demonstrate built-in validators (required, minLength, maxLength, pattern, email)
4. THE Form_Module SHALL demonstrate custom validator implementation
5. THE Form_Module SHALL display validation errors with user-friendly messages
6. WHEN form data changes, THE Form_Module SHALL display the current form value and validation status

### Requirement 9: Template-Driven Forms

**User Story:** As a learner, I want to see template-driven forms, so that I understand the simpler form approach.

#### Acceptance Criteria

1. THE Form_Module SHALL include a template-driven form with at least four input fields
2. THE Form_Module SHALL demonstrate ngModel for two-way binding
3. THE Form_Module SHALL demonstrate template reference variables for form validation
4. THE Form_Module SHALL demonstrate required and pattern validation in templates
5. WHEN the form is submitted, THE Form_Module SHALL display the submitted values

### Requirement 10: HTTP Client and Observables

**User Story:** As a learner, I want to see HTTP requests and observable patterns, so that I understand asynchronous data handling.

#### Acceptance Criteria

1. THE HTTP_Module SHALL demonstrate GET requests to a public API or mock backend
2. THE HTTP_Module SHALL demonstrate POST requests with request body
3. THE HTTP_Module SHALL demonstrate observable subscription and unsubscription
4. THE HTTP_Module SHALL demonstrate the async pipe for automatic subscription management
5. THE HTTP_Module SHALL demonstrate error handling for HTTP requests
6. THE HTTP_Module SHALL demonstrate observable operators (map, filter, catchError)

### Requirement 11: Signal-Based Reactivity

**User Story:** As a learner, I want to see Angular 18 signals in action, so that I understand the new reactivity model.

#### Acceptance Criteria

1. THE Signal_Store SHALL demonstrate signal() for creating reactive state
2. THE Signal_Store SHALL demonstrate computed() for derived state
3. THE Signal_Store SHALL demonstrate effect() for side effects
4. THE Signal_Store SHALL demonstrate signal updates using set() and update()
5. THE Signal_Store SHALL include a comparison example showing signals vs traditional observables
6. WHEN a signal value changes, THE Learning_Project SHALL automatically update the UI without manual change detection

### Requirement 12: Code Documentation and Learning Resources

**User Story:** As a learner, I want well-documented code with explanations, so that I can understand what each example demonstrates.

#### Acceptance Criteria

1. THE Learning_Project SHALL include inline comments explaining key concepts in each demo
2. THE Learning_Project SHALL include a README.md file with project overview and setup instructions
3. THE Learning_Project SHALL include a navigation structure that groups related concepts together
4. WHEN viewing any Component_Demo, THE Learning_Project SHALL display a description of what concept is being demonstrated
5. THE Learning_Project SHALL include TypeScript types and interfaces with descriptive names

### Requirement 13: Visual Presentation and User Experience

**User Story:** As a learner, I want a clean, organized interface, so that I can focus on learning without distraction.

#### Acceptance Criteria

1. THE Learning_Project SHALL include basic CSS styling for readability
2. THE Learning_Project SHALL use a consistent layout across all demo pages
3. THE Learning_Project SHALL include visual indicators for interactive elements
4. THE Learning_Project SHALL display code examples alongside their rendered output where applicable
5. THE Navigation_System SHALL highlight the currently active demo section
