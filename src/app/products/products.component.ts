import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product =[
    {
      id:1,
      NameProduct: 'Iphon 12',
      Price: 10000,
      Number: 10
    }
  ];

  newProduct = {
    id:2,
    NameProduct: '',
    Price: 0,
    Number: 0
  }

is_edit = false;

  on_change(event:any, key:string){

    this.newProduct = {
      ...this.newProduct,
      [key]: event.target.value
    };
    
  }

  sua(obj :any){

    this.newProduct = obj;
    this.is_edit = true;
  
  }
  
  onSubmit(form:any){
    console.log(0)

    if(!this.on_validate(this.newProduct)){

      return;
    }

    if(this.is_edit){
      for(let i = 0; i < this.product.length; i++){
        if(this.product[i].id === this.newProduct.id){

          this.product[i] = this.newProduct;
        }
      }
      this.is_edit = false;

    }else{

      this.newProduct.id = this.product.length+2;
      this.product.push(form);
    }

    this.newProduct = {
      id:2,
      NameProduct: '',
      Price: 0,
      Number: 0
    }
  }

  xoa(id_product :number){

    this.product = this.product.filter(function(product){
      return product.id !== id_product
    });
  }

  on_validate(obj: any){

    if(!obj.NameProduct || !obj.Price || !obj.Number ){
      
      return false;
    }
  
    return true;
  }

}
