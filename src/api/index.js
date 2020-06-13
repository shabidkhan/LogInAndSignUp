const  express = require('express');
const fs = require('fs')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.post('/',(req,res)=>{
    var data=JSON.parse(fs.readFileSync("./Data/data.json"))
    var dic={}

    dic["Number"]=req.body.Number
    dic["DOB"]=req.body.DOB
    dic["password"]=req.body.Password
    data[req.body.Username]=dic
    console.log(data);
    
    fs.writeFileSync("./Data/data.json",JSON.stringify(data,4,null))
})


app.listen(3000)
