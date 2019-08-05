import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  getInfoPerson(user: string): Observable<any> {
    const name = user ? user.toLowerCase() : '';
    const url = `https://api.github.com/users/${name}`;
    return this.http.get(url);
  }
}
