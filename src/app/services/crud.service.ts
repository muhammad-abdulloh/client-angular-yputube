import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  users(): Observable<any>{
    return this.http.get<any>('https://localhost:44396/api/Users/GetAllUsers');
  }


}
