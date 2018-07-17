var ex=require("express")
var app=ex()
bp=require("body-parser")
app.use(bp.json())
mg=require("mongojs")
conn=mg("mongodb://localhost:27017/admin")

var fcat=require("./serverfiles/cat")
app.use("/catname",fcat)
var fsub=require("./serverfiles/subcat")
app.use("/subname",fsub)
var fssub=require("./serverfiles/subsubcat")
app.use("/ssbname",fssub)
var fbrand=require("./serverfiles/brand")
app.use("/brand",fbrand)
var fpro=require("./serverfiles/pro")
app.use("/product",fpro)

app.listen(2004)
console.log("Server Strated 2004")
