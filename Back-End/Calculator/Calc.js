const express= require ("express")
const bodyParser= require ("body-parser")

const app =express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req,res){
    res.sendFile(__dirname + "/calc.html")
})

app.post("/", function (req,res){
    var Fnum= Number (req.body.num1);
    var secNum = Number(req.body.num2);
    var sum = Fnum+ secNum 
    console.log(sum)
    // res.send(sum)
    res.status(200).send((sum).toString());
})


app.listen(3000,function(){console.log("server started at port 3000")
})