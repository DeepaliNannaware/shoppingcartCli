import { Component, OnInit,Inject } from '@angular/core';
import {Http} from '@angular/http'


@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css']
})
export class SubCatComponent implements OnInit {
  st1;discat;disscat;drpcat;update=0;txt2;drpcat1;discat1;
  constructor(@Inject(Http)public objs){}

  ngOnInit() {
    this.displaycat(),this.dispalysscat(),this.funsave(),this.displaycat1()
  }
////////////////////Insert Sub Category////////////////////
insscat(){
var scat={sname:this.st1,cid:this.drpcat}
this.objs.post("subname/insscat",scat).subscribe(sts=>{
  alert(sts._body)
})}
//////////////////////////////Display Dropdown Category/////////////////////
displaycat(){
  this.objs.get("catname/getcat").subscribe(dt=>{
    //alert(dt._body)
    
    this.discat=JSON.parse(dt._body)
  })}
///////////////////////////////Display Dropdown Category 2nd table///////////////
displaycat1(){
  this.objs.get("catname/getcat").subscribe(dt=>{
 alert(dt._body)
    
    this.discat1=JSON.parse(dt._body)
  })}
////////////////////////////////active inactive button////////////
funInactive(b1,inact){
  b1.active=0
  var hd={_id:b1._id,active:inact}
  this.objs.post("subname/inactive",hd).subscribe(dt=>{
alert(dt._body)
  })
  }
  funactive(b2,act){
    b2.active=1
    var hd={_id:b2._id,active:act}
    this.objs.post("subname/active",hd).subscribe(dtt=>{
      alert(dtt._body)
    })

  }


////////////////////////Display Sub Category///////////////////////////////////////////
dispalysscat(){
  this.objs.get("subname/getscat").subscribe(dt=>{
    ///alert(dt._body)
    this.disscat=JSON.parse(dt._body)
  })
}

////////////////////////////////////////Update Button///////////////////////////////////
funupdate(y){
this.update=y._id
this.txt2=y.sname
this.drpcat1=y.cid
this.displaycat1()
}

///////////////////////////Save Button////////////////////////////////////////////////////////
funsave(){
var ols={_id:this.update}
var news={cid:this.drpcat1,sname:this.txt2}
this.objs.post("subname/savesub",[ols,news]).subscribe(st=>{
  alert(st._body)
  this.dispalysscat()
  
})
}
}