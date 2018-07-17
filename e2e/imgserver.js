var exp=require("express")
app=(exp)
fileupload=require("express fileUpload")
bp=require("body-parser")
app.use=(fileupload())
app.use=bp(bp.json())
app.post("/imgupload",function(req,res){
          type=req.files.imgn.minetype
          if(type =="image/jpeg"||type=="image/bmp"||typee=="image/png"){
          var dataimg=req.imgn
          
          }
})


