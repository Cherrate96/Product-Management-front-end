import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductServiceService} from '../Services/product-service.service';
import {Router} from '@angular/router';
import {promisify} from 'util';
import {Product} from '../Model/product.model.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
private CurrentProduit: Product;
private  mode:number=1;
private prod:Product[];

  constructor(private NouveauProduit: ProductServiceService, private router: Router,private produitservice:ProductServiceService ) { }

  ngOnInit() {
  

  }
alertSucce()
{
  alert('Bien Ajoutée')

}

  onSaveProduit(value: any) {
  this.NouveauProduit.SaveResource(this.NouveauProduit.host,value)
    .subscribe(res=>{
      this.CurrentProduit=res;
      this.mode=2;
    },err=>{
      console.log(err)
    })
  }
}
