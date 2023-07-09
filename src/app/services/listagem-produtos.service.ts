import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListagemProdutosService {
  public produtos:any = [
      {
        id: 1,
        imagemProduto: './assets/fone.png',
        nomeProduto:'Fone de ouvido',
        precoProduto:85.52,
        quantidade: 1
      },
      {
        id: 2,
        imagemProduto: './assets/xbox.png',
        nomeProduto: 'Xbox ',
        precoProduto: 1438.99,
        quantidade: 1
      },
      {
        id: 3,
        imagemProduto: './assets/iphone.png',
        nomeProduto: 'Iphone 14',
        precoProduto: 14000.52,
        quantidade: 1
      },
      {
        id: 4,
        imagemProduto: './assets/mesa.png',
        nomeProduto: 'Mesa de Centro',
        precoProduto: 199.99,
        quantidade: 1
      },
      {
        id: 5,
        imagemProduto: './assets/noot.png',
        nomeProduto: 'Notebook',
        precoProduto: 2100,
        quantidade: 1
      },
      {
        id: 6,
        imagemProduto: './assets/cama.png',
        nomeProduto: 'Cama',
        precoProduto: 579.99,
        quantidade: 1
      }
    ]
  
  public carrinhoCompras:any =[]


  
  constructor() { }
}
