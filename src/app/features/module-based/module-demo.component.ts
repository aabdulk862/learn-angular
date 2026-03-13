import { Component } from '@angular/core';

/**
 * ModuleDemoComponent - Traditional NgModule-based component
 * 
 * This component demonstrates the traditional Angular architecture using NgModule.
 * Unlike standalone components, this component must be declared in an NgModule.
 * 
 * Key differences from standalone components:
 * - No 'standalone: true' flag
 * - No 'imports' array in the component decorator
 * - Must be declared in an NgModule's declarations array
 * - Dependencies are imported at the module level, not component level
 */
@Component({
  selector: 'app-module-demo',
  template: `
    <div class="demo-container">
      <h2>Module-Based Component Demo</h2>
      
      <section class="info-section">
        <h3>What is NgModule?</h3>
        <p>
          NgModule is the traditional way to organize Angular applications.
          It groups related components, directives, pipes, and services together.
        </p>
      </section>

      <section class="comparison-section">
        <h3>NgModule vs Standalone Components</h3>
        
        <div class="comparison-grid">
          <div class="comparison-item">
            <h4>NgModule Approach (This Component)</h4>
            <ul>
              <li>Component declared in NgModule</li>
              <li>Dependencies imported at module level</li>
              <li>Requires &#64;NgModule decorator</li>
              <li>Traditional Angular architecture</li>
              <li>Good for large, complex applications</li>
            </ul>
          </div>
          
          <div class="comparison-item">
            <h4>Standalone Approach (Other Demos)</h4>
            <ul>
              <li>Component is self-contained</li>
              <li>Dependencies imported at component level</li>
              <li>No NgModule required</li>
              <li>Angular 14+ feature, default in Angular 18</li>
              <li>Simpler for small to medium apps</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="code-section">
        <h3>Module Structure</h3>
        <p>This component is part of <strong>ModuleDemoModule</strong> which includes:</p>
        <ul>
          <li><strong>declarations:</strong> [ModuleDemoComponent] - Components belonging to this module</li>
          <li><strong>imports:</strong> [CommonModule] - Other modules this module depends on</li>
          <li><strong>exports:</strong> [ModuleDemoComponent] - Components available to other modules</li>
        </ul>
      </section>

      <section class="example-section">
        <h3>When to Use NgModule</h3>
        <ul>
          <li>Working with legacy Angular applications (pre-Angular 14)</li>
          <li>Large enterprise applications with complex module boundaries</li>
          <li>When you need feature modules with lazy loading</li>
          <li>When working with third-party libraries that require NgModule</li>
        </ul>
      </section>

      <section class="note-section">
        <h3>💡 Note</h3>
        <p>
          Angular 18 recommends standalone components as the default approach.
          However, NgModule is still fully supported and useful in certain scenarios.
          You can even mix both approaches in the same application!
        </p>
      </section>
    </div>
  `,
  styles: [`
    .demo-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      color: #dd0031;
      border-bottom: 2px solid #dd0031;
      padding-bottom: 10px;
      margin-bottom: 30px;
    }

    h3 {
      color: #333;
      margin-top: 25px;
      margin-bottom: 15px;
    }

    h4 {
      color: #555;
      margin-bottom: 10px;
    }

    section {
      margin-bottom: 30px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      border-left: 4px solid #dd0031;
    }

    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 15px;
    }

    .comparison-item {
      background-color: white;
      padding: 15px;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    ul {
      margin: 10px 0;
      padding-left: 25px;
    }

    li {
      margin: 8px 0;
      line-height: 1.6;
    }

    .note-section {
      background-color: #fff3cd;
      border-left-color: #ffc107;
    }

    .note-section p {
      margin: 0;
      color: #856404;
    }

    strong {
      color: #dd0031;
    }

    @media (max-width: 768px) {
      .comparison-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ModuleDemoComponent {
  // This is a traditional component without the standalone flag
  // It must be declared in ModuleDemoModule
}
