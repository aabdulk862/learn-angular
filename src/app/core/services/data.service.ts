import { Injectable, signal } from '@angular/core';

/**
 * DataService demonstrates signal-based state management in Angular 18.
 * This service provides shared data storage across components using signals,
 * showcasing Angular's new reactive primitive for state management.
 * 
 * Validates: Requirements 6.1, 6.2, 6.5
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {
  /**
   * Private signal storing an array of strings.
   * Signals provide automatic reactivity - when the signal updates,
   * any components reading it will automatically re-render.
   */
  private dataSignal = signal<string[]>([]);

  /**
   * Returns the current value of the data signal.
   * Components can call this to read the current state.
   * 
   * @returns Current array of strings stored in the signal
   */
  getData(): string[] {
    return this.dataSignal();
  }

  /**
   * Adds a new item to the data array using the update() method.
   * The update() method receives the current value and returns the new value.
   * This demonstrates immutable updates - we create a new array rather than mutating.
   * 
   * @param item - The string item to add to the data array
   */
  addData(item: string): void {
    this.dataSignal.update(data => [...data, item]);
  }

  /**
   * Clears all data by resetting the signal to an empty array using set().
   * The set() method directly replaces the signal's value.
   */
  clearData(): void {
    this.dataSignal.set([]);
  }
}
