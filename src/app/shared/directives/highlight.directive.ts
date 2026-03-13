import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * HighlightDirective - Custom attribute directive
 * 
 * Demonstrates:
 * - @HostListener for DOM event handling
 * - @Input for configurable properties
 * - ElementRef for direct DOM manipulation
 * 
 * Usage: <p appHighlight [highlightColor]="'yellow'">Text to highlight</p>
 * 
 * **Validates: Requirements 5.3, 5.5**
 */
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  // Configurable highlight color with default value
  @Input() highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  // Listen for mouseenter event
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  // Listen for mouseleave event
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  // Apply highlight by manipulating DOM styling
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
