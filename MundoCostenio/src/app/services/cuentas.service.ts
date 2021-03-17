import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Host } from '../constant/url/Host';
import { CuentaUrl } from '../constant/url/CuentaUrl';
import { Cuenta }from '../domain/Cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  private url = Host.LOCAL_HOST + CuentaUrl.CUENTA_URL;
  private urlCuentas = Host.LOCAL_HOST + CuentaUrl.CUENTAS_URL;
  
  constructor(private http: HttpClient) { }

  public insert(cuenta: Cuenta): Observable<Cuenta>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic Y291bnRlcjpzY2FydmFyZXo=');
    return this.http.post<Cuenta>(this.url, cuenta, {headers});
  }
  
  public update(cuenta: Cuenta): Observable<Cuenta>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Cuenta>(this.url, cuenta, {headers});
  }

  public delete(cuentaId: number): Observable<Cuenta>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.delete<Cuenta>(this.url + '/' + cuentaId);
  }

  public select(cuenta: Cuenta): Observable<Cuenta[]>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization','YmFzaWMgYmVhc2NhcnZhcmV6');
    return this.http.post<Cuenta[]>(this.urlCuentas,cuenta,{headers});
  }
}