import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/classes/Session.class';
import { SessionService } from 'src/app/services/sessao/session-service.service';

@Component({
  selector: 'app-criar-sessao',
  templateUrl: './criar-sessao.component.html',
  styleUrls: ['./criar-sessao.component.css']
})
export class CriarSessaoComponent implements OnInit {

  constructor(private service : SessionService, private router : Router) { }

  ngOnInit(): void {
  }

  session : Session = new Session();

  public createSession() : void {
    this.service.createSession(this.session).subscribe({
      complete: () => this.redirectTo(''),
      error: erro => console.error(erro)
    });
  }

  private redirectTo(rota : string) : void {
    this.router.navigate([rota]);
  }

}
