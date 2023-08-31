import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/classes/Session.class';
import { SessionService } from 'src/app/services/sessao/session-service.service';

@Component({
  selector: 'app-remover-sessao',
  templateUrl: './remover-sessao.component.html',
  styleUrls: ['./remover-sessao.component.css']
})
export class RemoverSessaoComponent implements OnInit {

  constructor(
    private service : SessionService,
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.obterSessaoAtual();
  }

  private id : number = parseInt(this.route.snapshot.paramMap.get("id") as string);
  session : Session = new Session();

  obterSessaoAtual() : void {
    this.service.getSessionById(this.id).subscribe(resposta => this.session = resposta);
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
