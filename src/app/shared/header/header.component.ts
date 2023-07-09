import { Component } from '@angular/core';
import { ListagemProdutosService } from 'src/app/services/listagem-produtos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private listagemProdutosService: ListagemProdutosService){}
  public qntCarrinhodeCompras :any = this.listagemProdutosService.carrinhoCompras;
  public mostrar: boolean = false

  public toggleDisplay(){
    if (this.mostrar === false) {
      this.mostrar = true
    }else{
      this.mostrar = false
    }
    
  }
}
