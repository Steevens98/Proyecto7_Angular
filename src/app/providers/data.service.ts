import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private URL: string = 'http://localhost:3000/rest/Paciente/findAll/json';

  getResponse() {
    return this.http.get(this.URL);
  }
}
