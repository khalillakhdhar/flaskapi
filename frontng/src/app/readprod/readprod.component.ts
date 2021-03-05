import { Component, OnInit } from '@angular/core';
import { Products } from '../classes/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-readprod',
  templateUrl: './readprod.component.html',
  styleUrls: ['./readprod.component.css']
})
export class ReadprodComponent implements OnInit {
products=new Array<Products>();
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
  delete(id:any)
  {
    if(confirm("are you sure want to delete the product?"))
    {
      this.api.delete(id).subscribe();
window.location.reload();

    }
  }

}
