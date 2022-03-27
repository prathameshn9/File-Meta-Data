var fs = require('fs');
let express=require('express');
let multer=require('multer')
let upload=multer()
let app=express();
port=5000;
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/index.html')
})

app.post('/api/fileanalyse',upload.single("upfile"),(req,res)=>{
    if(!req.file){
        return res.json({'error':'file not uploaded'})
    }
    return res.json(
        {name:req.file.originalname,type:req.file.mimetype,size:req.file.size}
       
    )
})
app.listen(port,()=>{
    console.log(`localhost ${port}`)
})