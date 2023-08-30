import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CriarSessaoComponent } from './components/criar-sessao/criar-sessao.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SessaoComponent } from './components/sessao/sessao.component';
import { AtualizarSessaoComponent } from './components/atualizar-sessao/atualizar-sessao.component';
import { RemoverSessaoComponent } from './components/remover-sessao/remover-sessao.component';
import { ChairComponent } from './components/chair/chair.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sessoes", redirectTo: ""},
  {path: "sessoes/:id", component: SessaoComponent},
  {path: "criar-sessao", component: CriarSessaoComponent},
  {path: "atualizar/:id", component: AtualizarSessaoComponent},
  {path: "remover/:id", component: RemoverSessaoComponent},
  {path: "chair/:id", component: ChairComponent},
  {path: "sobre", component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
