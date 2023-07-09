import { Component, DoCheck, OnChanges } from '@angular/core';
import { ListagemProdutosService } from 'src/app/services/listagem-produtos.service';

@Component({
  selector: 'carrinhoCompras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent {
  public conteudoCarrinho:any = this.listagemProdutosService.carrinhoCompras;

  //  public valorTotal: any = this.conteudoCarrinho.reduce((acumulador: any, carrinhoComprar: any) => acumulador + carrinhoComprar.precoProduto, 0)

  constructor(private listagemProdutosService: ListagemProdutosService){}

  somaPrecos(): number {
    let soma = 0;
    for (const produto of this.listagemProdutosService.carrinhoCompras) {
      soma += produto.precoProduto;
    }
    return soma;
  }

  apagarItem(event: number){
    this.conteudoCarrinho.splice(event, 1)
  }
}
