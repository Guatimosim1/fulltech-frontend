import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chair } from 'src/app/classes/chair.class';

@Injectable({
  providedIn: 'root'
})
export class ChairService {

  constructor(private http : HttpClient) { }

  private baseUrl : string = "http://localhost:8080/api/chairs";

  public getChairsBySessionId(id : number) : Observable<Chair[]> {
    return this.http.get<Chair[]>(`${this.baseUrl}/session/${id}`)
  }

  public getChairById(id : number) : Observable<Chair> {
    return this.http.get<Chair>(this.baseUrl+"/"+id);
  }

  public assignChairByCostumerName(chairId : number, name : string) : Observable<Chair> {
    return this.http.put<Chair>(this.baseUrl+"/"+chairId, {nomeCliente : name});
  }
}
