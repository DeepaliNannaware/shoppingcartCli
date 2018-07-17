var ex=require("express")
ro=ex.Router()
module.exports=ro
/////////////////////////////Insert Category/////////////////
ro.post("/insbrand",function(req,res){
          var bdata=req.body
conn.Brand.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result)
{
          if (result==0)
          br=0
          else
          br=result[0]._id
          br++
conn.Brand.insert({_id:br,cid:bdata.cid,sid:bdata.sid,ssid:bdata.ssid,bname:bdata.bname,active:1})
res.send("Inserted Brand")

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
  
//////////////////////////////Display brand///////////////////
ro.get("/disbr",function(req,res){
conn.Brand.find(function(err,bresult){
conn.subsubcategory.find(function(err,ssresult){
conn.subcategory.find(function(err,sresult){
conn.category.find(function(err,cresult){
         var  arr=[]
for(b=0;b<bresult.length;b++){
for(ss=0;ss<ssresult.length;ss++){
for(s=0;s<sresult.length;s++){
for(c=0;c<cresult.length;c++){
if(bresult[b].cid==cresult[c]._id && bresult[b].sid==sresult[s]._id &&
bresult[b].ssid==ssresult[ss]._id){
var bbb=bresult[b]
bbb.ssname=ssresult[ss].ssname
bbb.sname=sresult[s].sname
bbb.cname=cresult[c].cname
console.log(bbb)
arr.push(bbb)
}
}
}
}
}
res.send(arr)
})
})
})          
})
})
//////////////////////////////////////Display Product Drop Brand////////////
ro.post("/relbrand",function(req,res){
          var bb=req.body
          conn.Brand.find(bb,function(err,result){
                    res.send(result)
          })
})
////////////////////////////upadate save button//////////////////////////////
ro.post("savebrand",function(req,res){
          var bb=req.body
          conn.Brand.update(ss[0],{$set:ss[1]})
          res.send("Save Updated")
})