import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8081/api/pet';
const baseUrlCat = 'http://localhost:8081/api/category';
const baseUrlTags = 'http://localhost:8081/api/tag';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {}

   getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    

    const headerOptions = new HttpHeaders({
      'Content-Type':  'application/json'
    });

    return this.http.post(`${baseUrl}/`, data,{
      headers: headerOptions
    });
  }

  getAllCat(): Observable<any> {
    return this.http.get(`${baseUrlCat}/`);
  }

  getAllTags(): Observable<any> {
    return this.http.get(`${baseUrlTags}/`);
  }
}
