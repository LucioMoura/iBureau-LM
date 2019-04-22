import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // Ativar plugin no Chrome-Firefox: Allow CORS: Access-Control-Allow-Origin
  productUrl = 'http://ibureau.herokuapp.com/products';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.productUrl}`);

  }
}
