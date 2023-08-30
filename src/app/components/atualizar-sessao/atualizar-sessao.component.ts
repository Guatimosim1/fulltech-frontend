import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/classes/Session.class';
import { SessionPost } from 'src/app/classes/session-post.class';
import { SessionService } from 'src/app/services/sessao/session-service.service';

@Component({
  selector: 'app-atualizar-sessao',
  templateUrl: './atualizar-sessao.component.html',
  styleUrls: ['./atualizar-sessao.component.css']
})
export class AtualizarSessaoComponent implements OnInit {

  constructor(
    private service : SessionService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.buscarSessaoAtual();
  }

  session : Session = new Session();

  private buscarSessaoAtual() : void {
    
    let id : number = parseInt(this.route.snapshot.paramMap.get("id") as string);
    this.service.getSessionById(id).subscribe(resposta => this.session = resposta);
  }

  public atualizarSessao(session : Session) : void {
    //let post : SessionPost = session.toPost();
    let post : SessionPost = new SessionPost();

    post.startingTime = session.startingTime;
    post.endingTime = session.endingTime;
    post.movieName = session.movieName;
    
    this.service.updateSession(post, session.id).subscribe(res => res);
    this.router.navigate(['']);
  }
}
