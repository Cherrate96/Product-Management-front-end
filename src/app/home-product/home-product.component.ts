import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';
import {ProductServiceService} from '../Services/product-service.service';
import {Router} from '@angular/router';
import {Product} from '../Model/product.model';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {
public   produits: any ;
public size:number=5;
public  currentPage:number=0;
public  totalPages:number;
public pages:Array<number>;
public  currentMotCle:string;
private p:Product;
private mode:number=1;

  constructor(private ProduitService: ProductServiceService,private router:Router) { }

  ngOnInit() {
    this.ProduitService.getProduits(this.currentPage,this.size)
      .subscribe(data => {
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits = data;

      }, err => {
        console.log(err);
      });

this.alertSupp();
  }
  alertSupp()
  {

  }

  onGetProducts() {
this.ngOnInit();
  }

  onPageProduct(i: number) {
    this.currentPage=i;
    this.ngOnInit();
    this.ChercherProduits();

  }

  onChercher(form:any)
  {
    this.currentPage=0;
    this.currentMotCle=form.motcle;
    this.ChercherProduits();
  }
  ChercherProduits()
  {

    this.ProduitService.getPRoduitsByMotCle(this.currentPage,this.size,this.currentMotCle)
      .subscribe(data => {
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.produits = data;

      }, err => {
        console.log(err);
      });  }

  onDeleteProduct(p: any) {
    let conf=confirm('Vous Etes sure ?')
    if(conf)
    {
      this.ProduitService.DeleteResource(p._links.self.href)
        .subscribe(date=>{
this.ngOnInit();
this.mode=2;

        },err=>{
          console.log(err)
        })
    }
  }

  onEditProduct(p) {
    let url= p._links.self.href;
    this.router.navigateByUrl("/editp/"+btoa(url))
  }
}
