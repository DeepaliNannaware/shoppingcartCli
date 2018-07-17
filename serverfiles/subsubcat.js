var ex=require("express")
ro=ex.Router()
module.exports=ro
//////////////////////insert sub sub category/////////////
ro.post("/inssscat",function(req,res){
          var ssdata=req.body
conn.subsubcategory.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
          if (result==0)
          ssv=0
          else
          ssv=result[0]._id
          ssv++
conn.subsubcategory.insert({_id:ssv,cid:ssdata.cid,sid:ssdata.sid,ssname:ssdata.ssname,active:1})
res.send("Inserted SubSubCategory")
})
})
/////////////////////////////////Active / inactive button/////////////////

ro.post("/active", function(req,res){
          Adata=req.body
          conn.category.update({_id:Adata._id},{$set:{active:Adata.active}})
          res.send("updated...")
          })
  
          ro.post("/inactive", function(req,res){
                  Adata=req.body
                  conn.category.update({_id:Adata._id},{$set:{active:Adata.active}})
                  res.send("updated...")
                  })
  
///////////////////////////Display Sub Sub Cat///////////////////////////////
ro.get("/dissscat",function(req,res){
conn.subsubcategory.find(function(err,ssresult){
conn.subcategory.find(function(err,sresult){
conn.category.find(function(err,cresult){
 var arr=[];
for(ss=0;ss<ssresult.length;ss++){
for(s=0;s<sresult.length;s++){
for(c=0;c<cresult.length;c++){
if(ssresult[ss].cid==cresult[c]._id  && ssresult[ss].sid==sresult[s]._id){
var sss=ssresult[ss]
sss.sname=sresult[s].sname 
sss.cname=cresult[c].cname
//console.log(sss)
arr.push(sss)

}
}

}
}
//console.log(arr)
res.send(arr)

})
})
})        
})
/////////////////////////////////////////////Display Sub sub cat dropdrown in brand//////////////////
          ro.post("/relsscat", function(req,res){
                    var pp=req.body
          conn.subsubcategory.find(pp,function(err,result){
                    res.send(result)
          })
})
////////////////////////////////Upadate Save Button/////////////////////////
ro.post("/savessub",function(req,res){
          var sss=req.body
          //console.log(sss)
conn.subsubcategory.update(sss[0],{$set:sss[1]})
res.send("save Upadated")
})