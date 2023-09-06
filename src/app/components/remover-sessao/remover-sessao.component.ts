import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/classes/Session.class';
import { Chair } from 'src/app/classes/chair.class';
import { ChairService } from 'src/app/services/cadeiras/chair.service';
import { SessionService } from 'src/app/services/sessao/session-service.service';

@Component({
  selector: 'app-remover-sessao',
  templateUrl: './remover-sessao.component.html',
  styleUrls: ['./remover-sessao.component.css']
})
export class RemoverSessaoComponent implements OnInit {

  constructor(
    private service : SessionService,
    private chairService : ChairService,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.obterSessaoAtual();
  }

  private id : number = parseInt(this.route.snapshot.paramMap.get("id") as string);
  session : Session = new Session();
  cadeirasAssinaladas : number = 0;

  obterSessaoAtual() : void {
    this.service.getSessionById(this.id).subscribe({
      next: resposta => this.session = resposta,
      error: erro => console.error(erro),
      complete: () => this.obterCadeirasSessaoAtual()
    });
  }

  private obterCadeirasSessaoAtual() : void {
    this.chairService.getChairsBySessionId(this.session.id).subscribe({
      next: res => {
        this.cadeirasAssinaladas = res.filter(chair => chair.status).length;
      }
    });
  }

  removerSessaoAtual() : void {
    this.service.removeSession(this.id).subscribe({
      complete: () => this.fechar(),
      error: erro => console.log(erro)
    });
  }

  fechar() : void {
    this.router.navigate([''])
  }

}
