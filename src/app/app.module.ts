import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InputBuscaComponent } from './shared/input-busca/input-busca.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListaProdutosComponent } from './shared/lista-produtos/lista-produtos.component';
import { TrocaModoComponent } from './shared/troca-modo/troca-modo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputBuscaComponent,
    HeaderComponent,
    ListaProdutosComponent,
    TrocaModoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
