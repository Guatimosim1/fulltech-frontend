import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/classes/Session.class';
import { Chair } from 'src/app/classes/chair.class';
import { ChairService } from 'src/app/services/cadeiras/chair.service';
import { SessionService } from 'src/app/services/sessao/session-service.service';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrls: ['./sessao.component.css']
})
export class SessaoComponent implements OnInit {

  constructor(
    private chairService : ChairService,
    private sessionService : SessionService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.listAllChairs();
    this.getCurrentSession();
  }

  public cadeiras : Chair[] = [];
  private id : number = parseInt(this.route.snapshot.paramMap.get("id") as string);
  public currentSession : Session = new Session();

  listAllChairs() : void {
    this.chairService.getChairsBySessionId(this.id).subscribe(resposta => this.cadeiras = resposta);
  }

  getCurrentSession() : void {
    this.sessionService.getSessionById(this.id).subscribe(resposta => this.currentSession = resposta);
  }

  visualizarCadeira(chairId : number) {
    this.router.navigate(['/chair/'+chairId]);
  }

}
