const db = require('./databases/connect');
const express = require('express');
const path = require("path");
const cors = require("cors");
const app = express();
const projetrouter=require('./router/projet')
const condidatrouter = require('./router/condidat')
const bodyParser=require('body-parser');  
const condidat = require('./models/condidat');
const user = require('./router/user');

const postrouter=require('./router/post');

app.use(cors({origin: true, credentials: true}));
app.use(express.json( {extended:false}));
app.use(bodyParser.urlencoded({extended:false}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", " ,content-type");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  
  next();

});
app.use(bodyParser.json());
app.use("/admin",projetrouter)

app.use("/admin",condidatrouter)
app.use("/admin",user)
app.use("/admin",postrouter)


db();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/upload',express.static('upload'))
app.use('/uploadcv',express.static('uploadcv'))
const port =3000;
 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

