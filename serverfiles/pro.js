var ex=require("express")
ro=ex.Router()
module.exports=ro
/////////////////////////Insert Product////////////////////////////
ro.post("/inspro",function(req,res){
          var pdata=req.body
          console.log(pdata)
conn.Product.find({},{_id:1}).sort({_id:-1}).limit(1,function(err,result){
          if(result==0)
          pd=0
          else
          pd=result[0]._id
          pd++
conn.Product.save({_id:pd,pname:pdata.pname,active:1})

   res.send("Product Information Added")
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
   

////////////////////////////Display Product/////////////////////////
ro.get("/getproduct",function(req,res){
conn.Product.find(function(err,result){
          if (err)
          res.send(err)
          else
          res.send (result)
        })
})