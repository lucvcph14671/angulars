import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private id:any = "";

  constructor(routes : ActivatedRoute) { 

    this.id = routes.snapshot.paramMap.get('id');
    
  }

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

  showProduct: any = this.product.find(product => product.id == this.id);

}
