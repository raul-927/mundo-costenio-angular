import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Host } from '../constant/url/Host';

import { User } from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private authToken = 'Y2xpZW50OnNlY3JldA==';
  private token = 'Basic ' + this.authToken;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(): Observable<any> {
    const urlauth = 'localhost:9091/oauth/token?grant_type=password&username=tyler&password=12345'
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.post<any>(urlauth, null, {headers});
  }

  public logout(): any {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
