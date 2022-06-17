import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { Host } from '../constant/url/Host';

import { User } from '../domain/User';
import {Token} from '../domain/token';
//import { Token } from '@angular/compiler/src/ml_parser/lexer';

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

  public login(): Observable<Token> {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', 'tyler');
    params.append('password', '12345');
    const urlauth = 'http://localhost:9091/oauth/token?grant_type=password&username=tyler&password=12345';
    const headers: HttpHeaders = new HttpHeaders({Authorization: this.token});
    return this.http.post<Token>(urlauth, params.toString(), {headers});

  }

  public logout(): any {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public showToken(token: any): void {
    
    console.log('TOKEN2: ' + JSON.stringify(token.authToken));
  }
}
