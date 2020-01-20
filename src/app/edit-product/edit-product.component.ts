import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../Services/product-service.service';
import {Product} from '../Model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
private CurrentProduct:Object;
private url:string;
private mode:number=1;
  constructor(private router:Router,
              private NouveauProduit:ProductServiceService
              ,private activateRouter:ActivatedRoute) { }

  ngOnInit() {
    this.url=atob(this.activateRouter.snapshot.params.id)
    this.NouveauProduit.getResource(this.url)
      .subscribe(data=>{
        this.CurrentProduct =data;
      },err=>{
        console.log(err)
      })
  }
  onUpdateProduct(value:any){
    this.NouveauProduit.updateResource(this.url,value)
      .subscribe(data=>{
        this.mode=2;
      },err=>{
        console.log(err);
    })
  }

}
