import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.scss']
})
export class ProdutosListagemComponent implements OnInit {

  products: Array<any>;


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.productService.listar().subscribe(dados => this.products = dados);

  }

}
