import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/classes/Session.class';
import { SessionService } from 'src/app/services/sessao/session-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : SessionService, private router : Router) { }

  ngOnInit(): void {
    this.listAllSessions();
  }

  public sessions : Session[] = [];

  public listAllSessions() : void {
    this.service.getSessions().subscribe({
      next: resposta => this.sessions = resposta,
      error: erro => console.log(erro)
    });
  }

  private redirectTo(rota : string) : void {
    this.router.navigate([rota]);
  }
}
