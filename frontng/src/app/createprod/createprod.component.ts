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
products=new Array<Products>();
up=false;
  constructor(private api:ProductsService) { }

  ngOnInit(): void {
    this.product=new Products();
    this.getprods();
  }
addprod()
{
  this.api.create(this.product as Products).subscribe(product => {this.products.push(this.product); });
  window.location.reload();
 this.product=new Products();

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
select(pr)
{
  this.product=pr;
  this.up=true;
}
cancel()
{
  this.product=new Products();
  this.up=false;
}
updateprod()
{
  this.api.update(this.product as Products).subscribe(product => {this.products.push(this.product); });
  //window.location.reload();
 
  this.product=new Products();
  this.up=false;

}
}
