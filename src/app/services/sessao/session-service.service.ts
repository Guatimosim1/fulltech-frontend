import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/classes/Session.class';
import { SessionPost } from 'src/app/classes/session-post.class';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = "http://localhost:8080/api/sessions";

  public getSessions() : Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl);
  }

  public getSessionById(id : number) : Observable<Session> {
    return this.http.get<Session>(`${this.baseUrl}/${id}`);
  }

  public createSession(session : Session) : Observable<Session> {
    return this.http.post<Session>(this.baseUrl, session);
  }

  public updateSession(session : SessionPost, id : number) : Observable<Session> {
    return this.http.put<Session>(`${this.baseUrl}/${id}`, session);
  }

  public removeSession(id : number) : Observable<Session> {
    return this.http.delete<Session>(this.baseUrl+"/"+id);
  }
}
