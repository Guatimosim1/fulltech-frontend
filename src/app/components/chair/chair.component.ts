import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chair } from 'src/app/classes/chair.class';
import { ChairService } from 'src/app/services/cadeiras/chair.service';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.css']
})
export class ChairComponent implements OnInit {

  constructor(
    private service : ChairService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getCurrentChair();
  }

  private id : number = parseInt(this.route.snapshot.paramMap.get("id") as string);
  public nome : string = "";
  public currentChair : Chair = new Chair();

  private getCurrentChair() : void {
    this.service.getChairById(this.id).subscribe(resposta => this.currentChair = resposta);
  }

  public assign(nome : string) {
    this.service.assignChairByCostumerName(this.currentChair.id, nome).subscribe(res => res);
    this.fechar();
  }

  public fechar() : void {
    this.router.navigate([`sessoes/${this.currentChair.session.id}`]);
  }

}
