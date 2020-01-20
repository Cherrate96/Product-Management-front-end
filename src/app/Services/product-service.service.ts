import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../Model/product.model.js';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
public host = 'http://localhost:8080/produits';
  constructor(private  httpClient: HttpClient ) { }

  public getProduits(page: number, size: number) {
    return this.httpClient.get(this.host + '?page=' + page + '&size=' + size);
  }
  public getAllProduits()
  {
    return this.httpClient.get(this.host);
  }
  public  getPRoduitsByMotCle(page: number, size: number, mc: string) {
    return this.httpClient.get(this.host + '/search/byDesignationPage?mc=' + mc + '&size=' + size);


  }


  public DeleteResource(url) {
    return this.httpClient.delete(url);

  }

  public  SaveResource(url, data): Observable<Product> {
    // @ts-ignore
    return this.httpClient.post<Product>(url, data);
  }

  public getResource(url): Observable<Product> {
    return this.httpClient.get<Product>(url);
  }

public updateResource(url, data): Observable<Product>  {
    return this.httpClient.put<Product>(url, data);
}


}
