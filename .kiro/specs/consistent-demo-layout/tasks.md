# Implementation Plan: Consistent Demo Layout

## Overview

This plan implements a standardized layout wrapper across all demo component pages using a global `.demo-container` CSS class. The implementation will define the class in global styles, update all component templates to use it, and remove duplicate inline and component-specific layout styles.

## Tasks

- [x] 1. Define global .demo-container CSS class
  - Add .demo-container class definition to src/styles.css
  - Include max-width: 1200px, margin: 0 auto, padding: 20px, box-sizing: border-box
  - Add responsive media queries for mobile (768px) and small mobile (480px) breakpoints
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3_

- [x] 2. Update Home Component layout
  - [x] 2.1 Apply .demo-container class to home.component.ts template
    - Replace existing .home-container with .demo-container class
    - Remove duplicate layout styles from component styles array
    - Preserve component-specific styling (colors, typography, grid layouts)
    - _Requirements: 3.1, 4.1, 4.2, 4.3, 5.1, 5.2_

- [x] 3. Update Components Demo layout
  - [x] 3.1 Apply .demo-container class to components-demo.component.ts template
    - Replace inline styles (padding: 20px; max-width: 1200px; margin: 0 auto) with .demo-container class
    - Preserve component-specific styling for sections and child components
    - _Requirements: 3.2, 4.1, 4.2, 4.3, 5.2_

- [x] 4. Update Directives Demo layout
  - [x] 4.1 Apply .demo-container class to directives-demo.component.ts template
    - Add .demo-container class to root div element
    - Remove any duplicate layout styles if present
    - _Requirements: 3.3, 4.4, 5.2_

- [x] 5. Update Control Flow Demo layout
  - [x] 5.1 Apply .demo-container class to control-flow-demo.component.ts template
    - Replace existing .demo-container styles in component with global class
    - Remove duplicate layout properties from component styles
    - Preserve demo-specific styling (colors, borders, cards)
    - _Requirements: 3.4, 4.1, 4.2, 4.3, 5.1, 5.2_

- [x] 6. Update Forms Components layout
  - [x] 6.1 Apply .demo-container class to reactive-form.component.ts template
    - Replace .reactive-form-container layout styles with .demo-container class
    - Remove max-width, margin, padding from component styles
    - Preserve form-specific styling
    - _Requirements: 3.5, 4.1, 4.2, 4.3, 5.1, 5.2_
  - [x] 6.2 Apply .demo-container class to template-form.component.ts template
    - Update template to use .demo-container class
    - Remove duplicate layout styles from component
    - _Requirements: 3.6, 4.4, 5.2_

- [x] 7. Update HTTP Demo layout
  - [x] 7.1 Apply .demo-container class to http-demo.component.ts template
    - Replace .http-demo layout styles with .demo-container class
    - Remove max-width, margin, padding from component styles
    - Preserve HTTP demo-specific styling
    - _Requirements: 3.7, 4.1, 4.2, 4.3, 5.1, 5.2_

- [x] 8. Update Services Demo layout
  - [x] 8.1 Apply .demo-container class to services-demo.component.ts template
    - Add .demo-container class to root element
    - Remove any duplicate layout styles
    - _Requirements: 3.8, 4.4, 5.2_

- [x] 9. Update Signals Demo layout
  - [x] 9.1 Apply .demo-container class to signals-demo.component.ts template
    - Add .demo-container class to root element
    - Remove any duplicate layout styles
    - _Requirements: 3.9, 4.4, 5.2_

- [x] 10. Update Module Demo layout
  - [x] 10.1 Apply .demo-container class to module-demo.component.ts template
    - Add .demo-container class to root element
    - Remove any duplicate layout styles
    - _Requirements: 3.10, 4.4, 5.2_

- [x] 11. Checkpoint - Verify layout consistency
  - Ensure all demo components render with consistent centered layout
  - Verify max-width constraint (1200px) is applied across all pages
  - Test responsive behavior at mobile breakpoints (768px, 480px)
  - Confirm no visual regressions in component-specific styling
  - Ask the user if questions arise

- [x] 12. Update Bindings Demo layout (if exists)
  - [x] 12.1 Check if bindings component exists in src/app/features/bindings
    - If exists, apply .demo-container class to template
    - Remove duplicate layout styles
    - _Requirements: 4.4, 5.2_

## Notes

- All tasks preserve component-specific styling (colors, typography, spacing within components)
- Only layout wrapper styles (max-width, margin, padding) are being standardized
- The .demo-container class provides consistent centering and responsive behavior
- Each component update maintains existing functionality and content
- Testing should verify visual consistency across all demo pages
