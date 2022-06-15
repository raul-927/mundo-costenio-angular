import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Host } from '../constant/url/Host';
import { GrupoCuentaUrl } from '../constant/url/GrupoCuentaUrl';
import { GrupoCuenta } from '../domain/GrupoCuenta';

@Injectable({
  providedIn: 'root'
})
export class GrupoCuentaService {
  private url = Host.LOCAL_HOST + GrupoCuentaUrl.GRUPO_CUENTA_URL;
  private search = Host.LOCAL_HOST + GrupoCuentaUrl.GRUPO_CUENTA_SEARCH;
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTUyODU5MTIsInVzZXJfbmFtZSI6InR5bGVyIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DT1VOVEVSIl0sImp0aSI6ImU4MjU0YTZkLThmOGMtNDRhZi1iMmFjLTI1OWVjMjI5ODFhNiIsImNsaWVudF9pZCI6ImNsaWVudCIsInNjb3BlIjpbInJlYWQiXX0.t5Wsz7EYKE93_JD3OSFB8cUbERVJQAMRuZu2au6JOyI';
  private token = 'Bearer ' + this.authToken;
  constructor(private http: HttpClient) { }

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
    return this.http.delete<GrupoCuenta>(this.url + '/' + id);
  }

  public listAll(): Observable<GrupoCuenta[]>{
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.get<GrupoCuenta[]>(this.search, {headers});
  }

  public select(grupoCuenta: GrupoCuenta): Observable<GrupoCuenta[]>{
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
    return this.http.get<GrupoCuenta[]>(this.search, {headers});
  }

}
