import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CriarSessaoComponent } from './components/criar-sessao/criar-sessao.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SessionService } from './services/sessao/session-service.service';
import { ErroComponent } from './components/erro/erro.component';
import { SessaoComponent } from './components/sessao/sessao.component';
import { AtualizarSessaoComponent } from './components/atualizar-sessao/atualizar-sessao.component';
import { RemoverSessaoComponent } from './components/remover-sessao/remover-sessao.component';
import { ChairComponent } from './components/chair/chair.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CriarSessaoComponent,
    SobreComponent,
    ErroComponent,
    SessaoComponent,
    AtualizarSessaoComponent,
    RemoverSessaoComponent,
    ChairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
