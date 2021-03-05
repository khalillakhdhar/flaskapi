import { Component, OnInit } from '@angular/core';
import { Products } from '../classes/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-readprod',
  templateUrl: './readprod.component.html',
  styleUrls: ['./readprod.component.css']
})
export class ReadprodComponent implements OnInit {
products:Products[];
  constructor(private api:ProductsService) { }

  ngOnInit(): void {
    this.getprods();
  }
  getprods()
  {
    this.api.getProducts().subscribe(res=>{
      this.products = res;
      console.log(this.products);

    });
  }

}
