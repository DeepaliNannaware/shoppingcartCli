import { Component,Inject, OnInit } from '@angular/core';
import {Http} from '@angular/http'
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
br1;brand;discat;disscat;drpcat;drps;dissscat;global=0;t1;drpcat1;drps1;drpss1;drpss;
discat1;disscat1;dissscat1
  constructor(@Inject(Http) public objb) {this.disbr(),this.displaycat(),
    this.dispalysscat(),this.dispsscat()}

  ngOnInit() {
  }
//////////////////////////////////Insert Brand////////////////////////////////////////////
insbrand(){
  var insbr={cid:this.drpcat,sid:this.drps,ssid:this.drpss,bname:this.br1}
  this.objb.post("brand/insbrand",insbr).subscribe(br=>{
    alert(br._body)
  })
}
////////////////////////////////active inactive button////////////
funInactive(b1,inact){
  b1.active=0
  var hd={_id:b1._id,active:inact}
  this.objb.post("brand/inactive",hd).subscribe(dt=>{
alert(dt._body)
  })
  }
  funactive(b2,act){
    b2.active=1
    var hd={_id:b2._id,active:act}
    this.objb.post("brand/active",hd).subscribe(dtt=>{
      alert(dtt._body)
    })

  }

///////////////////////Display Brand/////////////////////////////////////////////////////
disbr(){
this.objb.get("brand/disbr").subscribe(dt=>{
  this.brand=JSON.parse(dt._body)
 // alert(this.brand)
})
}
//////////////////////////////Display Dropdown Category////////////////////////////////////
displaycat(){
  this.objb.get("catname/getcat").subscribe(dt=>{
    //alert(dt._body)
    
    this.discat=JSON.parse(dt._body)
  })}
  ////////////////////////////Display Dropdown Sub-Category/////////////////////////////////
  dispalysscat(){
    var dd={cid:this.drpcat}
    this.objb.post("subname/relscat",dd).subscribe(dt=>{
     // alert(dt._body)
      this.disscat=JSON.parse(dt._body)
    })
  }
/////////////////////////////////Display Sub Sub Category Dropdown///////////////////
dispsscat(){
  var pp={sid:this.drps}
  //alert(pp)
  this.objb.post("ssbname/relsscat",pp).subscribe(dt=>{
   // alert(dt._body)
    this.dissscat=JSON.parse(dt._body)
    
  })
}
///////////////////////////////Update button////////////////////////////////////////////
funupdate(y){
  this.global=y._id
  this.t1=y.bname
  this.dispalysscat1();
  this.dispsscat1();
  this.drpcat1=y.cid
  this.drps1=y.sid
  this.drpss1=y.ssid;

}
////////////////////////////////////Save button///////////////////////////////////
funsave(){
   var old1={_id:this.global}
   var new1={bname:this.t1}
   this.objb.post("brand/savebrand",[old1,new1]).subscribe(dt=>{
     alert(dt._body)
   })
}
//////////////////////////////Display Dropdown Category in ng template////////////////////////////////////
displaycat1(){
  this.objb.get("catname/getcat").subscribe(dt=>{
    //alert(dt._body)
    
    this.discat1=JSON.parse(dt._body)
    //alert(this.discat1)
  })}
////////////////////////////Display Dropdown Sub-Category ng template/////////////////////////////////
dispalysscat1(){
  var dd={cid:this.drpcat1}
  this.objb.post("subname/relscat",dd).subscribe(dt=>{
   // alert(dt._body)
    this.disscat1=JSON.parse(dt._body)
  })
}
/////////////////////////////////Display Sub Sub Category Dropdown ng template///////////////////
dispsscat1(){
  var pp={sid:this.drps1}
 // alert(pp)
  this.objb.post("ssbname/relsscat",pp).subscribe(dt=>{
   // alert(dt._body)
    this.dissscat1=JSON.parse(dt._body)
    
  })
}

}
