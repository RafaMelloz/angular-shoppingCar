import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListaProdutosComponent } from './shared/lista-produtos/lista-produtos.component';
import { TrocaModoComponent } from './shared/troca-modo/troca-modo.component';
import { CarrinhoComprasComponent } from './shared/carrinho-compras/carrinho-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListaProdutosComponent,
    TrocaModoComponent,
    CarrinhoComprasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
