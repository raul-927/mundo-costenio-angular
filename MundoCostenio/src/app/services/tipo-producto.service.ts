import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Host } from '../constant/url/Host';
import { TipoProductoUrl } from '../constant/url/TipoProductoUrl';
import { TipoProducto }from '../domain/TipoProducto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  private url = Host.LOCAL_HOST + TipoProductoUrl.TIPO_PRODUCTO_URL;
  private urlTipoProducto = Host.LOCAL_HOST + TipoProductoUrl.TIPO_PRODUCTO_SEARCH_URL;
  
  constructor(private http: HttpClient) { }

  public insert(tipoProducto: TipoProducto): Observable<TipoProducto>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<TipoProducto>(this.url, tipoProducto, {headers});
  }
  public update(tipoProducto: TipoProducto): Observable<TipoProducto>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<TipoProducto>(this.url, tipoProducto, {headers});
  }

  public delete(tipProdId: number): Observable<TipoProducto>{
    let deleteUrl = this.url + '/' + tipProdId;
    console.log('deleteUrl: '+deleteUrl);
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    
    return this.http.delete<TipoProducto>(deleteUrl);
  }

  public select(tipoProducto: TipoProducto): Observable<TipoProducto[]>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization','YmFzaWMgYmVhc2NhcnZhcmV6');
    return this.http.post<TipoProducto[]>(this.urlTipoProducto,tipoProducto,{headers});
  }
}
