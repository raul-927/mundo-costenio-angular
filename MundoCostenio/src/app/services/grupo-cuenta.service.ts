import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Host } from '../constant/url/Host';
import { GrupoCuentaUrl } from '../constant/url/GrupoCuentaUrl';
import { GrupoCuenta }from '../domain/GrupoCuenta';

@Injectable({
  providedIn: 'root'
})
export class GrupoCuentaService {
  private url = Host.LOCAL_HOST + GrupoCuentaUrl.GRUPO_CUENTA_URL;
  private search = Host.LOCAL_HOST + GrupoCuentaUrl.GRUPO_CUENTA_SEARCH;
  constructor(private http: HttpClient) { }

  public insert(grupoCuenta:any): Observable<GrupoCuenta>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<GrupoCuenta>(this.url, grupoCuenta, {headers});
  }

  public update(grupoCuenta:GrupoCuenta): Observable<GrupoCuenta>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<GrupoCuenta>(this.url, grupoCuenta, {headers});
  }

  public delete(id: any): Observable<GrupoCuenta> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.delete<GrupoCuenta>(this.url + '/' + id);
  }

  public listAll(): Observable<GrupoCuenta[]>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization','YmFzaWMgYmVhc2NhcnZhcmV6');
    return this.http.get<GrupoCuenta[]>(this.url,{headers});
  }

  public select(grupoCuenta: GrupoCuenta): Observable<GrupoCuenta[]>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<GrupoCuenta[]>(this.search, grupoCuenta, {headers});
  }
 
}
