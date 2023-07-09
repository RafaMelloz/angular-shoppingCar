import { Component, OnInit } from '@angular/core';
import { ListagemProdutosService } from 'src/app/services/listagem-produtos.service';

@Component({
  selector: 'lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {
  
  public listaProdutos: any = this.listagemProdutosService.produtos;
  public getListaProdutos: any = this.listagemProdutosService.produtos;

  constructor(private listagemProdutosService: ListagemProdutosService){}


  public addCarrinho(produto: any){
    const produtoExistente = this.listagemProdutosService.carrinhoCompras.find((p: any) => p.id === produto.id);

      if (produtoExistente) {
        // Se o produto já existe, soma o precoProduto
        produtoExistente.precoProduto += produto.precoProduto;
        produtoExistente.quantidade += produto.quantidade;

      } else {
        // Se o produto não existe, adiciona ao array produtosSelecionados
        this.listagemProdutosService.carrinhoCompras.push({ ...produto });
    }
  }
}
