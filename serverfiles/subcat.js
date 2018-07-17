var ex=require("express")
ro=ex.Router()
module.exports=ro
///////////////////////////////////////////Insert Sub-Category/////////////////////////////
ro.post("/insscat",function(req,res){
var sdata=req.body
conn.subcategory.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
          if (result==0) 
          sv=0
          else
          sv=result[0]._id
          sv++

var scat={sname:this.st1}
          conn.subcategory.insert({_id:sv,cid:sdata.cid,sname:sdata.sname,active:1})
          res.send("Sub Cat Inserted")
  
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
  
///////////////////////////Display Sub Category/////////////////
ro.get("/getscat", function(req,res){
conn.subcategory.find(function(err,sresult){
conn.category.find(function(err,cresult){
       var    arr=[]
for(s=0;s<sresult.length;s++){
for (c=0;c<cresult.length;c++){
if(sresult[s].cid==cresult[c]._id){
          var getscat=sresult[s]
          getscat.cname=cresult[c].cname
          arr.push(getscat)
}
}
}
console.log(arr)
res.send(arr)
})   
})       
})
////////////////////////Display Sub Sub Category Dropdown menu in sscat /////////////////////////
ro.post("/relscat",function(req,res){
          var dd=req.body
conn.subcategory.find(dd,function(err,result){
          res.send(result)
})

})
///////////////////////////////////////Save & Update Button/////////////////////
ro.post("/savesub",function(req,res){
          var ss=req.body
          console.log(ss)
conn.subcategory.update(ss[0],{$set:ss[1]})
res.send("Save Updated")
})
///////////////////////////////////////////////////////////////////////////