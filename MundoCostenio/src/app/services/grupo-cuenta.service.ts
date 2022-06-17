import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Host } from '../constant/url/Host';
import { GrupoCuentaUrl } from '../constant/url/GrupoCuentaUrl';
import { GrupoCuenta } from '../domain/GrupoCuenta';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoCuentaService {
  private url = Host.LOCAL_HOST + GrupoCuentaUrl.GRUPO_CUENTA_URL;
  private search = Host.LOCAL_HOST + GrupoCuentaUrl.GRUPO_CUENTA_SEARCH;
  private token: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    authService.login().subscribe(auth => {
      this.token = auth.token_type + ' ' + auth.access_token;
      console.log('TOKEN_EN_CONSTRUCTOR GrupoCuentaService: ' + this.token);
    });
  }

  public insert(grupoCuenta: any): Observable<GrupoCuenta>{
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.post<GrupoCuenta>(this.url, grupoCuenta, {headers});
  }

  public update(grupoCuenta: GrupoCuenta): Observable<GrupoCuenta>{
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.put<GrupoCuenta>(this.url, grupoCuenta, {headers});
  }

  public delete(id: any): Observable<GrupoCuenta> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.delete<GrupoCuenta>(this.url + '/' + id, {headers});
  }

  public listAll(token: string): Observable<GrupoCuenta[]> {
    console.log('TOKEN EN LIST_ALL: ' + token);
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: token});
    return this.http.get<GrupoCuenta[]>(this.search, {headers});
  }

  public select(grupoCuenta: GrupoCuenta): Observable<GrupoCuenta[]>{
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.post<GrupoCuenta[]>(this.search, grupoCuenta, {headers});
  }

}
