import { Component,Inject, OnInit } from '@angular/core';
import {Http} from '@angular/http'
@Component({
  selector: 'app-sub-sub-cat',
  templateUrl: './sub-sub-cat.component.html',
  styleUrls: ['./sub-sub-cat.component.css']
})
export class SubSubCatComponent implements OnInit {
  sss1;sscat;discat;drpcat;drps;disscat;global=0;t1;disscat1;drpcat1;discat1;drps1;
  constructor(@Inject(Http)public objss) {this.dissscat();this.displaycat(); }

  ngOnInit() {
  }
////////////////////////////Insert Sub Sub Category//////////////////
inssscat(){
  var sscat={ssname:this.sss1,cid:this.drpcat,sid:this.drps}
this.objss.post("ssbname/inssscat",sscat).subscribe(ssb=>{
  alert(ssb._body)
})
}
////////////////////////////////active inactive button////////////
funInactive(b1,inact){
  b1.active=0
  var hd={_id:b1._id,active:inact}
  this.objss.post("ssbname/inactive",hd).subscribe(dt=>{
alert(dt._body)
  })
  }
  funactive(b2,act){
    b2.active=1
    var hd={_id:b2._id,active:act}
    this.objss.post("ssbname/active",hd).subscribe(dtt=>{
      alert(dtt._body)
    })

  }

//////////////////////////////Display Dropdown Category/////////////////////
displaycat(){
  this.objss.get("catname/getcat").subscribe(dt=>{
    //alert(dt._body)
    
    this.discat=JSON.parse(dt._body)
  })}
////////////////////////////Display Dropdown Sub-Category/////////////////////
  dispalysscat(){
    var dd={cid:this.drpcat}
    this.objss.post("subname/relscat",dd).subscribe(dt=>{
      alert(dt._body)
      this.disscat=JSON.parse(dt._body)
    })
  }
  
/////////////////////////////////Dispay SubSub Category///////////////////////////////
dissscat(){
  this.objss.get("ssbname/dissscat").subscribe(dt=>{
    this.sscat=JSON.parse(dt._body)
    alert(dt._body)
  })
}
////////////////////////////////////Upadate button/////////////////////////////
funupdate(y){
  this.global=y._id
  this.t1=y.ssname
  this.dispalysscat1()
  this.displaycat1();
  this.drpcat1=y.cid
  this.drps1=y.sid
}
/////////////////////////////////Save Button/////////////////////////////////
funsave(){
   var old={_id:this.global}
   
   var new1={ssname:this.t1}
   this.objss.post("ssbname/savessub",[old,new1]).subscribe(dt=>{
     alert(dt._body)
     this.dissscat()
   })
  }
  /////////////////////////////////////Update Dropdown Category//////////////////
  displaycat1(){
    this.objss.get("catname/getcat").subscribe(dt=>{
      //alert(dt._body)
      
      this.discat1=JSON.parse(dt._body)
    })}
  
/////////////////////////////Update Dropdown SubCategory//////////////////////////
dispalysscat1() {
  var dd={cid:this.drpcat1}
    this.objss.post("subname/relscat",dd).subscribe(dt=>{
      alert(dt._body)
      this.disscat1=JSON.parse(dt._body)
    })
  
}  

}
