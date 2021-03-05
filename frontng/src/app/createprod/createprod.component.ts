import { Component, OnInit } from '@angular/core';
import { Products } from '../classes/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-createprod',
  templateUrl: './createprod.component.html',
  styleUrls: ['./createprod.component.css']
})
export class CreateprodComponent implements OnInit {
product:Products
  constructor(private api:ProductsService) { }

  ngOnInit(): void {
    this.product=new Products();
  }
addprod()
{


}
}
