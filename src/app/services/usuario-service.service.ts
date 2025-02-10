import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  httpClient = inject(HttpClient)
  private baseUrl :string = 'https://peticiones.online/api/users';


  constructor() { }

  getAll(): Observable<Usuario[]> {
    return this.httpClient.get<any>(this.baseUrl)
      .pipe(
        map((response: any) => response.results as Usuario[])
      );
  }

  getAllWithPromises(): Promise<Usuario[]> {
    return lastValueFrom(this.httpClient.get<{ results: Usuario[] }>(this.baseUrl))
      .then(response => response.results);
  }

  getById(_id: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${_id}`);
  }
  
  getNombreCompleto(usuario: Usuario): string {
    return `${usuario.first_name} ${usuario.last_name}`;
  }
  // getById(_id: string): Observable<Usuario> {
  //   const url = `${this.baseUrl}/${_id}`;
  //   return this.httpClient.get<Usuario>(url);
  // }

}
