import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  /*private URL: string = 'http://localhost:3000/rest/Paciente/findAll/json';
  private URLMedico: string = 'http://localhost:3000/rest/Medico/findAll/json';
  private URLEspecialidad: string = 'http://localhost:3000/rest/Especialidad/findAll/json';*/

  private URL: string = 'https://proyecto7express-production.up.railway.app/rest/Paciente/findAll/json';
  private URLMedico: string = 'https://proyecto7express-production.up.railway.app/rest/Medico/findAll/json';
  private URLEspecialidad: string = 'https://proyecto7express-production.up.railway.app/rest/Especialidad/findAll/json';

  
  getResponse() {
    return this.http.get(this.URL);
  }

  getResponseMedico() {
    return this.http.get(this.URLMedico);
  }

  getResponseEspecialidad() {
    return this.http.get(this.URLEspecialidad);
  }

}
