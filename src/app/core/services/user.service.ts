import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

/**
 * UserService demonstrates HTTP client usage and the inject() function pattern.
 * This service uses JSONPlaceholder API for demo data.
 * 
 * Key concepts demonstrated:
 * - Injectable service with providedIn: 'root'
 * - inject() function for dependency injection (Angular 18 pattern)
 * - HTTP GET and POST requests
 * - Observable return types for async operations
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Using inject() function instead of constructor injection (Angular 18 pattern)
  private http = inject(HttpClient);
  
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  /**
   * Fetches all users from the API
   * @returns Observable<User[]> - Stream of user array
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Creates a new user via POST request
   * @param user - User object to create
   * @returns Observable<User> - Stream of created user
   */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * Fetches a single user by ID
   * @param id - User ID to fetch
   * @returns Observable<User> - Stream of single user
   */
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
