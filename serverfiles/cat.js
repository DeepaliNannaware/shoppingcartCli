var ex=require("express")
ro=ex.Router()
module.exports=ro
//////////////////////////////INSERT CATEGORY///////////////////
ro.post("/inscat",function(req,res){
        var catdata= req.body
        conn.category.find({},{_id:1}).sort({_id:-1}).
        limit(1,function(err,result){
                if(result==0)
                lv=0
                else
                lv=result[0]._id
                lv++
                conn.category.save({_id:lv,cname:catdata.cname,active:1}) 
        res.send("Inserted")
        })
        
})
/////////////////////////////Display Category////////////////////
ro.get("/getcat",function(req,res){
          conn.category.find(function(err,result){
                    if(err)
                    res.send(err)
                    else
                   res.send(result)
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
                
///////////////////////////////////Save & Update Button//////////////////
ro.post("/getcatsave",function(req,res){
        var sv=req.body
        console.log(sv)
        conn.category.update(sv[0],{$set:sv[1]})
        res.send("Save Updated")
})