import { Component,Inject, OnInit } from '@angular/core';
import {Http} from '@angular/http'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dispro;pro1;pro2;pro3;pro4;pro5;discat;drpcat;disscat;sscatdata;scatid;
  dissscat;drps;drpss;bget;global=0;
  constructor(@Inject(Http)public objp) {this.dispalypro(),this.disbrand(),
    this.displaycat(),this.dispalysscat()}
  
  ngOnInit() {
  }
//////////////////////////Insert Product////////////////////////////////////////////////
inspro(){
  var pro={pname:this.pro1,price:this.pro2,pcolor:this.pro3,pqty:this.pro4,prate:this.pro5,}
  this.objp.post("/product/inspro",pro).subscribe(dt=>{
    alert(dt._body)
  })
}
///////////////////////////Display Product//////////////////
dispalypro(){
   this.objp.get("/product/getproduct").subscribe(dt=>{
     this.dispro=JSON.parse(dt._body)
     ///alert(dt._body)
   })
}
//////////////////////////////Display Dropdown Category////////////////////////////////////
displaycat(){
  this.objp.get("catname/getcat").subscribe(dt=>{
    //alert(dt._body)
    
    this.discat=JSON.parse(dt._body)
  })}
  ////////////////////////////Display Dropdown Sub-Category/////////////////////////////////
  dispalysscat(){
    var dd={cid:this.drpcat}
    this.objp.post("subname/relscat",dd).subscribe(dt=>{
      alert(dt._body)
      this.disscat=JSON.parse(dt._body)
    })
  }

////////////////////Display Dropdrown Sub Sub Category//////////////////////
dissscat1
dispsscat(){
  var pp={sid:this.drps}
  alert(pp)
  this.objp.post("ssbname/relsscat",pp).subscribe(dt=>{
    alert(dt._body)
    this.dissscat1=JSON.parse(dt._body)
    
  })
}
  ////////////////////////////////active inactive button////////////
  funInactive(b1,inact){
    b1.active=0
    var hd={_id:b1._id,active:inact}
    this.objp.post("ssbname/inactive",hd).subscribe(dt=>{
  alert(dt._body)
    })
    }
    funactive(b2,act){
      b2.active=1
      var hd={_id:b2._id,active:act}
      this.objp.post("ssbname/active",hd).subscribe(dtt=>{
        alert(dtt._body)
      })
  
    }
////////////////////////////////////////Display Brand Dropdown///////////////
disbrand(){
  var bb={ssid:this.drpss}
  alert(bb)
  this.objp.post("brand/relbrand",bb).subscribe(dt=>{
    alert(dt._body)
    this.bget=JSON.parse(dt._body)
  })
}
/////////////////////////////update button////////////////////////////////
funupdate(y){
  this.global=y._id

}

}
