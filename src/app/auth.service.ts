import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new BehaviorSubject<boolean>(
    !!localStorage.getItem('token')
  );

  loggedIn$ = this.loggedInSubject.asObservable();

  username = '';

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {

      const token = 'my-dummy-token';

      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      this.username = username;
      this.loggedInSubject.next(true);

      return true;
    }

    return false;
  }

  loggedout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.username = '';
    this.loggedInSubject.next(false);
  }

  isloggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}