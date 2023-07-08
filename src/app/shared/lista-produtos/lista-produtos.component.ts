import { Component, OnInit } from '@angular/core';
import { ListagemProdutosService } from 'src/app/services/listagem-produtos.service';

@Component({
  selector: 'lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit{
  
  public listaProdutos: any = this.listagemProdutosService.produtos.produto;

  constructor(private listagemProdutosService: ListagemProdutosService){}

  ngOnInit(): void {
    
  }

  public addCarrinho(value : number){
    console.log(value)
  }
}
