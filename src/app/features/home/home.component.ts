import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

/**
 * HomeComponent - Landing page for the Angular 18 Learning Project
 *
 * This component serves as the entry point for the learning project,
 * providing an overview of available demos and navigation guidance.
 *
 * Validates Requirements:
 * - 7.5: Navigation system includes home/landing page explaining project structure
 * - 12.3: Navigation structure groups related concepts together
 */
@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="demo-container">
      <!-- Welcome Section -->
      <section class="welcome-section">
        <h1>Welcome to Angular 18 Learning Project</h1>
        <p class="subtitle">
          Explore Angular 18 concepts through interactive, hands-on
          demonstrations
        </p>
        <p class="description">
          This project showcases Angular 18's latest features including
          standalone components, signal-based reactivity, and the new control
          flow syntax. Each demo is designed to help you understand core Angular
          concepts through practical examples.
        </p>

        <!-- GitHub Button -->
        <a
          href="https://github.com/aabdulk862/"
          target="_blank"
          rel="noopener noreferrer"
          class="github-button"
        >
          <svg
            class="github-icon"
            viewBox="0 0 16 16"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <span>Check out my GitHub</span>
          <svg
            class="arrow-icon"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M3.75 2a.75.75 0 01.75.75v8.69l2.72-2.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 011.06-1.06l2.72 2.72V2.75A.75.75 0 013.75 2zm8.5 0a.75.75 0 01.75.75v8.69l2.72-2.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l2.72 2.72V2.75a.75.75 0 01.75-.75z"
              transform="rotate(45 8 8)"
            ></path>
          </svg>
        </a>
      </section>

      <!-- Available Demos Section -->
      <section class="demos-section">
        <h2>Available Demos</h2>
        <p>
          Navigate through the following sections to explore different Angular
          concepts:
        </p>

        <div class="demo-grid">
          <!-- Fundamentals -->
          <div class="demo-category">
            <h3>Fundamentals</h3>
            <ul class="demo-list">
              <li>
                <a routerLink="/bindings">Data Binding</a>
                <span class="demo-description"
                  >Interpolation, property, event, and two-way binding</span
                >
              </li>
              <li>
                <a routerLink="/control-flow">Control Flow</a>
                <span class="demo-description"
                  >New &#64;if, &#64;for, and &#64;switch syntax</span
                >
              </li>
              <li>
                <a routerLink="/directives">Directives</a>
                <span class="demo-description"
                  >Built-in and custom directives</span
                >
              </li>
            </ul>
          </div>

          <!-- Components & Services -->
          <div class="demo-category">
            <h3>Components & Services</h3>
            <ul class="demo-list">
              <li>
                <a routerLink="/components">Component Communication</a>
                <span class="demo-description"
                  >&#64;Input, &#64;Output, and lifecycle hooks</span
                >
              </li>
              <li>
                <a routerLink="/services">Dependency Injection</a>
                <span class="demo-description"
                  >Services and the inject() function</span
                >
              </li>
            </ul>
          </div>

          <!-- Forms & Data -->
          <div class="demo-category">
            <h3>Forms & Data</h3>
            <ul class="demo-list">
              <li>
                <a routerLink="/forms/reactive">Reactive Forms</a>
                <span class="demo-description"
                  >FormGroup, FormControl, and validators</span
                >
              </li>
              <li>
                <a routerLink="/forms/template">Template-Driven Forms</a>
                <span class="demo-description"
                  >ngModel and template validation</span
                >
              </li>
              <li>
                <a routerLink="/http">HTTP Client</a>
                <span class="demo-description"
                  >Observables and async operations</span
                >
              </li>
            </ul>
          </div>

          <!-- Advanced Features -->
          <div class="demo-category">
            <h3>Advanced Features</h3>
            <ul class="demo-list">
              <li>
                <a routerLink="/signals">Signals</a>
                <span class="demo-description"
                  >Signal-based reactivity (Angular 18)</span
                >
              </li>
              <li>
                <a routerLink="/module-based">Module-Based Components</a>
                <span class="demo-description"
                  >Traditional NgModule pattern</span
                >
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Quick Start Section -->
      <section class="quick-start-section">
        <h2>Quick Start Guide</h2>
        <div class="instructions">
          <div class="instruction-step">
            <h4>1. Installation</h4>
            <p>If you haven't already, install dependencies:</p>
            <code>npm install</code>
          </div>
          <div class="instruction-step">
            <h4>2. Run Development Server</h4>
            <p>Start the application in development mode:</p>
            <code>ng serve</code>
            <p class="note">
              Navigate to <strong>http://localhost:4200/</strong>
            </p>
          </div>
          <div class="instruction-step">
            <h4>3. Explore the Demos</h4>
            <p>
              Use the navigation menu on the left to explore different Angular
              concepts. Each demo includes:
            </p>
            <ul>
              <li>Working code examples</li>
              <li>Interactive demonstrations</li>
              <li>Inline documentation</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Navigation Guide Section -->
      <section class="navigation-guide">
        <h2>Navigation Guide</h2>
        <p>
          Use the sidebar menu to navigate between different demo sections. Each
          section focuses on a specific Angular concept with practical examples
          you can interact with.
        </p>
        <div class="learning-path">
          <h4>Recommended Learning Path:</h4>
          <ol>
            <li>
              Start with <strong>Data Binding</strong> to understand how data
              flows in Angular
            </li>
            <li>
              Move to <strong>Control Flow</strong> to learn Angular 18's new
              syntax
            </li>
            <li>
              Explore <strong>Directives</strong> to extend HTML functionality
            </li>
            <li>
              Learn <strong>Component Communication</strong> for building
              complex UIs
            </li>
            <li>
              Understand <strong>Services</strong> for sharing data and logic
            </li>
            <li>Master <strong>Forms</strong> for user input handling</li>
            <li>
              Work with <strong>HTTP Client</strong> for async data operations
            </li>
            <li>
              Discover <strong>Signals</strong> for modern reactive programming
            </li>
          </ol>
        </div>
      </section>

      <!-- Angular 18 Highlights -->
      <section class="highlights-section">
        <h2>Angular 18 Highlights</h2>
        <div class="highlights-grid">
          <div class="highlight-card">
            <h4>🎯 Standalone Components</h4>
            <p>No more NgModules! Components are standalone by default.</p>
          </div>
          <div class="highlight-card">
            <h4>⚡ Signal-Based Reactivity</h4>
            <p>New reactive primitives for simpler state management.</p>
          </div>
          <div class="highlight-card">
            <h4>🔄 New Control Flow</h4>
            <p>
              Built-in &#64;if, &#64;for, and &#64;switch syntax for better
              performance.
            </p>
          </div>
          <div class="highlight-card">
            <h4>💉 inject() Function</h4>
            <p>Modern dependency injection without constructor parameters.</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .welcome-section {
        text-align: center;
        padding: 2rem 0 3rem;
        border-bottom: 2px solid #e0e0e0;
        margin-bottom: 2rem;
      }

      .welcome-section h1 {
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 1rem;
      }

      .subtitle {
        font-size: 1.25rem;
        color: #3498db;
        margin-bottom: 1rem;
      }

      .description {
        font-size: 1rem;
        color: #555;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
      }

      /* GitHub Button Styles */
      .github-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #24292e 0%, #1a1e22 100%);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .github-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.1),
          transparent
        );
        transition: left 0.5s ease;
      }

      .github-button:hover::before {
        left: 100%;
      }

      .github-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(36, 41, 46, 0.4);
        background: linear-gradient(135deg, #2c3238 0%, #1f2428 100%);
      }

      .github-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(36, 41, 46, 0.3);
      }

      .github-icon {
        flex-shrink: 0;
        transition: transform 0.3s ease;
      }

      .github-button:hover .github-icon {
        transform: rotate(360deg);
      }

      .arrow-icon {
        flex-shrink: 0;
        opacity: 0.8;
        transition: transform 0.3s ease;
      }

      .github-button:hover .arrow-icon {
        transform: translateX(4px);
      }

      .demos-section {
        margin-bottom: 3rem;
      }

      .demos-section h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .demo-category {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        border-left: 4px solid #3498db;
      }

      .demo-category h3 {
        color: #2c3e50;
        margin-bottom: 1rem;
        font-size: 1.25rem;
      }

      .demo-list {
        list-style: none;
        padding: 0;
      }

      .demo-list li {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }

      .demo-list a {
        color: #3498db;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: color 0.3s;
      }

      .demo-list a:hover {
        color: #2980b9;
        text-decoration: underline;
      }

      .demo-description {
        font-size: 0.9rem;
        color: #666;
        margin-top: 0.25rem;
      }

      .quick-start-section {
        background: #f0f8ff;
        padding: 2rem;
        border-radius: 8px;
        margin-bottom: 3rem;
      }

      .quick-start-section h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      .instructions {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .instruction-step {
        background: white;
        padding: 1.5rem;
        border-radius: 6px;
        border-left: 4px solid #27ae60;
      }

      .instruction-step h4 {
        color: #27ae60;
        margin-bottom: 0.5rem;
      }

      .instruction-step code {
        display: block;
        background: #2c3e50;
        color: #ecf0f1;
        padding: 0.75rem;
        border-radius: 4px;
        margin: 0.5rem 0;
        font-family: "Courier New", monospace;
      }

      .instruction-step .note {
        font-size: 0.9rem;
        color: #666;
        margin-top: 0.5rem;
      }

      .instruction-step ul {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
      }

      .navigation-guide {
        margin-bottom: 3rem;
      }

      .navigation-guide h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .learning-path {
        background: #fff9e6;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
        border-left: 4px solid #f39c12;
      }

      .learning-path h4 {
        color: #f39c12;
        margin-bottom: 1rem;
      }

      .learning-path ol {
        padding-left: 1.5rem;
      }

      .learning-path li {
        margin-bottom: 0.75rem;
        line-height: 1.6;
      }

      .highlights-section {
        margin-bottom: 3rem;
      }

      .highlights-section h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      .highlights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .highlight-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .highlight-card h4 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }

      .highlight-card p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
        line-height: 1.5;
      }

      @media (max-width: 768px) {
        .welcome-section h1 {
          font-size: 2rem;
        }

        .demo-grid {
          grid-template-columns: 1fr;
        }

        .highlights-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class HomeComponent {}
