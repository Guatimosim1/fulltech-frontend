import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/classes/Session.class';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = "http://localhost:8080/api/sessions";

  public getSessions() : Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl);
  }

  public createSession(session : Session) : Observable<Session> {
    return this.http.post<Session>(this.baseUrl, session);
  }
}
