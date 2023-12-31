import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPokemmon(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  postNewUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/user/postItem', user);
  }

  getALlUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
  }
}
