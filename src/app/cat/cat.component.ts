import { Component, OnInit ,Inject} from '@angular/core';
import{Http} from '@angular/http'
import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

 constructor(@Inject(Http)public obj){this.displaycat()} 
  
  ngOnInit() {
  }
  

  ////////////////////////////////Insert Category//////////////////////////////////
  ct1;discat
  inscat(){
   var ct={cname:this.ct1}
  this.obj.post("catname/inscat",ct).subscribe(ct=>{
alert(ct._body)
this.displaycat()
  })}
  ////////////////////////////////active inactive button////////////
  funInactive(b1,inact){
  b1.active=0
  var hd={_id:b1._id,active:inact}
console.log(b1)
  this.obj.post("catname/inactive",hd).subscribe(dt=>{
alert(dt._body)
  })
  }
  funactive(b2,act){
    b2.active=1
    var hd={_id:b2._id,active:act}
    this.obj.post("catname/active",hd).subscribe(dtt=>{
      alert(dtt._body)
    })

  }
////////////////////////////////Display Category///////////////////////
displaycat(){
  this.obj.get("catname/getcat").subscribe(dt=>{
    alert(dt._body)
    
    this.discat=JSON.parse(dt._body)
  })}
  /////////////////////////////Update Button/////////////////////////
  global=0;txt2
  funupdate(y){
    this.global =y._id
    this.txt2=y.cname
  }
  /////////////////////////Save Button//////////////////////////////////////
  funsave(){
      
 var old={_id:this.global}
 var newsave={cname:this.txt2}
  this.obj.post("catname/getcatsave",[old,newsave]).subscribe(dt=>{
  alert(dt._body)
  this.displaycat()  })
}
}